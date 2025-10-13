import { createReview } from "../services/review.service.js";
import { createReviewDto } from "../dtos/review.dto.js";
import { responseCreateReviewDto } from "../dtos/review.dto.js";


export const handlerCreateReview = async (req, res, next) => {
    const { storeId } = req.params;
    const data = req.body;

    try {
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