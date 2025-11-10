import { prisma } from "../db.config.js";

// 특정 가게의 미션 목록 조회 (페이지네이션 포함)
export const getStoreMissions = async (storeId, cursor) => {
  try {
    const pageSize = 5; // 한 페이지당 5개씩
    
    const missions = await prisma.mission.findMany({
      where: { storeId: storeId },
      include: {
        store: {
          select: {
            id: true,
            name: true,
            address: true,
          }
        }
      },
      orderBy: {
        id: 'desc',
      },
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      take: pageSize,
    });

    return missions;
  } catch (err) {
    throw new Error(`DB 오류(getStoreMissions): ${err}`);
  }
};

