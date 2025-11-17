import { prisma } from "../config/db.config.js";
import { InternalServerError } from "../res/error/custom-error.js";

// ----------------------------------------------------------------------
// 가게 존재 여부 검사
export const checkStoreExists = async (storeId) => {
  try {
    const existingStore = await prisma.store.findUnique({
      where: { id: storeId },
      select: { id: true },
    });

    return existingStore !== null;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("가게 존재 여부 확인 중 오류가 발생했습니다.", {
      target: "STORE",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 미션 추가
export const addMission = async (data) => {
  try {
    const mission = await prisma.mission.create({
      data: {
        endDate: data.endDate,
        money: data.money,
        points: data.points,
        storeId: data.storeId,
        regionId: data.regionId,
        
        // 생략 가능(prisma에서 기본값 정의되어 있지만 명시적으로 작성)
        startDate: new Date(),  // NOW()
      },
    });

    return mission.id;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("미션 추가 중 오류가 발생했습니다.", {
      target: "MISSION",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 미션 조회
export const getMissionById = async (missionId) => {
  try {
    const mission = await prisma.mission.findUnique({
      where: { id: missionId },
    });

    return mission;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("미션 조회 중 오류가 발생했습니다.", {
      target: "MISSION",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 사용자 미션 도전 여부 확인 (이미 진행중인지 확인)
export const checkUMExists = async (userId, missionId) => {
  const existingUserMission = await prisma.userMission.findUnique({
    where: {
      userId_missionId: {
        userId: userId,
        missionId: missionId
      }
    },
    select: { status: true },
  });
  
  // 존재하고 CHALLENGING 상태인 경우만 true
  return existingUserMission !== null && existingUserMission.status === 'CHALLENGING';
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 사용자 미션 도전 추가
export const addUserMission = async (data) => {
  try {
    await prisma.userMission.create({
      data: {
        userId: data.userId,
        missionId: data.missionId,

        // 생략 가능(prisma에서 기본값 정의되어 있지만 명시적으로 작성)
        acceptedAt: new Date(),
        status: 'CHALLENGING',
        // nullable
        completedAt: null,
      },
    });
  } catch (err) {
    console.error(err);
    throw new InternalServerError("미션 도전 추가 중 오류가 발생했습니다.", {
      target: "USER_MISSION",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 사용자 미션 조회
export const getUserMissionById = async (userId, missionId) => {
  try {
    const userMission = await prisma.userMission.findUnique({
      where: {
        userId_missionId: {
          userId: userId,
          missionId: missionId
        }
      }
    });

    return userMission;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("사용자 미션 조회 중 오류가 발생했습니다.", {
      target: "USER_MISSION",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 내 미션 목록 조회 (옵셋 페이지네이션)
export const getMissionsByUserId = async (userId, status, offset, limit) => {
  try {
    const userMissions = await prisma.userMission.findMany({
      where: {
        userId: userId,
        status: status,
      },
      skip: offset,
      take: limit,
      orderBy: { acceptedAt: 'desc' },
      include: {
        mission: {
          include: {
            store: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        }
      }
    });

    return userMissions;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("내 미션 목록 조회 중 오류가 발생했습니다.", {
      target: "USER_MISSION",
      reason: err?.message || "Unknown error"
    });
  }
};

// 내 미션 총 개수
export const getMissionsCountByUserId = async (userId, status) => {
  try {
    const count = await prisma.userMission.count({
      where: {
        userId: userId,
        status: status,
      }
    });

    return count;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("내 미션 개수 조회 중 오류가 발생했습니다.", {
      target: "USER_MISSION",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 특정 가게의 미션 조회 (커서 페이지네이션)
export const getMissionsByStoreId = async (storeId, cursor, limit) => {
  try {
    const missions = await prisma.mission.findMany({
      where: {
        storeId: storeId,
        ...(cursor && { id: { lt: BigInt(cursor) } })
      },
      orderBy: { id: 'desc' },
      take: limit + 1,
    });

    return missions;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("가게 미션 목록 조회 중 오류가 발생했습니다.", {
      target: "MISSION",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 미션 상태 업데이트 (CHALLENGING → COMPLETED)
export const updateUserMissionStatus = async (userId, missionId, newStatus) => {
  try {
    const updatedUserMission = await prisma.userMission.update({
      where: {
        userId_missionId: {
          userId: userId,
          missionId: missionId
        }
      },
      data: {
        status: newStatus,
        completedAt: newStatus === 'COMPLETED' ? new Date() : null  // COMPLETED 상태일 때만 완료 시간 기록
      }
    });

    return updatedUserMission;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("미션 상태 업데이트 중 오류가 발생했습니다.", {
      target: "USER_MISSION",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------
