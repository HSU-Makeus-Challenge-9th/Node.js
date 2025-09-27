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