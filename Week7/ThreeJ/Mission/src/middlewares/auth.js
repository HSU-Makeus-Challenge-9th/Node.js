// src/middlewares/auth.js

import { 
    RequiredFieldError,
    RoleRequiredError,
    ResourceNotFoundError
} from '../res/error/custom-error.js';
import { prisma } from '../config/db.config.js';

// 역할 확인 미들웨어
export const checkRole = (allowedRoles) => {
    return async (req, res, next) => {
        try {
            const { ownerId } = req.body;
            
            if (!ownerId) throw new RequiredFieldError('ownerId');
            
            // 사용자 존재 확인
            const user = await prisma.user.findUnique({
                where: { id: BigInt(ownerId) },
                select: { role: true }
            });
            if (!user) {
                throw new ResourceNotFoundError("사용자");
            }
            
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