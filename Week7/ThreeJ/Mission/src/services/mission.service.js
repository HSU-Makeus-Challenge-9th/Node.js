import { responseFromMissionAdd, responseFromUserMissionAdd, responseFromMissionList, responseFromMissionComplete, responseFromStoreMissionList } from "../dtos/mission.dto.js";
import {
    checkStoreExists, addMission, getMissionById, 
    checkUMExists, addUserMission, getUserMissionById,
    getMissionsByUserId, getMissionsCountByUserId,
    updateUserMissionStatus, getMissionsByStoreId
} from  "../repositories/mission.repository.js"

// 미션 추가
export const missionAdd = async (data) => {
    const storeExists = await checkStoreExists(data.storeId);
    if (!storeExists) {
        throw new Error("존재하지 않는 가게입니다.");
    }

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
    const userMission = await getUserMissionById(userId, missionId);
    if (!userMission) {
        throw new Error("존재하지 않는 미션입니다.");
    }

    if (userMission.status !== 'CHALLENGING') {
        throw new Error("진행 중인 미션만 완료 처리할 수 있습니다.");
    }

    const mission = await getMissionById(missionId);
    if (!mission) {
        throw new Error("미션 정보를 찾을 수 없습니다.");
    }

    const now = new Date();
    const endDate = new Date(mission.endDate);
    if (now > endDate) {
        throw new Error("미션 기한이 만료되었습니다.");
    }

    const updatedUserMission = await updateUserMissionStatus(userId, missionId, 'COMPLETED');

    return responseFromMissionComplete(updatedUserMission);
};