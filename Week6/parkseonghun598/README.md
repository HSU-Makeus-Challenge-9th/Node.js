# UMC 9기 Node.js Week 3 - Prisma ORM 프로젝트

## 📋 프로젝트 개요

음식점 리뷰 및 미션 관리 시스템을 **Prisma ORM**으로 전환하고, 새로운 API를 구현한 프로젝트입니다.

## 🎯 미션 완료 현황

### ✅ 1. 기존 Repository를 Prisma ORM으로 전환
- `user.repository.js` - 사용자 관리 (회원가입, 약관 동의, 선호 카테고리)
- `store-add.repository.js` - 가게 등록 및 조회
- `mission-add.repository.js` - 미션 추가 및 조회
- `review-add.repository.js` - 리뷰 작성 및 조회
- `mission-challenge.repositories.js` - 미션 도전 관리

### ✅ 2. 내가 작성한 리뷰 목록 API
**엔드포인트**: `GET /api/v1/users/:userId/reviews`

**쿼리 파라미터**:
- `cursor` (optional): 페이지네이션을 위한 커서

**응답 예시**:
```json
{
  "isSuccess": true,
  "result": {
    "data": [
      {
        "id": 1,
        "store": {
          "id": 5,
          "name": "맛있는 식당",
          "address": "서울시 강남구"
        },
        "title": "정말 맛있어요!",
        "content": "서비스도 좋고 음식도 맛있습니다.",
        "score": 4.5,
        "createdAt": "2024-10-27T10:30:00.000Z"
      }
    ],
    "pagination": {
      "cursor": 1
    }
  }
}
```

**특징**:
- 커서 기반 페이지네이션 (한 페이지당 5개)
- 가게 정보 포함 (include 사용)
- 최신순 정렬

### ✅ 3. 특정 가게의 미션 목록 API
**엔드포인트**: `GET /api/v1/stores/:storeId/missions`

**쿼리 파라미터**:
- `cursor` (optional): 페이지네이션을 위한 커서

**응답 예시**:
```json
{
  "isSuccess": true,
  "result": {
    "data": [
      {
        "id": 10,
        "store": {
          "id": 5,
          "name": "맛있는 식당",
          "address": "서울시 강남구"
        },
        "point": 1000,
        "startDate": "2024-10-01",
        "endDate": "2024-10-31",
        "region": "강남구"
      }
    ],
    "pagination": {
      "cursor": 10
    }
  }
}
```

**특징**:
- 커서 기반 페이지네이션 (한 페이지당 5개)
- 가게 정보 포함
- ID 역순 정렬

### ✅ 4. 내가 진행 중인 미션 목록 API
**엔드포인트**: `GET /api/v1/users/:userId/missions/in-progress`

**쿼리 파라미터**:
- `cursor` (optional): 페이지네이션을 위한 커서

**응답 예시**:
```json
{
  "isSuccess": true,
  "result": {
    "data": [
      {
        "id": 15,
        "mission": {
          "id": 10,
          "point": 1000,
          "startDate": "2024-10-01",
          "endDate": "2024-10-31",
          "region": "강남구"
        },
        "store": {
          "id": 5,
          "name": "맛있는 식당",
          "address": "서울시 강남구"
        },
        "status": "진행중",
        "createdAt": "2024-10-15T14:20:00.000Z"
      }
    ],
    "pagination": {
      "cursor": 15
    }
  }
}
```

**특징**:
- status가 '진행중'인 미션만 조회
- 미션 정보와 가게 정보 모두 포함 (중첩 include 사용)
- 최신순 정렬

### ✅ 5. 미션 진행 완료로 변경 API
**엔드포인트**: `PATCH /api/v1/users/:userId/missions/:missionId/complete`

**응답 예시**:
```json
{
  "isSuccess": true,
  "message": "미션이 완료되었습니다.",
  "result": {
    "id": 15,
    "mission": {
      "id": 10,
      "point": 1000,
      "startDate": "2024-10-01",
      "endDate": "2024-10-31",
      "region": "강남구"
    },
    "store": {
      "id": 5,
      "name": "맛있는 식당",
      "address": "서울시 강남구"
    },
    "status": "완료",
    "updatedAt": "2024-10-27T15:30:00.000Z"
  }
}
```

**특징**:
- 미션 상태를 '진행중'에서 '완료'로 변경
- 업데이트된 미션 정보 반환

## 🗄️ Prisma Schema

```prisma
// User, Store, Mission, Review 등 8개 모델 정의
// - 관계 설정 (1:1, 1:N, N:M)
// - onDelete: Cascade 설정
// - 필드 매핑 (@map)
```

**주요 모델**:
- `User` - 사용자
- `Agreement` - 약관 동의
- `PreferCategory` - 선호 카테고리
- `UserPreference` - 사용자-카테고리 매핑
- `Store` - 가게
- `Mission` - 미션
- `Review` - 리뷰
- `UserMission` - 사용자-미션 매핑

## 🏗️ 프로젝트 구조

```
week3/
├── prisma/
│   └── schema.prisma          # Prisma 스키마 (8개 모델)
├── src/
│   ├── index.js              # Express 서버 + 라우트
│   ├── db.config.js          # MySQL & Prisma Client 설정
│   ├── controllers/          # 요청 처리 계층
│   │   ├── user-reviews.controller.js      # 신규
│   │   ├── store-missions.controller.js    # 신규
│   │   └── user-missions.controller.js     # 신규
│   ├── services/             # 비즈니스 로직 계층
│   │   ├── user-reviews.service.js         # 신규
│   │   ├── store-missions.service.js       # 신규
│   │   └── user-missions.service.js        # 신규
│   ├── repositories/         # 데이터베이스 접근 계층 (Prisma 사용)
│   │   ├── user-reviews.repository.js      # 신규
│   │   ├── store-missions.repository.js    # 신규
│   │   └── user-missions.repository.js     # 신규
│   └── dtos/                # 데이터 변환 객체
│       ├── user-reviews.dto.js             # 신규
│       ├── store-missions.dto.js           # 신규
│       └── user-missions.dto.js            # 신규
└── package.json
```

## 🚀 실행 방법

### 1. 환경 변수 설정 (.env)
```env
PORT=3000
DATABASE_URL="mysql://user:password@localhost:3306/umc_9th"
```

### 2. Prisma Client 생성
```bash
npx prisma generate
```

### 3. 서버 실행
```bash
# 개발 모드 (자동 재시작 + Prisma 생성)
npm run dev

# 프로덕션 모드
npm start
```

## 📡 API 엔드포인트

### 기존 API (Prisma로 전환 완료)
- `POST /api/v1/users/signup` - 회원가입
- `POST /api/v1/stores` - 가게 등록
- `POST /api/v1/missions` - 미션 등록
- `POST /api/v1/missions/challenge` - 미션 도전
- `POST /api/v1/reviews` - 리뷰 작성

### 신규 API (Prisma ORM 사용)
- `GET /api/v1/users/:userId/reviews` - 내가 작성한 리뷰 목록
- `GET /api/v1/stores/:storeId/missions` - 특정 가게의 미션 목록
- `GET /api/v1/users/:userId/missions/in-progress` - 진행 중인 미션 목록
- `PATCH /api/v1/users/:userId/missions/:missionId/complete` - 미션 완료

## 🎨 Prisma ORM 주요 기능 활용

### 1. **Relation 조회 (include)**
```javascript
const reviews = await prisma.review.findMany({
  include: {
    store: {
      select: { id: true, name: true, address: true }
    }
  }
});
```

### 2. **커서 기반 페이지네이션**
```javascript
const missions = await prisma.mission.findMany({
  cursor: cursor ? { id: cursor } : undefined,
  skip: cursor ? 1 : 0,
  take: 5,
});
```

### 3. **조건부 조회 (where)**
```javascript
const inProgressMissions = await prisma.userMission.findMany({
  where: {
    userId: userId,
    status: '진행중',
  }
});
```

### 4. **트랜잭션 (updateMany)**
```javascript
await prisma.userMission.updateMany({
  where: { userId, missionId },
  data: { status: '완료' }
});
```

## 💡 Prisma의 장점

1. **타입 안정성**: TypeScript와 완벽한 통합 (JavaScript에서도 자동완성 지원)
2. **관계 처리**: `include`로 간편한 JOIN
3. **자동 마이그레이션**: Schema 변경 시 자동 동기화
4. **쿼리 최적화**: 자동으로 최적화된 SQL 생성
5. **개발 생산성**: Raw SQL 대비 코드 가독성 및 유지보수성 향상

## 📝 배운 점

1. **Prisma Schema 작성**: 관계 정의, 필드 매핑, 제약 조건
2. **Prisma Client API**: findMany, findUnique, create, update 등
3. **페이지네이션**: 커서 기반 vs 오프셋 기반
4. **관계 조회**: include, select를 활용한 JOIN
5. **3-Layer Architecture**: Controller-Service-Repository 패턴 유지

## ✨ 특이사항

- 모든 신규 API에 **커서 기반 페이지네이션** 적용
- 기존 코드와의 **호환성 유지** (DTO 변환)
- **에러 처리** 및 **로깅** 추가
- RESTful API 설계 원칙 준수

---


