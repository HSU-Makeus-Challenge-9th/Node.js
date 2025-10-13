import { pool } from "../db.config.js";

// 가게 추가
export const addStore = async (data) => {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO stores 
      (name, address, stars, reviews, store_type, price, menu_name)
      VALUES (?, ?, ?, ?, ?, ?, ?);`,
      [
        data.name,
        data.address,
        data.stars || 3, // 별점의 기본값은 3
        data.reviews || 0,
        data.store_type,
        data.price || 0,
        data.menu_name || null,
      ]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(`DB 오류(addStore): ${err}`);
  } finally {
    conn.release();
  }
};

// 가게 단일 조회
export const getStoreById = async (storeId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(`SELECT * FROM stores WHERE id = ?;`, [storeId]);
    return rows[0];
  } catch (err) {
    throw new Error(`DB 오류(getStoreById): ${err}`);
  } finally {
    conn.release();
  }
};
