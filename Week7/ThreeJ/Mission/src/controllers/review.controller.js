import { StatusCodes } from "http-status-codes";
import { bodyToReviewAdd, } from "../dtos/review.dto.js";
import { reivewAdd, getMyReviews, getStoreReviews } from "../services/review.service.js";

export const handleReviewAdd = async (req, res, next) => {
    console.log("리뷰 생성을 요청했습니다!");
    console.log("body:", req.body); // 테스트용

    const review = await reivewAdd(bodyToReviewAdd(req.body));

    res
        .status(StatusCodes.CREATED)
        .json({
            success: true, 
            code: "SUCCESS_201", 
            message: "리뷰가 성공적으로 추가되었습니다.", 
            data: review
        });
};

// 내가 작성한 리뷰 목록 조회
export const handleGetMyReviews = async (req, res, next) => {
    console.log("내가 작성한 리뷰 목록 조회를 요청했습니다!");
    console.log("params:", req.params); // 테스트용
    console.log("query:", req.query); // 테스트용

    const userId = parseInt(req.params.userId);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const result = await getMyReviews(userId, page, limit);

    res
        .status(StatusCodes.OK)
        .json({
            success: true,
            code: "SUCCESS_200",
            message: "내가 작성한 리뷰 목록이 성공적으로 조회 성공했습니다.",
            data: result
        });
};

// 특정 가게의 리뷰 목록 조회 (커서 페이지네이션)
export const handleGetStoreReviews = async (req, res, next) => {
    console.log("특정 가게의 리뷰 목록 조회를 요청했습니다!");
    console.log("params:", req.params);
    console.log("query:", req.query);

    const storeId = parseInt(req.params.storeId);
    const cursor = parseInt(req.query.cursor) || null;
    const limit = parseInt(req.query.limit) || 5;

    const result = await getStoreReviews(storeId, cursor, limit);

    res
        .status(StatusCodes.OK)
        .json({
            success: true,
            code: "SUCCESS_200",
            message: "가게 리뷰 목록이 성공적으로 조회되었습니다.",
            data: result
        });
};
