import { ErrorCodes } from './responseCodes.js';

class CustomError extends Error {
    constructor(httpStatus = 500, code,  message = '알 수 없는 오류가 발생했습니다.') {
        super(message);

        this.code = code || ErrorCodes.UNKNOWN_ERROR;
        this.httpStatus = httpStatus;

    }
}

export { CustomError, ErrorCodes };