import { bodyToReviewAdd } from "../dtos/review-add.dto.js";
import { reviewAdd } from "../services/review-add.service.js";

export const handleReviewAdd = async (req, res, next) => {
  try {
    console.log("리뷰 등록을 요청했습니다!");
    
    // dto 변환
    const reviewData = bodyToReviewAdd(req.body);

    // 서비스 레이어 호출
    const result = await reviewAdd(reviewData);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};
