-- 반환해야 하는 값

-- 1. 성공 여부
-- 2. 가게 이름 
-- 3. 가격
-- 4. 포인트

-- 내 erd에서 해당 값들의 테이블

-- 1. 성공 여부 - mission table의 end_date = null인 경우 진행 중, ≠ null 인경우 진행 완료
-- 2. 가게 이름 - stores table의 name
-- 3. 가격 - stores table의 price
-- 4. 포인트 - mission table의 point

-- 전략

-- 테이블의 개수가 2개이므로 mission 과 stores 테이블을 조인, 그 후 end_date, point, name, price를 반환

-- end_date의 활용여부는 프론트에서 처리

-- 최종 쿼리
-- 수정 이전 코드
-- select 
-- 	m.end_date,
-- 	s.name as store_name,
-- 	s.price,
-- 	m.point
-- from missions m
-- join stores s on m.store_id = s.id
-- join mission_mapping mm
-- where m.user_id = ?;
-- 수정 후 코드
-- mission_mapping 테이블의 기본키가 없기 때문에, 이 테이블을 기준으로 매핑

select 
	m.end_date,
	s.name as store_name,
	s.price,
	m.point
from mission_mapping mm
join missions m 
    on mm.mission_id = m.id
join stores s 
    on m.store_id = s.id
where m.user_id = ?
order by m.created_at desc
limit 10 offset 0;