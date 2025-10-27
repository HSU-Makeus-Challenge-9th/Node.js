import { StatusCodes } from "http-status-codes";
import { listUserReviews } from "../services/user-reviews.service.js";

export const handleGetUserReviews = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;

    console.log(`사용자 ${userId}의 리뷰 목록 조회 요청`);

    const result = await listUserReviews(userId, cursor);

    res.status(StatusCodes.OK).json({
      isSuccess: true,
      result: result,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: `리뷰 목록 조회 실패: ${err.message}`,
    });
  }
};

