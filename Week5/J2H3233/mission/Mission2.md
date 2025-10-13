## 1. 특정 지역에 가게 추가하기 api
### 1. /api/v1/store/:regionCode 요청
    ```
    //요청 json양식
    {
        "name": String,
        "address" : String,
        "category" : bigint 
    }    
    ```  
### 2. app.js

1. 미들웨어
    ```
    app.use(express.json()); 
    //요청값을 json으로 파싱

    app.use(express.urlencoded({ extended: true })); 
    // 요청 본문(Body) 내 URL 인코딩된 폼 데이터를 객체로 파싱

    app.use(responseHandler);
    // 공통 응답 핸들러
    ```
            
        
2. responseHandler 핸들러
    * 응답 형식 통일
3. 라우터
    * /api/v1/store/:regionCode 요청처리
    * 해당 콜백 함수 handlerCreateStore 호출

### 3. controller
    * service 레이어 호출
    * 응답 생성

### 4. service
    * 지역, 카테고리등 값 검증
    * 참조 값 획득
    * 데이터 삽입

### 5. repository
    * 테이블에 값 저장 및 조회

### 6. DB


## 2. 가게에 리뷰 추가하기 api
### 1. /api/v1/store/reveiew/:storeId 요청
    ```
    //요청 json양식
    {
        "userId": bigint,
        "score" : float,
        "content" : text 
    }    
    ```  
### 2. app.js

1. 미들웨어
2. responseHandler 핸들러
3. 라우터
    * /api/v1/store/reveiew/:storeId 요청처리
    * 해당 콜백 함수 handlerCreateReview 호출

### 3. controller
    * service 레이어 호출
    * 응답 생성

### 4. service
    * 가게 값 검증
    * 참조 값 획득
    * 데이터 삽입

### 5. repository
    * 테이블에 값 저장 및 조회


## 3. 가게에 미션 추가하기 api
### 1. /api/v1/store/mission/:storeId' 요청
    ```
    //요청 json양식
    {
        "name": String,
        "address" : String,
        "category" : bigint 
    }    
    ```  
### 2. app.js

1. 미들웨어
    ```
    app.use(express.json()); 
    //요청값을 json으로 파싱

    app.use(express.urlencoded({ extended: true })); 
    // 요청 본문(Body) 내 URL 인코딩된 폼 데이터를 객체로 파싱

    app.use(responseHandler);
    // 공통 응답 핸들러
    ```
            
        
2. responseHandler 핸들러
    * 응답 형식 통일
3. 라우터
    * /api/v1/store/mission/:storeId 요청처리
    * 해당 콜백 함수 handlerCreateMission 호출

### 3. controller
    * service 레이어 호출
    * 응답 생성

### 4. service
    * 가게 값 검증
    * 참조 값 획득
    * 데이터 삽입

### 5. repository
    * 테이블에 값 저장 및 조회


## 4. 가게에 미션을 도전 중인 미션에 추가 api


### 1. /api/v1/mission/:missionId 요청
    ```
    //요청 json양식
    {
        "name": String,
        "address" : String,
        "category" : bigint 
    }    
    ```  
### 2. app.js

1. 미들웨어
    ```
    app.use(express.json()); 
    //요청값을 json으로 파싱

    app.use(express.urlencoded({ extended: true })); 
    // 요청 본문(Body) 내 URL 인코딩된 폼 데이터를 객체로 파싱

    app.use(responseHandler);
    // 공통 응답 핸들러
    ```
            
        
2. responseHandler 핸들러
    * 응답 형식 통일
3. 라우터
    * /api/v1/mission/:missionId 요청처리
    * 해당 콜백 함수 handlerAddMissionToUser 호출

### 3. controller
    * service 레이어 호출
    * 응답 생성

### 4. service
    * 미션 값 검증
    * 참조 값 획득
    * 인증값 생성
    * 데이터 삽입

### 5. repository
    * 테이블에 값 저장 및 조회