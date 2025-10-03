-- 진행가능한 미션 조회 쿼리
SET @selected_town_name = '안암동';
SET @user_id = 123; 
SET @cursor_updated_at = 2024-09-28 10:00:00;
SET @cursor_id = 200;         

SELECT
    m.*,
    s.name AS store_name,
    s.address AS store_address,
    s.town_id,
    am.state
FROM
    mission AS m
JOIN
    store AS s ON m.store_id = s.id
JOIN
    town AS t ON s.town_id = t.id
LEFT JOIN
    activated_mission AS am ON m.id = am.mission_id AND am.user_id = @user_id
WHERE
    t.name = @selected_town_name 
    AND am.state IS NULL
    AND (
        m.updated_at IS NULL OR
        m.updated_at < @cursor_updated_at OR 
        (m.updated_at = @cursor_updated_at AND m.id < @cursor_id)
    )
ORDER BY
    m.created_at DESC,
    id DESC
LIMIT 15;

-- 성공한 미션의 수
SET @user_id = 123; -- 실제 사용자 ID로 대체

SELECT
    COUNT(*) AS completed_mission_count
FROM
    activated_mission
WHERE
    user_id = @user_id AND state = '성공';