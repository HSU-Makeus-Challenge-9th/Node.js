import { prisma } from "../config/db.config.js";
import { CustomError, ErrorCodes } from '../error/customError.js';

export const insertReview = async (data) => {
    try {
        const review = await prisma.review.create({
            data: {
                store_id: data.storeId,
                user_id: data.userId,
                score: data.score,
                content: data.content
            }
        });
        return review.id;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','리뷰 생성 중 오류가 발생하였습니다.');
    }
};


export const getReviewsById = async (reviewId) => {
    try {
        const review = await prisma.review.findUnique({
            where: { id: reviewId },
        });
        return review;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','리뷰 조회 중 오류가 발생하였습니다.');
    }
};


export const getReviewsByUserId = async (userId) => {
    try {
        const reviews = await prisma.review.findMany({
            where: { user_id: userId },
        });
        return reviews;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','리뷰 목록 조회 중 오류가 발생하였습니다.');
    }
};
