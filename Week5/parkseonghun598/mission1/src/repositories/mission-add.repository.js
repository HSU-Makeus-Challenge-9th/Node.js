import { pool } from "../db.config.js";

// 가게 유무 확인
export const checkStoreExists = async (storeId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(`SELECT COUNT(*) AS cnt FROM stores WHERE id = ?`, [storeId]);
    return rows[0].cnt > 0;
  } catch (err) {
    throw new Error(`DB 오류(checkStoreExists): ${err}`);
  } finally {
    conn.release();
  }
};

// 미션 추가
export const addMission = async (data) => {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO missions (point, store_id, start_date, end_date, region)
       VALUES (?, ?, ?, ?, ?);`,
      [data.point, data.store_id, data.start_date, data.end_date, data.region]
    );
    return result.insertId;
  } catch (err) {
    throw new Error(`DB 오류(addMission): ${err}`);
  } finally {
    conn.release();
  }
};

// 미션 조회
export const getMission = async (missionId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(`SELECT * FROM missions WHERE id = ?;`, [missionId]);
    return rows[0];
  } catch (err) {
    throw new Error(`DB 오류(getMission): ${err}`);
  } finally {
    conn.release();
  }
};
