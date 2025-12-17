// src/middlewares/auth.js

import passport from 'passport';
import { RoleRequiredError } from '../res/error/custom-error.js';

// JWT 인증 필수 미들웨어
export const isLogin = passport.authenticate('jwt', { session: false });

// 역할 확인 미들웨어
export const checkRole = (allowedRoles) => {
    return async (req, res, next) => {
        try {
            const user = req.user;
            
            // 역할 확인
            if (!allowedRoles.includes(user.role)) {
                throw new RoleRequiredError(allowedRoles);
            }
            
            next();
        } catch (error) {
            next(error);
        }
    };
};