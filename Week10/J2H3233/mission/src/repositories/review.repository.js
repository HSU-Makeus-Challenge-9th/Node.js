import { prisma }  from "../config/db.config.js";
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
        return review;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','리뷰 생성 중 오류가 발생하였습니다.');
    }
};


export const getReviewsById = async (reviewId, client = prisma) => {
    try {
        const review = await client.review.findUnique({
            where: { id: reviewId },
        });
        return review;
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','리뷰 조회 중 오류가 발생하였습니다.');
    }
};


export const getReviewsByUserId = async (userId, cursor, client = prisma) => {
    const pageSize = 10;
    try {
        const reviews = await client.review.findMany({
            where: { user_id: userId },
            include: { 
                store: {
                    select: {
                        name: true,
                        address: true,
                    },
                },
            },
            orderBy: { created_at: 'desc' },
            take: pageSize + 1,
            ...(cursor && {
                skip: 1,
                cursor: { id: cursor }
            })
        });
        const hasMore = reviews.length > pageSize;
        const data = hasMore ? reviews.slice(0, pageSize) : reviews;

        return {
            reviews: data,
            nextCursor: hasMore ? Number(data[data.length - 1].id) : null,
        };
    } catch (error) {
        console.error(error.stack);
        throw new CustomError(500,'DB_OPERATION_FAILED','리뷰 목록 조회 중 오류가 발생하였습니다.');
    }
};


