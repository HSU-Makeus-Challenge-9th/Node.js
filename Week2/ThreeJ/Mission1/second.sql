/*
    필요한 정보(받을 정보들) : writer_id, store_id, content, score

    설명 : 리뷰 작성이라고 적혀있어서, 도저히 select문이 아닌 insert문을 사용해야 할 것 같아서 그렇게 작성했습니다.
*/

insert into store_reviews (writer_id, store_id, content, score, created_at, updated_at)
values (?, ?, ?, ?, NOW(), NOW());

/*
피드백
1. score가 범위 확인: 점수가 0점부터 5점 사이의 유효한 값인지 
2. 리뷰 내용이 비어있지 않은지 확인
3. 중복 리뷰 작성 방지: UNIQUE 제약조건
4. 리뷰가 등록될 때 해당 상점의 평균 평점도 함께 업데이트하는 트랜잭션 처리를 고려
*/

-- 1
ALTER TABLE store_reviews ADD CONSTRAINT check_score_range CHECK (score >= 0 AND score <= 5)

-- 2
ALTER TABLE store_reviews MODIFY content TEXT NOT NULL;

-- 3
ALTER TABLE store_reviews ADD CONSTRAINT uk_writer_id_store_id UNIQUE (writer_id, store_id);
-- UNIQUE 규칙을 만들면, 그 규칙을 위한 UNIQUE INDEX가 자동으로 생성됨

-- 4
START TRANSACTION;

insert into store_reviews (writer_id, store_id, content, score, created_at, updated_at)
values (?, ?, ?, ?, NOW(), NOW());

update stores 
set total = total + ?, count = count + 1
where id = ? -- store_id

COMMIT;