import { 
  getUserInProgressMissions, 
  updateUserMissionStatus,
  getUserMissionById 
} from "../repositories/user-missions.repository.js";
import { 
  responseFromUserMissions,
  responseFromCompleteMission 
} from "../dtos/user-missions.dto.js";

// 진행 중인 미션 목록 조회
export const listUserInProgressMissions = async (userId, cursor) => {
  // 미션 목록 조회
  const userMissions = await getUserInProgressMissions(userId, cursor);

  // DTO 변환
  return responseFromUserMissions(userMissions);
};

// 미션 완료 처리
export const completeMission = async (userId, missionId) => {
  // 미션 상태 업데이트
  await updateUserMissionStatus(userId, missionId, '완료');

  // 업데이트된 미션 조회
  const userMission = await getUserMissionById(userId, missionId);

  if (!userMission) {
    throw new Error("미션을 찾을 수 없습니다.");
  }

  // DTO 변환
  return responseFromCompleteMission(userMission);
};

