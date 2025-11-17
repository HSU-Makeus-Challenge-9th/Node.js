import { existStoreById } from "../repositories/store.repository.js";
import { updateUserMissionStatus, getUserMissionsByUserId, getMissionsByStoreId, existUserMission, insertMission, getMissionById, insertUserMission, getUserMissionById, insertPointByUserMission } from "../repositories/mission.repository.js";
import { responseGetMissionListDto, responseCompleteUserMissionDto, responseCreateMissionDto, responseAddMissionToUserDto, responseGetUserMissionListDto } from "../dtos/mission.dto.js";
import { CustomError, ErrorCodes } from '../error/customError.js';
import { prisma }  from "../config/db.config.js";

export const createMission = async (data) => {
    
    const store = await existStoreById(data.storeId);
    if(!store) {
        throw new CustomError(404, ErrorCodes.STORE_NOT_FOUND, '존재하지 않는 가게입니다.');
    }
    const mission = await insertMission(data);
    if(!mission) {
        throw new CustomError(400, ErrorCodes.MISSION_CREATE_FAILED, '미션 생성에 실패했습니다.');
    }

    return responseCreateMissionDto(mission);
};

export const addMissionToUser = async (data) => {
    const mission = await getMissionById(data.missionId);
    if (!mission) {
        throw new CustomError(404, ErrorCodes.MISSION_NOT_FOUND, '존재하지 않는 미션입니다.');
    }

    if(await existUserMission(data)) {
        throw new CustomError(409, ErrorCodes.MISSION_ALREADY_EXISTS, '이미 추가된 미션입니다.');
    }

    const generateVerificationCode = () => {
        const min = 10000000;
        const max = 99999999; 

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        return randomNumber.toString();
    }

    const newUserMission = await insertUserMission(data.missionId, data, "in_progress", generateVerificationCode());
    if (!newUserMission) {
        throw new CustomError(500, ErrorCodes.USER_MISSION_CREATE_FAILED, '미션을 사용자에게 추가하는 데 실패했습니다.');
    }


    return responseAddMissionToUserDto(newUserMission);
};


export const getMissionList = async (storeId) => {
    const { missions, nextCursor } = await getMissionsByStoreId(storeId);
    return responseGetMissionListDto(missions, nextCursor);
};

export const getUserMissionList = async (userId) => {
    const { userMissions, nextCursor } = await getUserMissionsByUserId(userId);
    return responseGetUserMissionListDto(userMissions, nextCursor);
}

export const completeUserMission = async (userMissionId) => {

    const userMission = await getUserMissionById(userMissionId);
    if (!userMission) {
        throw new CustomError(404, ErrorCodes.USER_MISSION_NOT_FOUND, '존재하지 않는 사용자 미션입니다.');
    }

    if (userMission.status === 'success') {
        throw new CustomError(400, ErrorCodes.USER_MISSION_ALREADY_COMPLETED, '이미 완료된 미션입니다.');
    }

    const updatedUserMission = await prisma.$transaction(async (tx) => {
        const newUpdatedUserMission = await updateUserMissionStatus(userMissionId, 'success', tx);
        await insertPointByUserMission(userMission, tx);

        return newUpdatedUserMission;
    });

    return responseCompleteUserMissionDto(updatedUserMission);
};
