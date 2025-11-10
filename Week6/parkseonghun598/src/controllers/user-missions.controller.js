import { StatusCodes } from "http-status-codes";
import { listUserInProgressMissions, completeMission } from "../services/user-missions.service.js";

// 진행 중인 미션 목록 조회
export const handleGetUserInProgressMissions = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;

    console.log(`사용자 ${userId}의 진행 중인 미션 목록 조회 요청`);

    const result = await listUserInProgressMissions(userId, cursor);

    res.status(StatusCodes.OK).json({
      isSuccess: true,
      result: result,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: `진행 중인 미션 목록 조회 실패: ${err.message}`,
    });
  }
};

// 미션 완료 처리
export const handleCompleteMission = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const missionId = parseInt(req.params.missionId);

    console.log(`사용자 ${userId}의 미션 ${missionId} 완료 처리 요청`);

    const result = await completeMission(userId, missionId);

    res.status(StatusCodes.OK).json({
      isSuccess: true,
      message: "미션이 완료되었습니다.",
      result: result,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: `미션 완료 처리 실패: ${err.message}`,
    });
  }
};

