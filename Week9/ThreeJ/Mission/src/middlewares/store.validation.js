import { 
    RequiredFieldError, 
} from '../res/error/custom-error.js';

// 가게 추가 검증 미들웨어
export const validateStoreAdd = (req, res, next) => {
    try {
        const { name, address, stype } = req.body;

        // 필수 필드 검증
        if (!name) throw new RequiredFieldError('name');
        if (!address) throw new RequiredFieldError('address');
        if (!stype) throw new RequiredFieldError('stype');

        next();
    } catch (error) {
        next(error);
    }
};