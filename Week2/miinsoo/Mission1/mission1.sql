-- 주니어 미션
SET @last_id = 123;
SET @last_updated_at = '2025-09-20 00:00:01';

SELECT
    * 
FROM
    activated_mission
WHERE
    state = '진행중' AND
    (
        updated_at < @last_updated_at   --끌올 기능을 염두한 커서 페이징
        OR (updated_at = @last_updated_at AND id < @last_id)
    )
ORDER BY
    updated_at DESC,
    id DESC
LIMIT 15;

-- 시니어 미션
SET @user_id = 123;
SET @last_points = 1000;
SET @last_updated_at = '2025-09-20 00:00:01';

SELECT
    am.id,
    am.state,
    am.updated_at,
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
        OR (m.reward_points = @last_points AND am.updated < @last_updated_at)
    )
ORDER BY
    m.reward_points DESC,
    am.updated_at DESC
LIMIT 15;