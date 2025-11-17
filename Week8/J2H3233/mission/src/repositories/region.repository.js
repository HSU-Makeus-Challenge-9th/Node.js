import { prisma }  from "../config/db.config.js";
import { CustomError, ErrorCodes } from '../error/customError.js';

export const findByRegionCode = async (regionCode, client = prisma) => {
    try {
        const region = await client.region.findUnique({
            where: { region_code: regionCode }
        });
        return region;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','지역 코드 조회중 오류가 발생하였습니다.');
    }
};

export const findById = async (id, client = prisma) => {
    try {
        const region = await client.region.findUnique({
            where: { id }
        });
        return region;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','지역을 조회하는 중 오류가 발생하였습니다.');
    }
};
