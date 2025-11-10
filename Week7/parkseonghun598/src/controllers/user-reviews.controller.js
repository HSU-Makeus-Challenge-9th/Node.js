import { listUserReviews } from "../services/user-reviews.service.js";

export const handleGetUserReviews = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;

    console.log(`사용자 ${userId}의 리뷰 목록 조회 요청`);

    const result = await listUserReviews(userId, cursor);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};

