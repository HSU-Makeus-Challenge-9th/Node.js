import { ErrorCodes } from './errorCodes.js';

class CustomError extends Error {
    constructor(httpStatus = 500, message = '알 수 없는 오류가 발생했습니다.') {
        super(message);

        this.httpStatus = httpStatus;

    }
}

export { CustomError, ErrorCodes };