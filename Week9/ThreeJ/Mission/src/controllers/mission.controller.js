import { StatusCodes } from "http-status-codes";
import { bodyToMissionAdd } from "../dtos/mission.dto.js";
import { missionAdd, userMissionAdd, getMyMissions, missionComplete, getStoreMissions } from "../services/mission.service.js";

export const handleMissionAdd = async (req, res, next) => {
    /* 
        #swagger.summary = '가게에 미션 등록 API'
        #swagger.tags = ['Missions']
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        required: ["endDate", "money", "points", "storeId", "regionId"],
                        properties: {
                            endDate: { type: "string", format: "date", example: "2025-12-31" },
                            money: { type: "number", example: 10000 },
                            points: { type: "number", example: 500 },
                            storeId: { type: "number", example: 1 },
                            regionId: { type: "number", example: 17 }
                        }
                    }
                }
            }
        }
        #swagger.responses[201] = {
            description: "미션 등록 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_201" },
                            message: { type: "string", example: "미션이 성공적으로 추가되었습니다." },
                            data: {
                                type: "object",
                                properties: {
                                    missionId: { type: "number", example: 1 },
                                    endDate: { type: "string", format: "date", example: "2025-12-31" },
                                    money: { type: "number", example: 10000 },
                                    points: { type: "number", example: 500 },
                                    storeId: { type: "number", example: 1 },
                                    regionId: { type: "number", example: 17 }
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
                                example: { target: "money", reason: "금액은 0 초과의 숫자여야 합니다." }
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
    try {
        console.log("미션 추가를 요청했습니다!");
        console.log("body:", req.body); // 테스트용

        const mission = await missionAdd(bodyToMissionAdd(req.body));

        res
            .status(StatusCodes.CREATED)
            .json({
                success: true, 
                code: "SUCCESS_201", 
                message: "미션이 성공적으로 추가되었습니다.", 
                data: mission
            });
    } catch (error) {
        next(error);
    }
}

export const handleMissionChallenge = async (req, res, next) => {
    /* 
        #swagger.summary = '가게 미션 도전 API'
        #swagger.tags = ['Missions']
        #swagger.security = [{ bearerAuth: [] }]
        #swagger.parameters['missionId'] = {
            in: 'path',
            required: true,
            description: '도전할 미션 ID',
            schema: { type: "number" },
            example: 1
        }
        #swagger.responses[201] = {
            description: "미션 도전 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_201" },
                            message: { type: "string", example: "미션을 수락했습니다." },
                            data: {
                                type: "object",
                                properties: {
                                    missionId: { type: "number", example: 1 },
                                    status: { type: "string", example: "CHALLENGING" }
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
                                example: { target: "userId", reason: "userId 필드는 필수입니다." }
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
        #swagger.responses[409] = {
            description: "이미 도전 중인 미션",
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
                                example: { target: "missionId", reason: "이미 도전 중인 미션입니다." }
                            }
                        }
                    }
                }
            }
        }
    */
    try {
        console.log("미션 도전을 요청했습니다!");
        console.log("params:", req.params); // 테스트용

        const userId = typeof req.user.id === 'bigint' ? req.user.id : BigInt(req.user.id);

        const data = {
            missionId: BigInt(req.params.missionId),
            userId: userId
        };

        const userMission = await userMissionAdd(data);

        res
            .status(StatusCodes.CREATED)
            .json({
                success: true, 
                code: "SUCCESS_201", 
                message: "미션을 수락했습니다.", 
                data: userMission
            });
    } catch (error) {
        next(error);
    }
};

export const handleGetMyMissions = async (req, res, next) => {
    /* 
        #swagger.summary = '내 미션 목록 조회 API'
        #swagger.tags = ['Missions']
        #swagger.security = [{ bearerAuth: [] }]
        #swagger.parameters['status'] = {
            in: 'query',
            required: false,
            description: "미션 상태['CHALLENGING', 'COMPLETED', 'CANCELLED'] (기본값 CHALLENGING)",
            schema: { type: "string" },
            example: 'CHALLENGING'
        }
        #swagger.parameters['page'] = {
            in: 'query',
            required: false,
            description: '페이지 번호 (기본값 1)',
            schema: { type: "number" },
            example: 1
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            required: false,
            description: '페이지 크기 (기본값 5)',
            schema: { type: "number" },
            example: 5
        }
        #swagger.responses[200] = {
            description: "내 미션 목록 조회 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_200" },
                            message: { type: "string", example: "내 미션 목록이 성공적으로 조회 성공했습니다." },
                            data: {
                                type: "object",
                                properties: {
                                    missions: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                missionId: { type: "number", example: 1 },
                                                money: { type: "number", example: 10000 },
                                                points: { type: "number", example: 500 },
                                                endDate: { type: "string", format: "date", example: "2025-12-31" },
                                                store: {
                                                    type: "object",
                                                    properties: {
                                                        storeId: { type: "number", example: 2 },
                                                        storeName: { type: "string", example: "반야학생마라탕" }
                                                    }
                                                },
                                                status: { type: "string", example: "CHALLENGING" },
                                                acceptedAt: { type: "string", format: "date-time", example: "2025-02-01T12:34:56.000Z" }
                                            }
                                        }
                                    },
                                    pagination: {
                                        type: "object",
                                        properties: {
                                            currentPage: { type: "number", example: 1 },
                                            pageSize: { type: "number", example: 5 },
                                            totalItems: { type: "number", example: 12 },
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
        console.log("미션 목록 조회를 요청했습니다!");
        console.log("query:", req.query);

        const userId = typeof req.user.id === 'bigint' ? req.user.id : BigInt(req.user.id);
        const status = req.query.status || 'CHALLENGING';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const result = await getMyMissions(userId, status, page, limit);

        res
            .status(StatusCodes.OK)
            .json({
                success: true, 
                code: "SUCCESS_200", 
                message: "내 미션 목록이 성공적으로 조회 성공했습니다.", 
                data: result
            });
    } catch (error) {
        next(error);
    }
};

export const handleGetStoreMissions = async (req, res, next) => {
    /* 
        #swagger.summary = '가게 미션 목록 조회 API'
        #swagger.tags = ['Missions']
        #swagger.parameters['storeId'] = {
            in: 'path',
            required: true,
            description: '미션을 조회할 가게 ID',
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
            description: "가게 미션 목록 조회 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_200" },
                            message: { type: "string", example: "가게 미션 목록이 성공적으로 조회되었습니다." },
                            data: {
                                type: "object",
                                properties: {
                                    missions: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                missionId: { type: "number", example: 3 },
                                                money: { type: "number", example: 10000 },
                                                points: { type: "number", example: 500 },
                                                endDate: { type: "string", format: "date", example: "2025-12-31" },
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
    try {
        console.log("특정 가게의 미션 목록 조회를 요청했습니다!");
        console.log("params:", req.params);
        console.log("query:", req.query);

        const storeId = parseInt(req.params.storeId);
        const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;
        const limit = parseInt(req.query.limit) || 5;

        const result = await getStoreMissions(storeId, cursor, limit);

        res
            .status(StatusCodes.OK)
            .json({
                success: true,
                code: "SUCCESS_200",
                message: "가게 미션 목록이 성공적으로 조회되었습니다.",
                data: result
            });
    } catch (error) {
        next(error);
    }
};

export const handleUpdateUserMissionStatus = async (req, res, next) => {
    /* 
        #swagger.summary = '미션 완료 처리 API'
        #swagger.tags = ['Missions']
        #swagger.security = [{ bearerAuth: [] }]
        #swagger.parameters['missionId'] = {
            in: 'path',
            required: true,
            description: '완료 처리할 미션 ID',
            schema: { type: "number" },
            example: 1
        }
        #swagger.responses[200] = {
            description: "미션 완료 성공",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: true },
                            code: { type: "string", example: "SUCCESS_200" },
                            message: { type: "string", example: "미션이 성공적으로 완료되었습니다!" },
                            data: {
                                type: "object",
                                properties: {
                                    userId: { type: "number", example: 1 },
                                    missionId: { type: "number", example: 1 },
                                    status: { type: "string", example: "COMPLETED" },
                                    acceptedAt: { type: "string", format: "date-time", example: "2025-02-01T12:34:56.000Z" },
                                    completedAt: { type: "string", format: "date-time", example: "2025-02-03T09:10:00.000Z" }
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
                                example: { target: "status", reason: "취소된 미션입니다." }
                            }
                        }
                    }
                }
            }
        }
        #swagger.responses[404] = {
            description: "존재하지 않는 사용자 또는 미션 또는 도전 내역",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            success: { type: "boolean", example: false },
                            code: { type: "string", example: "NOT_FOUND_404" },
                            message: { type: "string", example: "존재하지 않는 도전 중인 미션입니다." },
                            detail: { type: "object", nullable: true, example: null }
                        }
                    }
                }
            }
        }
        #swagger.responses[409] = {
            description: "이미 완료된 미션",
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
                                example: { target: "status", reason: "이미 완료된 미션입니다." }
                            }
                        }
                    }
                }
            }
        }
    */
    try {
        console.log("미션 완료 처리를 요청했습니다!");
        console.log("params:", req.params);

        const userId = typeof req.user.id === 'bigint' ? req.user.id : BigInt(req.user.id);
        const missionId = BigInt(req.params.missionId);

        const result = await missionComplete(userId, missionId);

        res
            .status(StatusCodes.OK)
            .json({
                success: true, 
                code: "SUCCESS_200", 
                message: "미션이 성공적으로 완료되었습니다!", 
                data: result
            });
    } catch (error) {
        next(error);
    }
};
