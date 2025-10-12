import { StatusCodes } from "http-status-codes";
import { bodyToReviewAdd } from "../dtos/review-add.dto.js";
import { reivewAdd } from "../services/review-add.service.js";

export const handleReviewAdd = async (req, res, next) => {
  console.log("리뷰 생성을 요청했습니다!");
  console.log("body:", req.body);

  const review = await reivewAdd(bodyToReviewAdd(req.body));

  res.status(StatusCodes.CREATED).json({
    success: true,
    code: "SUCCESS_201",
    message: "리뷰가 성공적으로 추가되었습니다.",
    data: review,
  });
};
