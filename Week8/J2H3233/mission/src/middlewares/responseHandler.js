import { SuccessCodes } from "../error/responseCodes.js";

export const responseHandler = (req, res, next) => {
    res.jsonSuccess = ( httpStatus = 200, code, message = "요청에 성공했습니다.", data) => {

        return res.status(httpStatus).json({
            code: code || SuccessCodes.OK,
            message: message,
            result: data,
        });
    };
    next();
};
