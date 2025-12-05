import { CustomError} from "../error/customError.js";
import { ErrorCodes } from "../error/customError.js";
import { prisma } from "../config/db.config.js";
import bcrypt from "bcrypt";
import { createAccount, createLoginInfo, updateRefreshToken, findLoginInfoByEmailAndProvider, findLoginInfoByEmail} from "../repositories/auth.repository.js";
import { Provider } from "@prisma/client";
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const LocalregisterService = async (
    email,
    name, 
    password 
) => {

    const user = await prisma.$transaction(async (tx) => {
        const createdUser = await createAccount({
            email,
            name,
        }, tx); 

        const password_hash = await hashPassword(password);

        await createLoginInfo({
            password_hash,
            provider: Provider.local,
            user_id: createdUser.id,
        }, tx);

        return createdUser;
    });
    return user;

}

export const SocialRegisterService = async (
    email,
    name,
    sns_id,
    provider
) => {
    const user = await prisma.$transaction(async (tx) => {
        const createdUser = await createAccount({
            email,
            name,
        }, tx);

        await createLoginInfo({
            sns_id,
            provider,
            user_id: createdUser.id,
        }, tx);

        return createdUser;
    });
    return user;
}

export const LocalLoginService = async (email, password) => {

    const loginInfo = await findLoginInfoByEmailAndProvider(email, Provider.LOCAL);

    if (!loginInfo) {
        throw new CustomError(401, ErrorCodes.INVALID_CREDENTIALS, '이메일 또는 비밀번호가 올바르지 않습니다.');
    }

    const isPasswordValid = await bcrypt.compare(password, loginInfo.password_hash);

    if (!isPasswordValid) {
        throw new CustomError(401, ErrorCodes.INVALID_CREDENTIALS, '이메일 또는 비밀번호가 올바르지 않습니다.');
    }

    const accessToken = generateAccessToken(loginInfo.user.id, loginInfo.user.email);
    const refreshToken = generateRefreshToken(loginInfo.user.id, loginInfo.user.email);
    
    await updateRefreshToken(loginInfo.user.id, refreshToken, prisma);

    return { accessToken, refreshToken }

}

export const GoogleLoginService = async (email) => {
    const loginInfo = await findLoginInfoByEmailAndProvider(email, Provider.google);

    if (!loginInfo) {
        throw new CustomError(401, ErrorCodes.USER_NOT_FOUND, '등록되지 않은 사용자입니다.');
    }

    const accessToken = generateAccessToken(loginInfo.user.id, loginInfo.user.email);
    const refreshToken = generateRefreshToken(loginInfo.user.id, loginInfo.user.email);
    
    await updateRefreshToken(loginInfo.user.id, refreshToken, prisma);

    return { accessToken, refreshToken };
}


export const refreshTokenService = async (clientRefreshToken) => {
    try{
        const { email } = verifyRefreshToken(clientRefreshToken);
    } catch (error) {
        throw new CustomError(401, ErrorCodes.INVALID_TOKEN, '유효하지 않은 리프레시 토큰입니다.');
    }
    
    const { refresh_token, user } = await findLoginInfoByEmail(email);

    if (!refresh_token || refresh_token !== clientRefreshToken) {
        throw new CustomError(401, ErrorCodes.INVALID_TOKEN, '유효하지 않은 리프레시 토큰입니다.');
    }

    const newAccessToken = generateAccessToken(user.id, user.email);
    const newRefreshToken = generateRefreshToken(user.id, user.email);
    await updateRefreshToken(user.id, newRefreshToken, prisma);

    return { newAccessToken, newRefreshToken };
}


export const clearRefreshToken = async (userId) => {
    await updateRefreshToken(userId, null);
}

export const generateAccessToken = (userId, email) => {
    return jwt.sign(
        { userId, email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
}

export const generateRefreshToken = (userId, email) => {
    return jwt.sign(
        { userId, email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
}

export const verifyRefreshToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        return decoded;
    } catch (error) {
        throw new CustomError(401, ErrorCodes.INVALID_TOKEN, '유효하지 않은 리프레시 토큰입니다.');
    }
}



