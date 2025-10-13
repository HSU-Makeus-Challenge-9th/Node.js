import { addMission, getMission, checkStoreExists } from "../repositories/mission-add.repository.js";
import { responseFromMissionAdd } from "../dtos/mission-add.dto.js";

export const missionAdd = async (data) => {
  // 가게가 존재하는지 확인
  const storeExists = await checkStoreExists(data.store_id);
  if (!storeExists) {
    throw new Error("존재하지 않는 가게입니다.");
  }

  // 미션 등록
  const missionId = await addMission(data);

  // 미션 조회
  const mission = await getMission(missionId);

  // 응답 dto 변환
  return responseFromMissionAdd(mission);
};
