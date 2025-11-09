import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleStoreAdd } from "./controllers/store.controller.js";
import { handleReviewAdd, handleGetMyReviews, handleGetStoreReviews } from "./controllers/review.controller.js";
import { 
    handleMissionAdd, handleMissionChallenge, handleGetMyMissions, handleUpdateUserMissionStatus, handleGetStoreMissions
} from "./controllers/mission.controller.js";

import { CustomError } from "./res/error/custom-error.js";
// middleware
import { validateUserSignup } from "./middlewares/user.validation.js";
import { checkRole } from "./middlewares/auth.js";
import { validateStoreAdd } from "./middlewares/store.validation.js";
import { 
    validateMissionAdd, 
    validateMissionChallenge, 
    validateMissionComplete, 
    validateGetStoreMissions,
    validateGetMyMissions
} from "./middlewares/mission.validation.js";
import { validateReviewAdd, validateGetMyReviews } from "./middlewares/review.validation.js";


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 사용자 추가
app.post("/api/v1/users/signup", validateUserSignup, handleUserSignUp);

// ------------------------------------------------------------------------------------------
// 5주차 과제
// 1-1: 특정 지역에 가게 추가하기 API
app.post("/api/v1/stores", checkRole(['OWNER']), validateStoreAdd, handleStoreAdd);

// 1-2: 가게에 리뷰 추가하기 API
app.post("/api/v1/reviews", validateReviewAdd, handleReviewAdd);

// 1-3: 가게에 미션 추가하기 API
app.post("/api/v1/missions", validateMissionAdd, handleMissionAdd);

// 1-4: 가게의 미션을 도전 중인 미션에 추가(미션 도전하기) API
app.post("/api/v1/missions/:missionId/challenge", validateMissionChallenge, handleMissionChallenge);
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// 6주차 과제
// 내가 작성한 리뷰 목록 조회 API (오프셋 페이지네이션)
// ?page=1&limit=5 (기본값)
app.get("/api/v1/users/:userId/reviews", validateGetMyReviews, handleGetMyReviews);

// 특정 가게의 미션 목록 조회 API (커서 페이지네이션)
// ?cursor=&limit=5 (기본값)
app.get("/api/v1/stores/:storeId/missions", validateGetStoreMissions, handleGetStoreMissions);

// 내 미션 목록 조회 API (오프셋 페이지네이션)
// ?status=CHALLENGING&page=1&limit=5 (기본값)
app.get("/api/v1/users/:userId/missions/challenge", validateGetMyMissions, handleGetMyMissions);

// 진행 중인 미션 완료 처리 API
app.patch("/api/v1/users/:userId/missions/:missionId/complete", validateMissionComplete, handleUpdateUserMissionStatus);


// 특정 가게의 리뷰 목록 조회 API (커서 페이지네이션)
// ?cursor=&limit=5 (기본값)
app.get("/api/v1/stores/:storeId/reviews", handleGetStoreReviews);
// ------------------------------------------------------------------------------------------

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.httpStatus).json({
            success: false,
            code: err.code,
            httpStatus: err.httpStatus,
            message: err.message,
            detail: err.detail
        });
    }

    // 기본 에러 처리
    res.status(500).json({
        success: false,
        code: "INTERNAL_SERVER_ERROR",
        httpStatus: 500,
        message: "서버 내부 오류가 발생했습니다.",
        detail: null
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});