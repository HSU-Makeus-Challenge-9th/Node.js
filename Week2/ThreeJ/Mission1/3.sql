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
	user_region ur ON u.id = ur.user_id AND r.id = ur.region_id;

-----

select s.name, s.stype, m.money, m.points, m.end_date
from missions m
	join stores s on m.store_id = s.id
where m.region_id = ?
	and not exists (
		SELECT *
    FROM user_mission um
    WHERE um.mission_id = m.id AND um.user_id = ?
  )
order by m.end_date
limit 5 offset 0;