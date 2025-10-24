import { pool } from "../config/db.config.js";

export const addStore = async (data) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
        INSERT INTO stores (name, address, stype, total, count, owner_id) 
        VALUES (?, ?, ?, 0, 0, ?)`;

    const [result] = await conn.query(sql, [
      data.name,
      data.address,
      data.sType,
      data.ownerId,
    ]);

    return result.insertId;
  } catch (err) {
    throw new Error(`가게 추가 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};

export const getStoreById = async (storeId) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
        SELECT * 
        FROM stores 
        WHERE id = ?`;

    const [stores] = await conn.query(sql, [storeId]);

    return stores.length > 0 ? stores[0] : null;
  } catch (err) {
    throw new Error(`가게 조회 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};
