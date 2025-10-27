import { prisma } from "../db.config.js";

// 사용자가 진행 중인 미션 목록 조회 (페이지네이션 포함)
export const getUserInProgressMissions = async (userId, cursor) => {
  try {
    const pageSize = 5; // 한 페이지당 5개씩
    
    const userMissions = await prisma.userMission.findMany({
      where: {
        userId: userId,
        status: '진행중',
      },
      include: {
        mission: {
          include: {
            store: {
              select: {
                id: true,
                name: true,
                address: true,
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc',
      },
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      take: pageSize,
    });

    return userMissions;
  } catch (err) {
    throw new Error(`DB 오류(getUserInProgressMissions): ${err}`);
  }
};

// 사용자 미션 상태 업데이트 (진행중 -> 완료)
export const updateUserMissionStatus = async (userId, missionId, status) => {
  try {
    const userMission = await prisma.userMission.updateMany({
      where: {
        userId: userId,
        missionId: missionId,
      },
      data: {
        status: status,
      }
    });

    if (userMission.count === 0) {
      throw new Error("해당 미션을 찾을 수 없습니다.");
    }

    return userMission;
  } catch (err) {
    throw new Error(`DB 오류(updateUserMissionStatus): ${err}`);
  }
};

// 사용자 미션 단일 조회
export const getUserMissionById = async (userId, missionId) => {
  try {
    const userMission = await prisma.userMission.findFirst({
      where: {
        userId: userId,
        missionId: missionId,
      },
      include: {
        mission: {
          include: {
            store: true,
          }
        }
      }
    });

    return userMission;
  } catch (err) {
    throw new Error(`DB 오류(getUserMissionById): ${err}`);
  }
};

