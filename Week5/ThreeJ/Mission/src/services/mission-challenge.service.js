import { responseFromUserMissionAdd } from "../dtos/mission-challenge.dto.js";
import { checkUMExists, addUserMission, getUserMissionById, } from "../repositories/mission.repository.js";

export const userMissionAdd = async (data) => {
    const exists = await checkUMExists(data.userId, data.missionId);
    if (exists) {
      throw new Error("이미 도전 중인 미션입니다.");
    }

    await addUserMission(data);
    const userMission = await getUserMissionById(data.userId, data.missionId);

    return responseFromUserMissionAdd(userMission);
};