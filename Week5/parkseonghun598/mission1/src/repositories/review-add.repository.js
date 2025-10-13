import { pool } from "../db.config.js";

// 리뷰 추가하기
export const addReview = async (data) => {
  const conn = await pool.getConnection();
  try {
    const [result] = await conn.query(
      `INSERT INTO store_review 
       (store_id, user_id, title, context, score, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, NOW(), NOW());`,
      [data.store_id, data.user_id, data.title, data.context, data.score]
    );

    return result.insertId; 
  } catch (err) {
    throw new Error(`DB 오류(addReview): ${err}`);
  } finally {
    conn.release();
  }
};

// 리뷰 단일 조회
export const getReview = async (reviewId, storeId, userId) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query(
      `SELECT id, store_id, user_id, title, context, score, created_at, updated_at
       FROM store_review 
       WHERE id = ? AND store_id = ? AND user_id = ?;`,
      [reviewId, storeId, userId]
    );
    return rows[0];
  } catch (err) {
    throw new Error(`DB 오류(getReview): ${err}`);
  } finally {
    conn.release();
  }
};
