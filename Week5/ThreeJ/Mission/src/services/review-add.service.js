import { responseFromReviewAdd } from "../dtos/review-add.dto.js";
import { addReview, getReviewById } from "../repositories/review.repository.js";

export const reivewAdd = async (data) => {
  const reviewId = await addReview(data);
  const review = await getReviewById(reviewId);

  return responseFromReviewAdd(review);
};
