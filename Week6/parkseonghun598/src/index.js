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

app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 기존 API
app.post("/api/v1/users/signup", handleUserSignUp);
app.post("/api/v1/stores", handleStoreAdd);
app.post("/api/v1/missions", handleMissionAdd);
app.post("/api/v1/missions/challenge", handleMissionChallenge);
app.post("/api/v1/reviews", handleReviewAdd);

// 새로운 API (Prisma ORM 사용)
app.get("/api/v1/users/:userId/reviews", handleGetUserReviews); // 내가 작성한 리뷰 목록
app.get("/api/v1/stores/:storeId/missions", handleGetStoreMissions); // 특정 가게의 미션 목록
app.get("/api/v1/users/:userId/missions/in-progress", handleGetUserInProgressMissions); // 내가 진행 중인 미션 목록
app.patch("/api/v1/users/:userId/missions/:missionId/complete", handleCompleteMission); // 미션 진행 완료로 변경

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});