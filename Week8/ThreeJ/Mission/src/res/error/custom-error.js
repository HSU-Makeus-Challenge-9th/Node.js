import { StatusCodes } from "http-status-codes";

export class CustomError extends Error {
    constructor(code, httpStatus, message, detail = null) {
        super(message);
        this.code = code;
        this.httpStatus = httpStatus;
        this.detail = detail;
    }
}

// ----------------------------------------------------------------------------------------------------

export class BadRequestError extends CustomError {
    constructor(message = "잘못된 요청입니다.", detail = null) {
        super("BAD_REQUEST_400", StatusCodes.BAD_REQUEST, message, detail);
    }
}

export class ForbiddenError extends CustomError {
    constructor(message = "권한이 없습니다.", detail = null) {
        super("FORBIDDEN_403", StatusCodes.FORBIDDEN, message, detail);
    }
}

export class NotFoundError extends CustomError {
    constructor(message = "요청한 데이터를 찾을 수 없습니다.", detail = null) {
        super("NOT_FOUND_404", StatusCodes.NOT_FOUND, message, detail);
    }
}

export class ConflictError extends CustomError {
    constructor(message = "이미 존재하는 데이터입니다.", detail = null) {
        super("CONFLICT_409", StatusCodes.CONFLICT, message, detail);
    }
}

export class InternalServerError extends CustomError {
    constructor(message = "서버 내부 오류가 발생했습니다.", detail = null) {
      super("INTERNAL_SERVER_ERROR_500", StatusCodes.INTERNAL_SERVER_ERROR, message, detail);
    }
}

// ----------------------------------------------------------------------------------------------------

// 유효성 검사 에러 - 400
export class ValidationError extends BadRequestError {
    constructor(target, reason) {
        super("잘못된 요청입니다.", {
            target: target || "null",
            reason: reason || "null"
        });
    }
}

// 필수 필드 누락 에러 - 400
export class RequiredFieldError extends BadRequestError {
    constructor(field) {
        super("잘못된 요청입니다.", {
            target: field,
            reason: `${field} 필드는 필수입니다.`
        });
    }
}

// 잘못된 형식 에러 - 400
export class InvalidFormatError extends BadRequestError {
    constructor(field, format) {
        super("잘못된 요청입니다.", {
            target: field,
            reason: `${field}의 형식이 올바르지 않습니다. (ex: ${format})`
        });
    }
}

// ----------------------------------------------------------------------------------------------------

// 역할 권한 에러 - 403
export class RoleRequiredError extends ForbiddenError {
    constructor(role) {
        super(`${role} 권한이 필요합니다.`);
    }
}

// ----------------------------------------------------------------------------------------------------

// 리소스 없음 에러 - 404
export class ResourceNotFoundError extends NotFoundError {
    constructor(resource) {
        super(`존재하지 않는 ${resource}입니다.`);
    }
}

// ----------------------------------------------------------------------------------------------------

// 중복 에러 - 409
export class DuplicateError extends ConflictError {
    constructor(field, reason) {
        super("이미 존재하는 데이터입니다.", {
            target: field,
            reason: reason
        });
    }
}
