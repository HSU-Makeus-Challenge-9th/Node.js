import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";

import { handleUserSignUp } from "./controllers/user.controller.js";
import { handleStoreAdd } from "./controllers/store.controller.js";
import { handleReviewAdd, handleGetMyReviews, handleGetStoreReviews } from "./controllers/review.controller.js";
import { 
    handleMissionAdd, handleMissionChallenge, handleGetMyMissions, handleUpdateUserMissionStatus, handleGetStoreMissions
} from "./controllers/mission.controller.js";

import { CustomError } from "./res/error/custom-error.js";
// middleware
import { validateUserSignup } from "./middlewares/user.validation.js";
import { isLogin, checkRole } from "./middlewares/auth.js";
import { validateStoreAdd } from "./middlewares/store.validation.js";
import { 
    validateMissionAdd, 
    validateMissionChallenge, 
    validateMissionComplete, 
    validateGetStoreMissions,
    validateGetMyMissions
} from "./middlewares/mission.validation.js";
import { validateReviewAdd, validateGetMyReviews, validateGetStoreReviews } from "./middlewares/review.validation.js";

import { googleStrategy, jwtStrategy } from "./config/auth.config.js";

dotenv.config();

passport.use(googleStrategy);
passport.use(jwtStrategy); 

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static('public')); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석
app.use(passport.initialize());

app.use(
    "/docs",
    swaggerUiExpress.serve,
    swaggerUiExpress.setup({}, {
      swaggerOptions: {
        url: "/openapi.json",
      },
    })
  );
  
  app.get("/openapi.json", async (req, res, next) => {
    // #swagger.ignore = true
    const options = {
      openapi: "3.0.0",
      disableLogs: true,
      writeOutputFile: false,
    };
    const outputFile = "/dev/null"; // 파일 출력은 사용하지 않습니다.
    const routes = ["./src/index.js"];
    const doc = {
      info: {
        title: "UMC 9th",
        description: "UMC 9th Node.js 테스트 프로젝트입니다.",
      },
      host: "localhost:3000",
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    };
  
    const result = await swaggerAutogen(options)(outputFile, routes, doc);
    res.json(result ? result.data : null);
  });

// ------------------------------------------------------------------------------------------
app.get("/oauth2/login/google", 
  passport.authenticate("google", { 
    session: false 
  })
);
app.get(
  "/oauth2/callback/google",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login-failed",
  }),
  (req, res) => {
    const tokens = req.user; 

    res.status(200).json({
      resultType: "SUCCESS",
      error: null,
      success: {
          message: "Google 로그인 성공!",
          tokens: tokens,
      }
    });
  }
);
// ------------------------------------------------------------------------------------------

// 사용자 추가
app.post("/api/v1/users/signup", validateUserSignup, handleUserSignUp);

// ------------------------------------------------------------------------------------------
// 5주차 과제
// 1-1: 특정 지역에 가게 추가하기 API
app.post("/api/v1/stores", isLogin, checkRole(['OWNER']), validateStoreAdd, handleStoreAdd);

// 1-2: 가게에 리뷰 추가하기 API
app.post("/api/v1/reviews", isLogin, validateReviewAdd, handleReviewAdd);

// 1-3: 가게에 미션 추가하기 API -> 9주차 패스
app.post("/api/v1/missions", validateMissionAdd, handleMissionAdd);

// 1-4: 가게의 미션을 도전 중인 미션에 추가(미션 도전하기) API
app.post("/api/v1/missions/:missionId/challenge", isLogin, validateMissionChallenge, handleMissionChallenge);
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// 6주차 과제
// 내가 작성한 리뷰 목록 조회 API (오프셋 페이지네이션)
// ?page=1&limit=5 (기본값)
app.get("/api/v1/users/reviews", isLogin, validateGetMyReviews, handleGetMyReviews);

// 특정 가게의 미션 목록 조회 API (커서 페이지네이션) -> 9주차 패스
// ?cursor=&limit=5 (기본값)
app.get("/api/v1/stores/:storeId/missions", validateGetStoreMissions, handleGetStoreMissions);

// 내 미션 목록 조회 API (오프셋 페이지네이션)
// ?status=CHALLENGING&page=1&limit=5 (기본값)
app.get("/api/v1/users/missions/challenge", isLogin, validateGetMyMissions, handleGetMyMissions);

// 진행 중인 미션 완료 처리 API
app.patch("/api/v1/users/missions/:missionId/complete", isLogin, validateMissionComplete, handleUpdateUserMissionStatus);


// 특정 가게의 리뷰 목록 조회 API (커서 페이지네이션)
// ?cursor=&limit=5 (기본값)
app.get("/api/v1/stores/:storeId/reviews", validateGetStoreReviews, handleGetStoreReviews);
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