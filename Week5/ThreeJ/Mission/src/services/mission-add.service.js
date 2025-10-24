import { responseFromMissionAdd } from "../dtos/mission-add.dto.js";
import { checkStoreExists, addMission, getMissionById, } from "../repositories/mission.repository.js";

export const missionAdd = async (data) => {
  const storeExists = await checkStoreExists(data.storeId);
  if (!storeExists) {
    throw new Error("존재하지 않는 가게입니다.");
  }

  const missionId = await addMission(data);
  const mission = await getMissionById(missionId);

  return responseFromMissionAdd(mission);
};
