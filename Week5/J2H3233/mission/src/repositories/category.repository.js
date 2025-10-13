import { pool } from '../config/db.config.js';
import { CustomError } from '../error/customError.js';

export const findByCategory = async (category) => {
    try {
        const [rows] = await pool.execute(
        `SELECT id FROM category WHERE category = ?;`,
        [category]
    );
    return rows[0];
    } catch (error) {
        throw new CustomError('카테고리를 조회하는 중 오류가 발생하였습니다.');
    }
};


