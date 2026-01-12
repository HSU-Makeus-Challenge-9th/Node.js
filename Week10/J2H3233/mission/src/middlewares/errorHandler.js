import { SuccessCodes } from "../error/responseCodes.js";

export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const httpStatus = err.httpStatus || 500;

    res.status(httpStatus).json({
        code: err.code || SuccessCodes.INTERNAL_SERVER_ERROR ,
        message: err.message || '서버 오류',
    });
};
