import { StatusCodes } from "http-status-codes";
import { bodyToStoreAdd, } from "../dtos/store.dto.js";
import { storeAdd, } from "../services/store.service.js";

export const handleStoreAdd = async (req, res, next) => {
    /* 
        #swagger.summary = '가게 등록 API'
        #swagger.tags = ['Stores']
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        required: ["name", "address", "stype", "ownerId"],
                        properties: {
                            name: { type: "string", example: "반야학생마라탕" },
                            address: { type: "string", example: "가게주소1" },
                            stype: { type: "string", example: "중식당" },
                            ownerId: { type: "number", example: 2 }
                        }
                    }
                }
            }
        }
        #swagger.responses[201] = {
            description: "가게 등록 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_201" },
                            message: { type: "string", example: "가게가 성공적으로 추가되었습니다." },
                            data: {
                                type: "object",
                                properties: {
                                    storeId: { type: "number", example: 1 },
                                    name: { type: "string", example: "반야학생마라탕" },
                                    address: { type: "string", example: "가게주소1" },
                                    stype: { type: "string", example: "중식당" }
                                }
                            }
                        }
                    }
                }
            }
        }
        #swagger.responses[400] = {
            description: "잘못된 요청 (필수값 누락)",
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
                                example: { target: "name", reason: "name 필드는 필수입니다." }
                            }
                        }
                    }
                }
            }
        }
        #swagger.responses[403] = {
            description: "OWNER 권한 필요",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: false },
                            code: { type: "string", example: "FORBIDDEN_403" },
                            message: { type: "string", example: "OWNER 권한이 필요합니다." },
                            detail: { type: "object", nullable: true, example: null }
                        }
                    }
                }
            }
        }
        #swagger.responses[404] = {
            description: "존재하지 않는 사용자",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: false },
                            code: { type: "string", example: "NOT_FOUND_404" },
                            message: { type: "string", example: "존재하지 않는 사용자입니다." },
                            detail: { type: "object", nullable: true, example: null }
                        }
                    }
                }
            }
        }
    */
    try {
        console.log("가게 추가를 요청했습니다!");
        console.log("body:", req.body); // 테스트용

        const store = await storeAdd(bodyToStoreAdd(req.body));

        res
            .status(StatusCodes.CREATED)
            .json({
                success: true, 
                code: "SUCCESS_201", 
                message: "가게가 성공적으로 추가되었습니다.", 
                data: store
            });
    } catch (error) {
        next(error);
    }
}