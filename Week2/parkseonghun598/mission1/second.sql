-- 리뷰 작성하는 쿼리,
-- * 사진의 경우는 일단 배제

-- 반환해야 하는 값.

-- 1. 닉네임
-- 2. 리뷰 생성 날짜
-- 3. 내용
-- 4. 사진(베제)

-- 내 erd에서 해당 값들의 테이블

-- 1. 닉네임 - users table의 nickname
-- 2. 리뷰 생성 날짜 - store_review table의 created_at
-- 3. 내용 - store_review table의 context
-- 4. 사진 - review_img table의 img

-- 전략

-- 3개의 테이블에서 데이터를 반환받아야 한다. 이를 위해, 먼저 users table과 store_review table을 조인해 nickname, created_at, context를 추출하고, review_img 테이블과 조인해 img를 추출해 최종적으로 nickname, created_at, context, img를 반환받는다.

-- 최종 쿼리
select 
	u.nickname,
	r.created_at,
	r.context
from store_review r
join users u
	on r.user_id = u.id
where r.store_id = ?
order by r.created_at desc;# 최신순 정렬
