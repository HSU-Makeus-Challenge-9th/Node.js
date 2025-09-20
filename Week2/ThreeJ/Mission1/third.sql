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