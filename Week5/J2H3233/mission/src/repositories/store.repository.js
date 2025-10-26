import { pool } from '../config/db.config.js';
import { CustomError } from '../error/customError.js';

export const insertStore = async (data, region, category) => {
    try {
        const [results] = await pool.execute(
            `INSERT INTO store (region_id, store_name, address_datail, category_id) 
             VALUES (?, ?, ?, ?);`,
            [region.id, data.name, data.address, category.id]
        );
        return results.insertId;
    } catch (error) {
        throw new CustomError(500,'가게 생성에 실패했습니다.');
    }
};

export const getStoreById = async (storeId) => {
    try {
        const [results] = await pool.execute(
            `SELECT * FROM store WHERE id = ?;`,
            [storeId]
        );
        return results[0];
    } catch (error) {
        throw new CustomError(500,'가게 조회에 실패했습니다.');
    }
};


