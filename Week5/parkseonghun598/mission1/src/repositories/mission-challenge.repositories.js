import { pool } from "../db.config.js";
//mission-mapping table 사용
// 중복 도전 여부 체크
export const checkUMExists = async (userId, missionId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT COUNT(*) AS cnt 
       FROM mission_mapping 
       WHERE user_id = ? AND mission_id = ?`,
      [userId, missionId]
    );
    return rows[0].cnt > 0;
  } catch (err) {
    throw new Error(`DB 오류(checkUMExists): ${err}`);
  } finally {
    conn.release();
  }
};

// 도전 미션 추감
export const addUserMission = async (data) => {
  const conn = await pool.getConnection();
  try {
    await conn.query(
      `INSERT INTO mission_mapping 
       (user_id, mission_id, status, created_at, updated_at)
       VALUES (?, ?, '진행중', NOW(), NOW());`,
      [data.user_id, data.mission_id]
    );
  } catch (err) {
    throw new Error(`DB 오류(addUserMission): ${err}`);
  } finally {
    conn.release();
  }
};

// 사용자 미션 조회
export const getUserMission = async (userId, missionId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT user_id, mission_id, status, created_at 
       FROM mission_mapping
       WHERE user_id = ? AND mission_id = ?`,
      [userId, missionId]
    );
    return rows[0];
  } catch (err) {
    throw new Error(`DB 오류(getUserMission): ${err}`);
  } finally {
    conn.release();
  }
};
