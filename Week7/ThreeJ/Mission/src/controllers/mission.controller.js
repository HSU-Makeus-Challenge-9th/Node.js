import { StatusCodes } from "http-status-codes";
import { bodyToMissionAdd } from "../dtos/mission.dto.js";
import { missionAdd, userMissionAdd, getMyMissions, missionComplete, getStoreMissions } from "../services/mission.service.js";

export const handleMissionAdd = async (req, res, next) => {
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
}

export const handleMissionChallenge = async (req, res, next) => {
    console.log("미션 도전을 요청했습니다!");
    console.log("params:", req.params); // 테스트용
    console.log("body:", req.body); // 테스트용

    const data = {
        missionId: parseInt(req.params.missionId),
        userId: parseInt(req.body.userId)
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
};

export const handleGetMyMissions = async (req, res, next) => {
    console.log("미션 목록 조회를 요청했습니다!");
    console.log("params:", req.params);
    console.log("query:", req.query);

    const userId = parseInt(req.params.userId);
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
};

export const handleGetStoreMissions = async (req, res, next) => {
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
};

export const handleUpdateUserMissionStatus = async (req, res, next) => {
    console.log("미션 완료 처리를 요청했습니다!");
    console.log("params:", req.params);
    console.log("body:", req.body);

    const userId = parseInt(req.params.userId);
    const missionId = parseInt(req.params.missionId);

    const result = await missionComplete(userId, missionId);

    res
        .status(StatusCodes.OK)
        .json({
            success: true, 
            code: "SUCCESS_200", 
            message: "미션이 성공적으로 완료되었습니다!", 
            data: result
        });
};
