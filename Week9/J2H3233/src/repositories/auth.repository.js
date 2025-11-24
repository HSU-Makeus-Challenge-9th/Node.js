import { prisma } from "../config/db.config.js";
import { CustomError, ErrorCodes } from '../error/customError.js';

export const createAccount = async (data, client = prisma) => {
    try {
        return await client.user.create({
            data: {
                email: data.email,
                name: data.name,
                gender: data.gender,
                birth_date: data.birth_date,
                phone_num : data.phone_num,
            },
        });
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500, ErrorCodes.DB_OPERATION_FAILED, '사용자 계정을 생성하는 중 오류가 발생하였습니다.');
    }
}

export const createLoginInfo = async (data, client = prisma) => {
    try {
        return await client.loginInfo.create({
            data: {
                user : {
                    connect: { id: data.user_id }
                },
                password_hash: data.password_hash,
                sns_id: data.sns_id,
                provider: data.provider,
            },
        });
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500, ErrorCodes.DB_OPERATION_FAILED, '로컬 로그인 정보를 생성하는 중 오류가 발생하였습니다.');
    }
}

export const findLoginInfoByEmailAndProvider = async (email, provider, client = prisma) => {
    try {
        return await client.loginInfo.findFirst({  
            where: {
                user: {
                    email: email
                },
                provider: provider,
            },
            select: {
                id: true,
                password_hash: true,
                sns_id: true,
                provider: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    }
                }
            }
        });
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500, ErrorCodes.DB_OPERATION_FAILED, '이메일로 로그인 정보를 조회하는 중 오류가 발생하였습니다.');
    }
}

export const findLoginInfoByEmail = async (email, client = prisma) => {
    try {
        return await client.loginInfo.findFirst({  
            where: {
                user: {
                    email: email
                }
            },
            select: {
                id: true,
                refresh_token: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    }
                }
            }
        });
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500, ErrorCodes.DB_OPERATION_FAILED, '이메일로 로그인 정보를 조회하는 중 오류가 발생하였습니다.');
    }
}




export const updateRefreshToken = async (userId, refreshToken, client = prisma) => {
    try {
        return await client.loginInfo.update({
            where: {
                user_id: userId,
            },
            data: {
                refresh_token: refreshToken,
            },
        });
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500, ErrorCodes.DB_OPERATION_FAILED, '리프레시 토큰을 업데이트하는 중 오류가 발생하였습니다.');
    }
}

export const findByEmail = async (email, client = prisma) => {
    try {
        return await client.user.findUnique({
            where: { email: email }
        });
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500, ErrorCodes.DB_OPERATION_FAILED, '이메일로 사용자를 조회하는 중 오류가 발생하였습니다.');
    }
}