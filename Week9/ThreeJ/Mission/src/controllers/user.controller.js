import { StatusCodes } from "http-status-codes";
import { bodyToUserSignup, } from "../dtos/user.dto.js";
import { userSignUp, } from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
    /* 
    #swagger.summary = '회원가입 API'
    #swagger.tags = ['Users']
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    required: ["name", "gender", "birth", "address", "email", "phone", "role"],
                    properties: {
                        name: { type: "string", example: "홍길동" },
                        gender: { type: "string", enum: ["MALE", "FEMALE", "NONE"], example: "MALE" },
                        birth: { type: "string", format: "date", example: "1990-01-01" },
                        address: { type: "string", example: "서울시 강남구" },
                        detailAddress: { type: "string", nullable: true, example: "101동 1001호" },
                        email: { type: "string", format: "email", example: "test@example.com" },
                        phone: { type: "string", example: "010-1234-5678" },
                        role: { type: "string", enum: ["USER", "OWNER"], example: "USER" },
                        provider: { type: "string", enum: ["EMAIL", "KAKAO", "NAVER"], example: "EMAIL" },
                        providerId: { type: "string", example: "provider-user-id" },
                        preferences: { 
                            type: "array", 
                            items: { type: "number" }, 
                            example: [1, 3, 6] 
                        }
                    }
                }
            }
        }
    }
    #swagger.responses[201] = {
        description: "회원가입 성공",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        success: { type: "boolean", example: true },
                        code: { type: "string", example: "SUCCESS_201" },
                        message: { type: "string", example: "회원가입이 완료되었습니다." },
                        data: {
                            type: "object",
                            properties: {
                                userId: { type: "number", example: 1 },
                                name: { type: "string", example: "홍길동" },
                                email: { type: "string", example: "test@example.com" },
                                role: { type: "string", example: "GENERAL" }
                            }
                        }
                    }
                }
            }
        }
    }
    #swagger.responses[400] = {
        description: "잘못된 요청 (필수값 누락, 형식 오류 등)",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        success: { type: "boolean", example: false },
                        code: { type: "string", example: "BAD_REQUEST_400" },
                        message: { type: "string", example: "잘못된 요청입니다." },
                        detail: { 
                            type: "object", 
                            example: { target: "email", reason: "email의 형식이 올바르지 않습니다. (ex: example@domain.com)" }
                        }
                    }
                }
            }
        }
    }
    #swagger.responses[409] = {
        description: "이메일 중복",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        success: { type: "boolean", example: false },
                        code: { type: "string", example: "CONFLICT_409" },
                        message: { type: "string", example: "이미 존재하는 데이터입니다." },
                        detail: { 
                            type: "object", 
                            example: { target: "email", reason: "이미 사용 중인 이메일입니다." }
                        }
                    }
                }
            }
        }
    }
*/
    try {
        console.log("회원가입을 요청했습니다!");
        console.log("body:", req.body); // 테스트용

        const user = await userSignUp(bodyToUserSignup(req.body));
        
        res
            .status(StatusCodes.CREATED)
            .json({
                success: true, 
                code: "SUCCESS_201", 
                message: "회원가입이 완료되었습니다.", 
                data: user
            });
    } catch (error) {
        next(error);  // 에러 미들웨어로 전달
    }
};
