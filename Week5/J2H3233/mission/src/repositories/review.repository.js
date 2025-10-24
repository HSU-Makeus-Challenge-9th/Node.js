import { pool } from '../config/db.config.js';
import { CustomError } from '../error/customError.js';

export const insertReview = async (data) => {
    try {
        const [result] = await pool.execute(
            'INSERT INTO review (store_id, user_id, score, content) VALUES (?, ?, ?, ?);',
            [data.storeId, data.userId, data.score, data.content]
        );
        return result.insertId;
    } catch (error) {
        throw new CustomError(`리뷰 생성에 실패했습니다: ${error.message}`);
    }
};

export const getReviewsById = async (reviewId) => {
    try {
        const [result] = await pool.execute(
            'SELECT * FROM review WHERE id = ?;',
            [reviewId]
        );
        return result[0];
    } catch (error) {
        throw new CustomError(`리뷰 조회에 실패했습니다: ${error.message}`);
    }
};
