import { prisma } from "../config/db.config.js";
import { InternalServerError, ResourceNotFoundError } from "../res/error/custom-error.js";

// ----------------------------------------------------------------------
// 리뷰 추가
export const addReview = async (data) => {
  try {
    const mission = await prisma.mission.findUnique({
      where: { id: data.missionId },
      select: { storeId: true },
    });

    const review = await prisma.storeReview.create({
      data: {
        content: data.content,
        score: data.score,
        writerId: data.userId,
        storeId: mission.storeId,
        
        // 생략 가능(prisma에서 기본값 정의되어 있지만 명시적으로 작성)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return review.id;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("리뷰 추가 중 오류가 발생했습니다.", {
      target: "REVIEW",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 리뷰 조회
export const getReviewById = async (reviewId) => {
  try {
    const review = await prisma.storeReview.findUnique({
      where: { id: reviewId },
    });

    return review;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("리뷰 조회 중 오류가 발생했습니다.", {
      target: "REVIEW",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 사용자가 작성한 리뷰 총 개수
export const getReviewCountByUserId = async (userId) => {
  try {
    const count = await prisma.storeReview.count({
      where: { writerId: userId },
    });

    return count;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("리뷰 개수 조회 중 오류가 발생했습니다.", {
      target: "REVIEW",
      reason: err?.message || "Unknown error"
    });
  }
};
// 사용자가 작성한 리뷰 목록 조회 (옵셋 페이지네이션)
export const getReviewsByUserId = async (userId, offset, limit) => {
  try {
    const reviews = await prisma.storeReview.findMany({
      where: { writerId: userId },
      skip: offset,
      take: limit,
      orderBy: { createdAt: 'desc' }, // 최신순
      include: {
        store: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return reviews;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("리뷰 목록 조회 중 오류가 발생했습니다.", {
      target: "REVIEW",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// 특정 가게의 리뷰 조회 (커서 페이지네이션)
export const getReviewsByStoreId = async (storeId, cursor, limit) => {
  try {
    const reviews = await prisma.storeReview.findMany({
      where: {
        storeId: storeId,
        ...(cursor && { id: { lt: BigInt(cursor) } })
      },
      orderBy: [
        { createdAt: 'desc' },
        { id: 'desc' },
      ],
      take: limit + 1, // 다음 페이지 존재 여부 확인을 위해 1개 더 가져옴
      include: {
        writer: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });

    return reviews;
  } catch (err) {
    console.error(err);
    throw new InternalServerError("가게 리뷰 목록 조회 중 오류가 발생했습니다.", {
      target: "REVIEW",
      reason: err?.message || "Unknown error"
    });
  }
};
// ----------------------------------------------------------------------
