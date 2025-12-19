import { prisma }  from "../config/db.config.js";
import { CustomError } from '../error/customError.js';

export const getMissionById = async (missionId, client = prisma) => {
    try {
        const mission = await client.mission.findUnique({
            where: { id: missionId }
        });
        return mission;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','미션을 조회하는 중 오류가 발생하였습니다.');
    }
};

export const insertMission = async (data, client = prisma) => {
    try {
        const result = await client.mission.create({
            data: {
                store_id: data.storeId,
                amount: data.amount,
                deadline: data.deadline,
                point: data.point
            }
        });
        return result;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','미션을 생성하는 중 오류가 발생하였습니다.');
    }
};

export const insertUserMission = async (missionId, data, status, verificationCode, client = prisma) => {
    try {
        const result = await client.userMission.create({
            data: {
                mission_id: missionId,
                user_id: data.userId,
                status,
                verification_code: verificationCode
            }
        });
        return result;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 추가 중 오류가 발생하였습니다.');
    }
};

export const getUserMissionById = async (userMissionId, client = prisma) => {
    try {
        const userMission = await client.userMission.findUnique({
            where: { id: userMissionId }
        });
        return userMission;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 조회 중 오류가 발생하였습니다.');
    }
};

export const existUserMission = async (data, client = prisma) => {
    try {
        const userMission = await client.userMission.findFirst({
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

export const getMissionsByStoreId = async (storeId, cursor, client = prisma) => {
    const pageSize = 10;
    try {
        const missions = await client.mission.findMany({
            where: { store_id: storeId },
            orderBy: { created_at: 'desc' },
            take: pageSize + 1,
            ...(cursor && { 
                skip: 1, 
                cursor: { id: cursor } 
            })
        });
        const hasMore = missions.length > pageSize;
        const data = hasMore ? missions.slice(0, pageSize) : missions;

        return {
            missions: data,
            nextCursor: hasMore ? Number(data[data.length - 1].id) : null,
        };
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','가게의 미션 목록 조회 중 오류가 발생하였습니다.');
    }
};

export const getUserMissionsByUserId = async (userId, cursor, client = prisma) => {
    const pageSize = 10;
    try {
        const userMissions = await client.userMission.findMany({
            where: { user_id: userId, status: 'in_progress' },
            include: { mission: true },
            orderBy: { created_at: 'desc' },
            take: pageSize + 1,
            ...(cursor && {
                skip: 1,
                cursor: { id: cursor }
            })
        });

        const hasMore = userMissions.length > pageSize;
        const data = hasMore ? userMissions.slice(0, pageSize) : userMissions;

        return {
            userMissions: data,
            nextCursor: hasMore ? Number(data[data.length - 1].id) : null,
        };
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 목록 조회 중 오류가 발생하였습니다.');
    }
};

export const updateUserMissionStatus = async (userMissionId, status, client = prisma) => {
    try {
        const updatedUserMission = await client.userMission.update({
            where: { id: userMissionId },
            data: { status }
        });
        return updatedUserMission;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','사용자 미션 상태 업데이트 중 오류가 발생하였습니다.');
    }
};

export const insertPointByUserMission = async (userMission, client = prisma) => {
    try {
        const result = await client.point.create({
            data: {
                userId: userMission.userId,
                points: userMission.mission.points,
                userMissionId: userMission.id,
            }
        });
        return result;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','포인트를 추가하는 중 오류가 발생하였습니다.');
    }
};
