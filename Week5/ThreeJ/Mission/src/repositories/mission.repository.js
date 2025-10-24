import { pool } from "../config/db.config.js";

// 가게 존재 여부 검사
export const checkStoreExists = async (storeId) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
          SELECT * 
          FROM stores 
          WHERE id = ?`;
    const [existingStore] = await conn.query(sql, [storeId]);

    return existingStore.length > 0;
  } catch (err) {
    console.error(err);
    throw new Error("가게 존재 여부 확인 중 오류가 발생했습니다.");
  } finally {
    conn.release();
  }
};

export const addMission = async (data) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
        INSERT INTO missions (start_date, end_date, money, points, store_id, region_id) 
        VALUES (NOW(), ?, ?, ?, ?, ?)`;

    const [result] = await conn.query(sql, [
      data.endDate,
      data.money,
      data.points,
      data.storeId,
      data.regionId,
    ]);

    return result.insertId;
  } catch (err) {
    throw new Error(`미션 추가 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};

export const getMissionById = async (missionId) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
        SELECT * 
        FROM missions 
        WHERE id = ?`;

    const [missions] = await conn.query(sql, [missionId]);

    return missions.length > 0 ? missions[0] : null;
  } catch (err) {
    throw new Error(`미션 조회 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};



// 사용자 미션 도전 여부 확인 (이미 진행중인지 확인)
export const checkUMExists = async (userId, missionId) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
      SELECT *
      FROM user_mission
      WHERE user_id = ? AND mission_id = ? AND status = 'CHALLENGING'`;

    const [existingUserMission] = await conn.query(sql, [userId, missionId]);
    
    return existingUserMission.length > 0;
  } catch (err) {
    throw new Error(`도전 상태 확인 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};

// 사용자 미션 도전 추가
export const addUserMission = async (data) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
      INSERT INTO user_mission (user_id, mission_id, status, accepted_at, completed_at)
      VALUES (?, ?, 'CHALLENGING', NOW(), NULL)`;

    await conn.query(sql, [data.userId, data.missionId]);
  } catch (err) {
    throw new Error(`미션 도전 추가 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};

export const getUserMissionById = async (userId, missionId) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
        SELECT * 
        FROM user_mission 
        WHERE user_id = ? AND mission_id = ?`;

    const [userMissions] = await conn.query(sql, [userId, missionId]);

    return userMissions.length > 0 ? userMissions[0] : null;
  } catch (err) {
    throw new Error(`미션 조회 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};