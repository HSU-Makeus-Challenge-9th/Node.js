/*
    필요한 정보 : points, status, name, money
*/

select m.points, um.status, s.name, m.money
from user_mission um 
	join missions m on um.mission_id = m.id
	join stores s on m.store_id = s.id
where um.user_id = ?
order by um.accepted_at desc
limit 5 offset 0;

--

/*
피드백
1. 미션 상태별 필터링 기능
  - 사용자가 '진행중인 미션' 또는 '완료된 미션'만 구분하여 볼 수 있게 하기 위해서
2. user_id와 accepted_at에 복합 인덱스
  - where절의 `user_id`와 order by절의 `accepted_at`을 함께 인덱싱하여 성능 최적화. 
3. COUNT 쿼리
  - 전체 미션 개수 함께 조회하기 위해서
*/

-- 1
select m.points, um.status, s.name, m.money
from user_mission um 
	join missions m on um.mission_id = m.id
	join stores s on m.store_id = s.id
where um.user_id = ? and um.status = ? -- "um.status = ?" 추가
order by um.accepted_at desc
limit 5 offset 0;

-- 2
/*
접두사 (Prefix): 인덱스의 종류를 명확하게 나타냅니다.
	idx_: 일반적인 인덱스 (Non-Unique)
	uk_ 또는 uix_: 중복을 허용하지 않는 고유 인덱스 (Unique Index)
	pk_: 기본 키 (Primary Key)
	fk_: 외래 키 (Foreign Key) 제약 조건의 이름 (이 제약 조건을 위해 생성된 인덱스에도 사용될 수 있음)
*/
create index idx_user_mission_user_id_accepted_at on user_mission (user_id, accepted_at desc);
-- user_id는 오름차순, accepted_at은 내림차순으로 해서 인덱스 정렬
-- order by와 조건을 맞추어 좀 더 완벽한 최적화

-- 3
select count(*)
from user_mission um
where um.user_id = ? and um.status = ?;