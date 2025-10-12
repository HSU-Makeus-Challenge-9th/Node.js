import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { handleUserSignUp } from "./controllers/user-signup.controller.js";
import { handleStoreAdd } from "./controllers/store-add.controller.js";
import { handleReviewAdd } from "./controllers/review-add.controller.js";
import { handleMissionAdd } from "./controllers/mission-add.controller.js";
import { handleMissionChallenge } from "./controllers/mission-challenge.controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 사용자 추가
app.post("/api/v1/users/signup", handleUserSignUp);

// 1-1: 특정 지역에 가게 추가하기 API
app.post("/api/v1/stores", handleStoreAdd);

// 1-2: 가게에 리뷰 추가하기 API
app.post("/api/v1/reviews", handleReviewAdd);

// 1-3: 가게에 미션 추가하기 API
app.post("/api/v1/missions", handleMissionAdd);

// 1-4: 가게의 미션을 도전 중인 미션에 추가(미션 도전하기) API
app.post("/api/v1/missions/challenge", handleMissionChallenge);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});