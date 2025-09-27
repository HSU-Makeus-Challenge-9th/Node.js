/*
    필요한 정보
    - points, success_count, has_bonus, name(지역이름)
    - name(가게이름), stype, money, points, end_date
*/

select u.points, r.name, ur.success_count, ur.has_bonus
from
	(select id, points
		from users
		where id = ?) as u
cross join
	(select id, name
		from regions
		where id = ?) as r
left join
	user_region ur on u.id = ur.user_id and r.id = ur.region_id;

---

select s.name, s.stype, m.money, m.points, m.end_date
from missions m
	join stores s on m.store_id = s.id
where m.region_id = ?
	and not exists (
		select *
    	from user_mission um
    	where um.mission_id = m.id and um.user_id = ?
  )
order by m.end_date
limit 5 offset 0;

/*
피드백
1. CROSS JOIN을 일반 JOIN으로 변경
  - 데이터가 많아지면 성능 부담이 클 수 있어서
2. 기간이 종료되지 않은 미션만 조회하도록 조건 추가
  - 이미 종료된 미션을 사용자에게 보여주는 것은 불필요, `WHERE m.end_date > NOW()` 조건을 추가
3. mission_id, region_id, end_date에 복합 인덱스를 설정하면 대용량 데이터에서도 빠른 조회
  - where 절의 `mission_id`, `region_id`와 order by절의 `end_date`을 함께 인덱싱하여 성능 최적화. 
*/

-- 1
/*
- 답변

피드백에 대해 제 쿼리를 조금 더 상세히 설명해 드리고자 합니다.

제가 작성한 쿼리의 목표는, 사용자가 특정 지역에서 미션을 한 번도 성공하지 않은 경우에도 관련 정보를 올바르게 조회하는 것입니다. 
첨부해 드린 사진의 테이블 구조를 보시면 user_region 테이블은 사용자가 특정 지역에서 미션을 성공했을 때"만" 데이터가 생성됩니다.
하나라도 미션을 성공하지 않는다면 데이터가 생성되지 않습니다.

만약 세 테이블을 일반적인 INNER JOIN으로 연결하면, user_region에 데이터가 없는 사용자는 결과에서 아예 누락되는 문제가 발생합니다. 
그래서 이러한 경우를 올바르게 처리하기 위해 LEFT JOIN의 사용이 필수적이었습니다.

이때 LEFT JOIN의 기준이 될 '사용자'와 '지역' 정보를 먼저 조합해야 했는데, 
users 테이블과 regions 테이블은 직접적으로 연결된 참조 필드가 없어 일반 JOIN을 사용할 수 없었습니다. 
따라서 불가피하게 CROSS JOIN을 사용하여 두 테이블을 조합했습니다. 
다만, WHERE 절을 통해 각 테이블에서 하나의 결과만 나오도록 했기 때문에, 실제 조인은 1x1로 이루어져 CROSS JOIN의 성능 부담은 생기지 않는다고 생각을 했습니다!

피드백 주셔서 감사합니다.
*/

-- 2
select s.name, s.stype, m.money, m.points, m.end_date
from missions m
	join stores s on m.store_id = s.id
where m.end_date > NOW() and m.region_id = ? -- "m.end_date > NOW()" 추가
	and not exists (
		select *
    	from user_mission um
    	where um.mission_id = m.id and um.user_id = ?
  )
order by m.end_date
limit 5 offset 0;

-- 3
create index idx_user_mission_mission_id_user_id on user_mission (mission_id, region_id, end_date);