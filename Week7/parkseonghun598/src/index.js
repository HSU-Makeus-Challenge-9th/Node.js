import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleStoreAdd } from "./controllers/store-add.controller.js";
import { handleMissionAdd } from "./controllers/mission-add.controller.js";
import { handleMissionChallenge } from "./controllers/mission-challenge.controller.js";
import { handleReviewAdd } from "./controllers/review-add.controller.js";
import { handleGetUserReviews } from "./controllers/user-reviews.controller.js";
import { handleGetStoreMissions } from "./controllers/store-missions.controller.js";
import { handleGetUserInProgressMissions, handleCompleteMission } from "./controllers/user-missions.controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

/**
 * 공통 응답을 사용할 수 있는 헬퍼 함수 등록
 */
app.use((req, res, next) => {
  res.success = (success) => {
    return res.json({ resultType: "SUCCESS", error: null, success });
  };

  res.error = ({ errorCode = "unknown", reason = null, data = null }) => {
    return res.json({
      resultType: "FAIL",
      error: { errorCode, reason, data },
      success: null,
    });
  };

  next();
});

app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/v1/users/signup", handleUserSignUp);
app.post("/api/v1/stores", handleStoreAdd);
app.post("/api/v1/missions", handleMissionAdd);
app.post("/api/v1/missions/challenge", handleMissionChallenge);
app.post("/api/v1/reviews", handleReviewAdd);

app.get("/api/v1/users/:userId/reviews", handleGetUserReviews); // 내가 작성한 리뷰 목록
app.get("/api/v1/stores/:storeId/missions", handleGetStoreMissions); // 특정 가게의 미션 목록
app.get("/api/v1/users/:userId/missions/in-progress", handleGetUserInProgressMissions); // 내가 진행 중인 미션 목록
app.patch("/api/v1/users/:userId/missions/:missionId/complete", handleCompleteMission); // 미션 진행 완료로 변경

/**
 * 전역 오류를 처리하기 위한 미들웨어
 */
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500).error({
    errorCode: err.errorCode || "unknown",
    reason: err.reason || err.message || null,
    data: err.data || null,
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});