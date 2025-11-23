import { responseFromReviewAdd, responseFromReviewList, responseFromStoreReviewList } from "../dtos/review.dto.js";
import { addReview, getReviewById, getReviewsByUserId, getReviewCountByUserId, getReviewsByStoreId } from "../repositories/review.repository.js";

// 리뷰 추가
export const reviewAdd = async (data) => {
    const reviewId = await addReview(data);
    const review = await getReviewById(reviewId);

    return responseFromReviewAdd(review, data.missionId);
};

// 내가 작성한 리뷰 목록 조회
export const getMyReviews = async (userId, page = 1, limit = 5) => {
    const offset = (page - 1) * limit;
    
    const reviews = await getReviewsByUserId(userId, offset, limit);
    const totalCount = await getReviewCountByUserId(userId);
    
    return responseFromReviewList(reviews, totalCount, page, limit);
};

// 특정 가게의 리뷰 목록 조회
export const getStoreReviews = async (storeId, cursor, limit = 5) => {
    const reviews = await getReviewsByStoreId(storeId, cursor, limit);
    
    return responseFromStoreReviewList(reviews, limit);
};
