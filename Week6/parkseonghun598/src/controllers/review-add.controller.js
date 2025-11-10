import { bodyToReviewAdd } from "../dtos/review-add.dto.js";
import { reviewAdd } from "../services/review-add.service.js";

export const handleReviewAdd = async (req, res) => {
  try {
    // dto 변환
    const reviewData = bodyToReviewAdd(req.body);

    // 서비스레이어 호출
    const result = await reviewAdd(reviewData);

    // 성공시
    res.status(201).json({
      message: "리뷰 등록 성공",
      result,
    });
  } catch (err) {
    //실패시
    res.status(500).json({
      message: `리뷰 등록 실패: ${err.message}`,
    });
  }
};
