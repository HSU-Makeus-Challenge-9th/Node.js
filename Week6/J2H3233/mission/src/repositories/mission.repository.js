import { prisma } from "../config/db.config.js";
import { CustomError } from '../error/customError.js';

export const getMissionById = async (missionId) => {
    try {
        const mission = await prisma.mission.findUnique({
            where: { id: missionId }
        });
        return mission;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','미션을 조회하는 중 오류가 발생하였습니다.');
    }
};

export const insertMission = async (data) => {
    try {
        const result = await prisma.mission.create({
            data: {
                store_id: data.storeId,
                amount: data.amount,
                deadline: data.deadline,
                point: data.point
            }
        });
        return result.id;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','미션을 생성하는 중 오류가 발생하였습니다.');
    }
};

export const insertUserMission = async (missionId, data, status, verificationCode) => {
    try {
        const result = await prisma.userMission.create({
            data: {
                mission_id: missionId,
                user_id: data.userId,
                status,
                verification_code: verificationCode
            }
        });
        return result.id;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 추가 중 오류가 발생하였습니다.');
    }
};

export const getUserMissionById = async (userMissionId) => {
    try {
        const userMission = await prisma.userMission.findUnique({
            where: { id: userMissionId }
        });
        return userMission;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 조회 중 오류가 발생하였습니다.');
    }
};

export const existUserMission = async (data) => {
    try {
        const userMission = await prisma.userMission.findFirst({
            where: {
                mission_id: data.missionId,
                user_id: data.userId
            }
        });
        return userMission !== null;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 존재 여부 확인 중 오류가 발생하였습니다.');
    }
};

export const getMissionsByStoreId = async (storeId) => {
    try {
        const missions = await prisma.mission.findMany({ 
            where: { store_id: storeId }
        });
        return missions;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','가게의 미션 목록 조회 중 오류가 발생하였습니다.');
    }
};

export const getUserMissionsByUserId = async (userId) => {
    try {
        const userMissions = await prisma.userMission.findMany({
            where: { user_id: userId, status: 'in_progress' },
            include: { mission: true }
        });
        return userMissions;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 목록 조회 중 오류가 발생하였습니다.');
    }
};

export const updateUserMissionStatus = async (userMissionId, status) => {
    try {
        const updatedUserMission = await prisma.userMission.update({
            where: { id: userMissionId },
            data: { status }
        });
        return updatedUserMission;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 상태 업데이트 중 오류가 발생하였습니다.');
    }
};
