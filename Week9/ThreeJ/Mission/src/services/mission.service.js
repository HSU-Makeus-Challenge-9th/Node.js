import { responseFromMissionAdd, responseFromUserMissionAdd, responseFromMissionList, responseFromMissionComplete, responseFromStoreMissionList } from "../dtos/mission.dto.js";
import {
    addMission, getMissionById, 
    addUserMission, getUserMissionById,
    getMissionsByUserId, getMissionsCountByUserId,
    updateUserMissionStatus, getMissionsByStoreId
} from  "../repositories/mission.repository.js"

// 미션 추가
export const missionAdd = async (data) => {
    const missionId = await addMission(data);
    const mission = await getMissionById(missionId);

    return responseFromMissionAdd(mission);
};

// 미션 도전(수락)
export const userMissionAdd = async (data) => {
    await addUserMission(data);
    const userMission = await getUserMissionById(data.userId, data.missionId);

    return responseFromUserMissionAdd(userMission);
};

// 내 미션 목록 조회
export const getMyMissions = async (userId, status = 'CHALLENGING', page = 1, limit = 5) => {
    const offset = (page - 1) * limit;
    
    const missions = await getMissionsByUserId(userId, status, offset, limit);
    const totalCount = await getMissionsCountByUserId(userId, status);
    
    return responseFromMissionList(missions, totalCount, page, limit);
};

// 특정 가게의 미션 목록 조회
export const getStoreMissions = async (storeId, cursor, limit = 5) => {
    const missions = await getMissionsByStoreId(storeId, cursor, limit);
    
    return responseFromStoreMissionList(missions, limit);
};

// 미션 완료 처리
export const missionComplete = async (userId, missionId) => {
    const updatedUserMission = await updateUserMissionStatus(userId, missionId, 'COMPLETED');

    return responseFromMissionComplete(updatedUserMission);
};