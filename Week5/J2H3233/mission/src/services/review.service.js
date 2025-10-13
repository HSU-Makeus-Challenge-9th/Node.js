import { getStoreById } from "../repositories/store.repository.js";
import { insertReview, getReviewsById } from "../repositories/review.repository.js";
import { responseCreateReviewDto } from "../dtos/review.dto.js";
import { CustomError } from '../error/customError.js';

export const createReview = async (data) => {

    try{
        const store = await getStoreById(data.storeId);
        if(!store) {
            throw new CustomError(404,'존재하지 않는 가게입니다.');
        }
        const reviewId = await insertReview(data);
        if(!reviewId) {
            throw new CustomError(500,'리뷰 생성에 실패했습니다.');
        }
        const review = await getReviewsById(reviewId);
        if(!review) {
            throw new CustomError(404,'리뷰 조회에 실패했습니다.');
        }

        return responseCreateReviewDto(review);
    } catch (error) {
        throw error;
    }
};
