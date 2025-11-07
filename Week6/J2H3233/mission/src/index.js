import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { responseHandler } from './middlewares/responseHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

import { handlerCreateStore } from './controllers/store.controller.js';
import { handlerCreateReview, handlerGetReviewList } from './controllers/review.controller.js';
import { handlerCompleteUserMission, handlerCreateMission, handlerAddMissionToUser, handlerGetMissionList, handlerGetUserMissionList} from './controllers/mission.controller.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(responseHandler);


// 라우트 설정

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
app.get('/api/v1/review', handlerGetReviewList);

// 가게 미션 목록 조회하기
app.get('/api/v1/store/mission/:storeId', handlerGetMissionList);

// 내가 진행 중인 미션 목록
app.get('/api/v1/user/mission', handlerGetUserMissionList);

// 내가 진행 중인 미션 진행 완료로 바꾸기
app.patch('/api/v1/user/mission/:userMissionId', handlerCompleteUserMission);





// 에러 처리 미들웨어 
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 서버 시작`);
});