-- 홈 화면 쿼리
-- (현재 선택 된 지역에서 도전이 가능한 미션 목록, 페이징 포함)

-- 반환해야 하는 값.

-- 1. 지역 
-- 2. 현재 완료 미션 수
-- 3. 내 미션 - (여러개 반환해야 함)
--     1. 메뉴 명
--     2. 식당 카테고리
--     3. 남은 일자
--     4. 가격
--     5. 포인트

-- 내 erd에서 해당 값들의 테이블

-- 1. 지역 - missions 의 region
-- 2. 현재 완료 미션 수 - complete_mission의 count
-- 3. 내 미션 - (여러개 반환해야 함) 
--     1. 메뉴 명 - stores table의 menu_name
--     2. 식당 카테고리 stores table의 store_type
--     3. 남은 일자 mission_mapping table의limited_at
--     4. 가격 - stores table의 price
--     5. 포인트 - missions table의 point

-- 전략

-- 일단 1,2번의 값과 3번의 값을 따로 전달하자.  why? ⇒ mymission과 complete mission의 api가 다른 종류일것 같기 때문에

-- - 1,2 번 반환값의 전략
--     - missions와 complete_mission 테이블 매핑해 region과 count 추출
-- - 3번 값의 전략
--     - stores, mission_mapping, missions 테이블  총 3개의 값이 필요하다.
--     - 또한, 여러개의 값을 한번에 전달해 주어야 한다. ⇒ select *?

-- 최종 쿼리문

--1,2 번 값
--join 방식
select 
	m.region,
	cm.count
from missions m
join complete_mission cm
	on cm.user_id = ?
where m.region=?;

--3번의 값
select 
	s.name,
	s.store_type,
	datediff(mm.limited_at, now()) as remaining_day,
	#sql에서 두 날짜 사이의 차수 구함 -> 남은 일수
	s.price,
	m.point,
	concat(lpad(m.point, 10, '0'), lpad(m.id, 10, '0')) as cursor_value
from missions m
join stores s
	on m.store_id = s.id
join mission_mapping mm
	on mm.mission_id=m.id
where m.region = ?
	and mm.user_id=?
	and concat(lpad(m.point, 10, '0'), lpad(m.id, 10, '0'))< :cursor_value
order by m.point desc
limit 5 offset 0;