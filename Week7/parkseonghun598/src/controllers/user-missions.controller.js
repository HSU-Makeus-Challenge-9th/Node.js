import { listUserInProgressMissions, completeMission } from "../services/user-missions.service.js";

// 진행 중인 미션 목록 조회
export const handleGetUserInProgressMissions = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;

    console.log(`사용자 ${userId}의 진행 중인 미션 목록 조회 요청`);

    const result = await listUserInProgressMissions(userId, cursor);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};

// 미션 완료 처리
export const handleCompleteMission = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const missionId = parseInt(req.params.missionId);

    console.log(`사용자 ${userId}의 미션 ${missionId} 완료 처리 요청`);

    const result = await completeMission(userId, missionId);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};

