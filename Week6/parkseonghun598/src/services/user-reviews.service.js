import { getUserReviews } from "../repositories/user-reviews.repository.js";
import { responseFromUserReviews } from "../dtos/user-reviews.dto.js";

export const listUserReviews = async (userId, cursor) => {
  // 리뷰 목록 조회
  const reviews = await getUserReviews(userId, cursor);

  // DTO 변환
  return responseFromUserReviews(reviews);
};

