import { pool } from '../config/db.config.js';
import { CustomError } from '../error/customError.js';

export const findByRegionCode = async (regionCode) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM region WHERE region_code = ?', [regionCode]);
        return rows[0];
    } catch (error) {
        throw new CustomError(500,'지역 코드 조회중 오류가 발생하였습니다.');
    }
};

export const findById = async (id) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM regions WHERE id = ?', [id]);
        return rows[0];
    } catch (error) {
        throw new CustomError(500,'지역을 조회하는 중 오류가 발생하였습니다.');
    }
};
