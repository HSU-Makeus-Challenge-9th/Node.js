import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { responseHandler } from './middlewares/responseHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

import { handlerCreateStore } from './controllers/store.controller.js';
import { handlerCreateReview, handlerGetReviewList } from './controllers/review.controller.js';
import { handlerCompleteUserMission, handlerCreateMission, handlerAddMissionToUser, handlerGetMissionList, handlerGetUserMissionList} from './controllers/mission.controller.js';
import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(compression({ threshold: 512 }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseHandler);
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup({}, {
    swaggerOptions: {
      url: "/openapi.json",
    },
  })
);

// 라우터 설정

// week5
// 특정 지역에 가게 추가하기
app.post('/api/v1/store/:regionCode', handlerCreateStore);

// 가게에 리뷰 추가하기
app.post('/api/v1/store/review/:storeId',handlerCreateReview);

// 가게 미션 추가하기
app.post('/api/v1/store/mission/:storeId', handlerCreateMission);

// 가게의 미션을 도전 중인 미션에 추가
app.post('/api/v1/mission/:missionId', handlerAddMissionToUser);


// week6
// 작성 리뷰 조회하기
app.get('/api/v1/users/:userId/reviews', handlerGetReviewList);

// 가게 미션 목록 조회하기
app.get('/api/v1/stores/:storeId/missions', handlerGetMissionList);

// 내가 진행 중인 미션 목록
app.get('/api/v1/users/:userId/missions/ongoing', handlerGetUserMissionList);

// 내가 진행 중인 미션 진행 완료로 바꾸기
app.patch('/api/v1/user-missions/:userMissionId', handlerCompleteUserMission);


app.get('/small', (req, res) => {
  res.send(`작은데이터`);
  console.log('/small 응답: 압축되지 않음 (512b 미만)');
});

app.get('/large', (req, res) => {
  res.send(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
  console.log('/large 응답: 압축됨 (512b 초과)');
});

app.get("/openapi.json", async (req, res, next) => {
  // #swagger.ignore = true
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };
  const outputFile = "/dev/null"; 
  const routes = ["./src/index.js"];
  const doc = {
    info: {
      title: "UMC 9th",
      description: "UMC 9th Node.js 테스트 프로젝트입니다.",
    },
    host: "localhost:3000",
  };

  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

// 에러 처리 미들웨어 
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 서버 시작`);
});