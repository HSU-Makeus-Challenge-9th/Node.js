import { pool } from "../config/db.config.js";

// 리뷰 추가
export const addReview = async (data) => {
  const conn = await pool.getConnection();

  try {
    const [missions] = await conn.query(
      `SELECT store_id FROM missions WHERE id = ?`,
      [data.missionId]
    );

    if (missions.length === 0) {
      throw new Error("존재하지 않는 미션입니다.");
    }

    const storeId = missions[0].store_id;

    const sql = `
        INSERT INTO store_reviews (content, score, created_at, updated_at, writer_id, store_id) 
        VALUES (?, ?, NOW(), NOW(), ?, ?)`;

    const [result] = await conn.query(sql, [
      data.content,
      data.score,
      data.userId,
      storeId,
    ]);

    return result.insertId;
  } catch (err) {
    throw new Error(`리뷰 추가 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};

// 리뷰 조회
export const getReviewById = async (reviewId) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
        SELECT * 
        FROM store_reviews 
        WHERE id = ?`;

    const [reviews] = await conn.query(sql, [reviewId]);

    return reviews.length > 0 ? reviews[0] : null;
  } catch (err) {
    throw new Error(`리뷰 조회 중 오류가 발생했습니다: ${err.message}`);
  } finally {
    conn.release();
  }
};
