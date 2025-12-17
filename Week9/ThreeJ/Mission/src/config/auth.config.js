import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { prisma } from "./db.config.js";
import jwt from "jsonwebtoken"; // JWT 생성을 위해 import 

import { ResourceNotFoundError } from "../res/error/custom-error.js";

dotenv.config();
const secret = process.env.JWT_SECRET; // .env의 비밀 키 

export const generateAccessToken = (user) => {
    return jwt.sign(
        { id: Number(user.id), email: user.email }, 
        secret,                           
        { expiresIn: '1h' }                 
    );
};

export const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: Number(user.id) },                   
        secret,
        { expiresIn: '14d' }                
    );
};

// GoogleVerify 
const googleVerify = async (profile) => {
    const email = profile.emails?.[0]?.value;
    const providerId = profile.id;
    if (!email || !providerId) throw new Error("Google profile 정보 부족");

    const user = await prisma.user.findFirst({
        where: { provider: "GOOGLE", providerId },
    });

    if (user !== null) {
        return { id: user.id, email: user.email, name: user.name };
    }

    const phonePlaceholder = `GOOGLE-${providerId}`.slice(0, 15); // 고유 전화번호 대용
    const created = await prisma.user.create({
        data: {
            name: profile.displayName,
            gender: "NONE",
            birth: new Date("1970-01-01"), // 추후 수정
            address: "추후 수정",
            detailAddress: null,
            nickname: "추후 수정",
            email,
            phone: phonePlaceholder, // unique 제약
            provider: "GOOGLE",
            providerId,
            role: "USER",
            status: "ACTIVE",
        },
    });

    return { id: created.id, email: created.email, name: created.name };
};

// GoogleStrategy 
export const googleStrategy = new GoogleStrategy(
    {
        clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID,
        clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET,
        callbackURL: "/oauth2/callback/google", 
        scope: ["email", "profile"],
    },
    
    async (accessToken, refreshToken, profile, cb) => {
        try {
            const user = await googleVerify(profile);

            const jwtAccessToken = generateAccessToken(user);
            const jwtRefreshToken = generateRefreshToken(user);

            return cb(null, {
                accessToken: jwtAccessToken,
                refreshToken: jwtRefreshToken,
            });
        } catch (err) {
            return cb(err);
        }
    }
);

// JWT 검증 미들웨어
const jwtOptions = {
    // 요청 헤더의 'Authorization'에서 'Bearer <token>' 토큰을 추출
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

export const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await prisma.user.findFirst({ where: { id: payload.id } });

        if (user) {
            return done(null, user);
        } else {
            return done(new ResourceNotFoundError("사용자"), false);
        }
    } catch (err) {
        return done(err, false);
    }
});