import { addReview, getReview } from "../repositories/review-add.repository.js";
import { responseFromReviewAdd } from "../dtos/review-add.dto.js";

export const reviewAdd = async (data) => {
  // 리뷰 등록
  const reviewId = await addReview(data);

  // 리뷰 조회
  const review = await getReview(reviewId, data.store_id, data.user_id);

  // dto 변환
  return responseFromReviewAdd(review);
};
