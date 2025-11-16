import { prisma } from "../config/db.config.js";

// ----------------------------------------------------------------------
// Store 추가
export const addStore = async (data) => {
  try {
    const store = await prisma.store.create({
      data: {
        name: data.name,
        address: data.address,
        stype: data.sType,
        ownerId: data.ownerId,

        // 생략 가능(prisma에서 기본값 정의되어 있지만 명시적으로 작성)
        total: 0,
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });

    return store.id;
  } catch (err) {
    throw new Error(`가게 추가 중 오류가 발생했습니다: ${err.message}`);
  }
};
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
// 가게 조회
export const getStoreById = async (storeId) => {
  try {
    const store = await prisma.store.findUnique({
      where: { id: storeId }
    });

    return store;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};
// ----------------------------------------------------------------------