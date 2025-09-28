-- 주니어 미션
SET @last_id = 123;
SET @last_created_at = '2025-09-20 00:00:01';

SELECT
    * 
FROM
    activated_mission
WHERE
    state = '진행중' AND
    (
        created_at < @last_created_at
        OR (created_at = @last_created_at AND id < @last_id)
    )
ORDER BY
    created_at DESC,
    id DESC
LIMIT 15;

-- 시니어 미션
SET @user_id = 123;
SET @last_points = 1000;
SET @last_created_at = '2025-09-20 00:00:01';

SELECT
    am.id,
    am.state,
    am.created_at,
    am.mission_id,
    am.user_id,
    m.reward_points
FROM
    activated_mission AS am
JOIN
    mission AS m ON am.mission_id = m.id
WHERE
    am.user_id = @user_id AND
    (am.state = '진행중') AND
    (
        m.reward_points < @last_points
        OR (m.reward_points = @last_points AND am.created_at < @last_created_at)
    )
ORDER BY
    m.reward_points DESC,
    am.created_at DESC
LIMIT 15;