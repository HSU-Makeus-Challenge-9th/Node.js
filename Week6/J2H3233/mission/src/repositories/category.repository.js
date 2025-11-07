import { prisma } from "../config/db.config.js"
import { CustomError, ErrorCodes } from '../error/customError.js';

export const findByCategory = async (category) => {
    try {
        const categoryData = await prisma.category.findUnique({
            where: { category }
        });
        return categoryData;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500, ErrorCodes.DB_OPERATION_FAILED, '카테고리를 조회하는 중 오류가 발생하였습니다.');
    }
};


