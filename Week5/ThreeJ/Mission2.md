# Controller → Service → Repository → DB 요청 흐름 정리

## 1. 회원가입 API 흐름 (POST /api/v1/users/signup)

### 1단계: Controller (`user-signup.controller.js`) 
  - 요청 수신
  - DTO로 변환(`bodyToUserSignup`)
  - 유효성 검사 -> 추가 예정
  - Service 호출(`userSignUp`)
  - 응답

### 2단계: Service (`user-signup.service.js`) 
  - Repository를 통해 사용자 추가
  - Repository를 통해 사용자 단일 조회
  - DTO를 통해 응답 데이터 변환

### 3단계: Repository (`user.repository.js`)
  - 사용자 INSERT
  - 약관 동의 INSERT (지금은 하드코딩으로 전부 true)
  - 선호 카테고리 `Bulk` INSERT
  - 사용자 단일 조회

### 4단계: DB (MySQL)
  - `users` 테이블에 저장 및 조회
  - `terms` 테이블에 저장
  - `user_prefer` 테이블에 저장


## 2. 가게 추가 API 흐름 (POST /api/v1/stores)

### 1단계: Controller (`store-add.controller.js`)
  - 요청 수신
  - DTO로 변환(`bodyToStoreAdd`)
  - 유효성 검사 -> 추가 예정
  - Service 호출(`storeAdd`)
  - 응답

### 2단계: Service (`store-add.service.js`)
  - OWNER 역할 확인 -> 추가 예정
  - Repository를 통해 가게 추가
  - Repository를 통해 가게 단일 조회
  - DTO로 응답 데이터 변환(`responseFromStoreAdd`)

### 3단계: Repository (`store.repository.js`)
  - 가게 INSERT
  - 가게 단일 조회

### 4단계: DB (MySQL)
  - `stores` 테이블에 저장 및 조회


## 3. 미션 추가 API 흐름 (POST /api/v1/missions)

### 1단계: Controller (`mission-add.controller.js`)
  - 요청 수신
  - DTO로 변환(`bodyToMissionAdd`)
  - 유효성 검사 -> 추가 예정
  - Service 호출(`missionAdd`)
  - 응답

### 2단계: Service (`mission-add.service.js`)
  - 가게 존재 확인(`checkStoreExists`)
  - Repository를 통해 미션 추가
  - Repository를 통해 미션 단일 조회
  - DTO로 응답 변환(`responseFromMissionAdd`)

### 3단계: Repository (`mission.repository.js`)
  - 미션 INSERT
  - 미션 단일 조회

### 4단계: DB (MySQL)
  - `missions` 테이블에 저장 및 조회


## 4. 미션 수락 API 흐름 (POST /api/v1/missions/challenge)

### 1단계: Controller (`mission-challenge.controller.js`)
  - 요청 수신
  - DTO로 변환(`bodyToUserMissionAdd`)
  - 유효성 검사 -> 추가 예정
  - Service 호출(`userMissionAdd`)
  - 응답

### 2단계: Service (`mission-challenge.service.js`)
  - Repository를 통해 중복 수락 여부 확인(`checkUMExists`)
  - Repository를 통해 도전 추가
  - Repository를 통해 도전 정보 조회
  - DTO로 응답 데이터 변환(`responseFromUserMissionAdd`)

### 3단계: Repository (`mission.repository.js`)
  - 사용자-미션 도전 추가
  - 사용자-미션 도전 단일 조회

### 4단계: DB (MySQL)
  - `user_mission` 테이블에 저장 및 조회


## 5. 리뷰 작성 API 흐름 (POST /api/v1/reviews)

### 1단계: Controller (`review-add.controller.js`)
  - 요청 수신
  - DTO로 변환(`bodyToReviewAdd`)
  - 유효성 검사 -> 추가 예정
  - Service 호출(`reivewAdd`)
  - 응답

### 2단계: Service (`review-add.service.js`)
  - Repository를 통해 미션의 가게 조회
  - Repository를 통해 리뷰 추가
  - Repository를 통해 리뷰 단일 조회
  - DTO로 응답 변환(`responseFromReviewAdd`)

### 3단계: Repository (`review.repository.js`)
  - 미션으로 가게 조회
  - 리뷰 추가
  - 리뷰 단일 조회

### 4단계: DB (MySQL)
  - `missions` 테이블에서 `store_id` 조회
  - `store_reviews` 테이블에 저장 및 조회