--1. 내가 진행중, 진행 완료한 미션 모아서 보는 쿼리(페이징 포함)
SELECT 
    um.user_mission_id,
    um.status,
    m.give_point,
    m.price,
    s.name,
FROM user_mission AS um
JOIN mission AS m on um.mission_category_id = m.mission_category_id
JOIN store AS s on um.store_id = s.store_id
WHERE
    um.status = "수행중" AND um.status = "수행 성공" OR um.status = "수행 실패"
ORDER BY
    um.user_mission_id DESC
LIMIT 10;

--2. 리뷰 작성하는 쿼리,* 사진의 경우는 일단 배제
SELECT 
    u.user_id,
    u.name,
    r.star,
    r.title,
    r.content,
    r.create_at,
    r.updated_at
FROM user AS u 
JOIN review AS s ON u.user_id = r.user_id

--3. 홈 화면 쿼리 (현재 선택 된 지역에서 도전이 가능한 미션 목록, 페이징 포함)
SELECT 
    s.name 
    m.give_point,
    m.create_at,
    m.price
    (
        SELECT COUNT(*) 
        FROM user_mission AS um
        WHERE um.status = '미션 성공'
    ) AS total_success_count
FROM
    store AS s 
JOIN mission AS m ON s.store_id = m.store_id 
LEFT JOIN user_mission AS um 
    ON m.mission_category_id = um.mission_category_id
WHERE 
    m.region = '안암동'
    AND um.user_mission_id IS NULL
ORDER BY 
    m.mission_id DESC
LIMIT 10;

--4 마이페이지 화면 쿼리
SELECT
    name
    email
    phone_num
    point
FROM user