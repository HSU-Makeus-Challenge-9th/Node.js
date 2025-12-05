import { getStoreById } from "../repositories/store.repository.js";
import { insertReview, getReviewsById, getReviewsByUserId } from "../repositories/review.repository.js";
import { responseCreateReviewDto, responseGetReviewDto } from "../dtos/review.dto.js";
import { CustomError, ErrorCodes } from '../error/customError.js';
import { findByUserId } from "../repositories/user.repository.js";

export const createReview = async (data) => {
    const store = await getStoreById(data.storeId);
    if(!store) {
        throw new CustomError(404, ErrorCodes.STORE_NOT_FOUND, '존재하지 않는 가게입니다.');
    }
    const review = await insertReview(data);
    if(!review) {
        throw new CustomError(500, ErrorCodes.REVIEW_CREATE_FAILED, '리뷰 생성에 실패했습니다.');
    }

    return responseCreateReviewDto(review);
};

export const getReviewList = async (userId) => {

    const user = await findByUserId(userId);
    if (!user) {
        throw new CustomError(404, ErrorCodes.USER_NOT_FOUND, '존재하지 않는 사용자입니다.');
    }

    const {reviews, nextCursor} = await getReviewsByUserId(userId);
    return responseGetReviewDto(reviews, nextCursor);
};
