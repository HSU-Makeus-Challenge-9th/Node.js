import { StatusCodes } from "http-status-codes";
import { bodyToReviewAdd, } from "../dtos/review.dto.js";
import { reviewAdd, getMyReviews, getStoreReviews } from "../services/review.service.js";

export const handleReviewAdd = async (req, res, next) => {
    /* 
        #swagger.summary = '가게 리뷰 등록 API'
        #swagger.tags = ['Reviews']
        #swagger.security = [{ bearerAuth: [] }]
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        required: ["missionId", "content", "score"],
                        properties: {
                            missionId: { type: "number", example: 1 },
                            content: { type: "string", example: "매장이 깨끗하고 친절했어요!" },
                            score: { type: "number", minimum: 0, maximum: 5, example: 4.5 }
                        }
                    }
                }
            }
        }
        #swagger.responses[201] = {
            description: "리뷰 등록 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_201" },
                            message: { type: "string", example: "리뷰가 성공적으로 추가되었습니다." },
                            data: {
                                type: "object",
                                properties: {
                                    reviewId: { type: "number", example: 1 },
                                    content: { type: "string", example: "매장이 깨끗하고 친절했어요!" },
                                    score: { type: "number", example: 4.5 },
                                    writerId: { type: "number", example: 1 },
                                    storeId: { type: "number", example: 1 },
                                    missionId: { type: "number", example: 1 }
                                }
                            }
                        }
                    }
                }
            }
        }
        #swagger.responses[400] = {
            description: "잘못된 요청 (필수값 누락, 형식 오류)",
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
                                example: { target: "score", reason: "평점은 0~5 사이의 숫자여야 합니다." }
                            }
                        }
                    }
                }
            }
        }
        #swagger.responses[404] = {
            description: "존재하지 않는 사용자 또는 미션",
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
        console.log("리뷰 생성을 요청했습니다!");
        console.log("body:", req.body); // 테스트용

        const userId = typeof req.user.id === 'bigint' ? req.user.id : BigInt(req.user.id);
        const review = await reviewAdd({ ...bodyToReviewAdd(req.body), userId: userId });

        res
            .status(StatusCodes.CREATED)
            .json({
                success: true, 
                code: "SUCCESS_201", 
                message: "리뷰가 성공적으로 추가되었습니다.", 
                data: review
            });
    } catch (error) {
        next(error);
    }
};

// 내가 작성한 리뷰 목록 조회
export const handleGetMyReviews = async (req, res, next) => {
    /* 
        #swagger.summary = '내 리뷰 목록 조회 API'
        #swagger.tags = ['Reviews']
        #swagger.security = [{ bearerAuth: [] }]
        #swagger.parameters['page'] = {
            in: 'query',
            required: false,
            description: '페이지 번호 (기본값 1)',
            schema: { type: 'number' },
            example: 1
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            required: false,
            description: '페이지 크기 (기본값 5)',
            schema: { type: 'number' },
            example: 5
        }
        #swagger.responses[200] = {
            description: "내 리뷰 목록 조회 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_200" },
                            message: { type: "string", example: "내가 작성한 리뷰 목록이 성공적으로 조회 성공했습니다." },
                            data: {
                                type: "object",
                                properties: {
                                    reviews: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                reviewId: { type: "number", example: 1 },
                                                store: {
                                                    type: "object",
                                                    properties: {
                                                        storeId: { type: "number", example: 2 },
                                                        storeName: { type: "string", example: "반야학생마라탕" }
                                                    }
                                                },
                                                content: { type: "string", example: "매장이 깔끔하고 음식이 맛있어요." },
                                                score: { type: "number", example: 4.5 },
                                                createdAt: { type: "string", format: "date-time", example: "2025-02-01T12:34:56.000Z" }
                                            }
                                        }
                                    },
                                    pageInfo: {
                                        type: "object",
                                        properties: {
                                            currentPage: { type: "number", example: 1 },
                                            pageSize: { type: "number", example: 5 },
                                            totalElements: { type: "number", example: 12 },
                                            totalPages: { type: "number", example: 3 }
                                        }
                                    }
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
                                example: { target: "page", reason: "page는 1 이상의 숫자여야 합니다." } 
                            }
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
        console.log("내가 작성한 리뷰 목록 조회를 요청했습니다!");

        const userId = typeof req.user.id === 'bigint' ? req.user.id : BigInt(req.user.id);
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const result = await getMyReviews(userId, page, limit);

        res
            .status(StatusCodes.OK)
            .json({
                success: true,
                code: "SUCCESS_200",
                message: "내가 작성한 리뷰 목록이 성공적으로 조회 성공했습니다.",
                data: result
            });
    } catch (error) {
        next(error);
    }
};

// 특정 가게의 리뷰 목록 조회 (커서 페이지네이션)
export const handleGetStoreReviews = async (req, res, next) => {
    /* 
        #swagger.summary = '가게 리뷰 목록 조회 API'
        #swagger.tags = ['Reviews']
        #swagger.parameters['storeId'] = {
            in: 'path',
            required: true,
            description: '리뷰를 조회할 가게 ID',
            schema: { type: 'number' },
            example: 1
        }
        #swagger.parameters['cursor'] = {
            in: 'query',
            required: false,
            description: '다음 페이지 커서 값 (null이면 첫 페이지)',
            schema: { type: 'number' },
            example: 1
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            required: false,
            description: '페이지 크기 (기본값 5)',
            schema: { type: 'number' },
            example: 5
        }
        #swagger.responses[200] = {
            description: "가게 리뷰 목록 조회 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_200" },
                            message: { type: "string", example: "가게 리뷰 목록이 성공적으로 조회되었습니다." },
                            data: {
                                type: "object",
                                properties: {
                                    reviews: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                reviewId: { type: "number", example: 3 },
                                                writerId: { type: "number", example: 2 },
                                                writerName: { type: "string", example: "홍길동" },
                                                content: { type: "string", example: "맛 없어요ㅠㅠ" },
                                                score: { type: "number", example: 1.5 },
                                                createdAt: { type: "string", format: "date-time", example: "2025-01-01T12:00:00.000Z" }
                                            }
                                        }
                                    },
                                    cursor: {
                                        type: "object",
                                        properties: {
                                            nextCursor: { type: "string", nullable: true, example: "8" },
                                            hasNext: { type: "boolean", example: true }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        #swagger.responses[400] = {
            description: "잘못된 요청 (필수값 누락, 형식 오류)",
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
                                example: { target: "cursor", reason: "cursor는 1 이상의 숫자여야 합니다." } 
                            }
                        }
                    }
                }
            }
        }
        #swagger.responses[404] = {
            description: "존재하지 않는 가게",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: false },
                            code: { type: "string", example: "NOT_FOUND_404" },
                            message: { type: "string", example: "존재하지 않는 가게입니다." },
                            detail: { type: "object", nullable: true, example: null }
                        }
                    }
                }
            }
        }
    */
    console.log("특정 가게의 리뷰 목록 조회를 요청했습니다!");
    console.log("params:", req.params);
    console.log("query:", req.query);

    const storeId = parseInt(req.params.storeId);
    const cursor = parseInt(req.query.cursor) || null;
    const limit = parseInt(req.query.limit) || 5;

    const result = await getStoreReviews(storeId, cursor, limit);

    res
        .status(StatusCodes.OK)
        .json({
            success: true,
            code: "SUCCESS_200",
            message: "가게 리뷰 목록이 성공적으로 조회되었습니다.",
            data: result
        });
};
