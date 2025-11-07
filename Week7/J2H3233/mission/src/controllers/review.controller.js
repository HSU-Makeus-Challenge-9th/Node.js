import { createReview, getReviewList } from "../services/review.service.js";
import { createReviewDto, getReviewDto } from "../dtos/review.dto.js";

export const handlerCreateReview = async (req, res, next) => {
    const { storeId } = req.params;
    const data = req.body;

    
    try {

        if (!storeId || isNaN(parseInt(storeId))) {
        throw new CustomError(
            400,
            ErrorCodes.INVALID_INPUT,
            '유효하지 않은 가게 ID입니다.'
        );
        }
        const review = await createReview(createReviewDto(storeId, data));
        
        res.jsonSuccess(
            review, 
            '리뷰 작성에 성공했습니다',
            201,
        )
    } catch (error) {
        next(error);
    }
}

export const handlerGetReviewList = async (req, res, next) => {
    const userId  = req.params.userId;
    try {
        if (!userId || isNaN(parseInt(userId))) {
            throw new CustomError(
                400,
                ErrorCodes.INVALID_INPUT,
                '유효하지 않은 사용자 ID입니다.'
            );
        }
        const reviews = await getReviewList(getReviewDto(userId));
        res.jsonSuccess(
            reviews, 
            '리뷰 목록 조회에 성공했습니다', 
            200
        );
    } catch (error) {
        next(error);
    }
};