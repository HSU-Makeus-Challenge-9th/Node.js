import { prisma }  from "../config/db.config.js";
import { CustomError, ErrorCodes } from '../error/customError.js';

export const insertStore = async (data, region, category) => {
    try {
        const store = await prisma.store.create({
            data: {
                region_id: region.id,
                store_name: data.name,
                address_detail: data.address,
                category_id: category.id
            }
        });
        return store;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','가게 생성 중 오류가 발생하였습니다.');
    }
};

export const getStoreById = async (storeId, client = prisma) => {
    try {
        const store = await client.store.findUnique({
            where: { id: storeId }
        });
        return store;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','가게 조회 중 오류가 발생하였습니다.');
    }
};

export const existStoreById = async (storeId, client = prisma) => {
    try {
        const count = await client.store.count({
            where: { id: storeId }
        });
        return count > 0;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','가게 조회 중 오류가 발생하였습니다.');
    }
};


