import {
  checkUMExists,
  addUserMission,
  getUserMission,
} from "../repositories/mission-challenge.repositories.js";
import { responseFromUserMissionAdd } from "../dtos/mission-challenge.dto.js";

export const userMissionAdd = async (data) => {
  // 중복수락 여부 확인하기
  const alreadyExists = await checkUMExists(data.user_id, data.mission_id);
  if (alreadyExists) {
    throw new Error("이미 도전한 미션입니다.");
  }

  // 도전 등록
  await addUserMission(data);

  // 도전 정보 조회
  const userMission = await getUserMission(data.user_id, data.mission_id);

  // dto 변환
  return responseFromUserMissionAdd(userMission);
};
