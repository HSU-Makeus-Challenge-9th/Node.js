import { prisma } from "../config/db.config.js"
import { CustomError, ErrorCodes } from '../error/customError.js';

export const findByUserId = async (userId) => {
    try {
        const userData = await prisma.user.findUnique({
            where: { id: userId }
        });
        return userData;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500, ErrorCodes.DB_OPERATION_FAILED, '사용자 정보를 조회하는 중 오류가 발생하였습니다.');
    }
};


