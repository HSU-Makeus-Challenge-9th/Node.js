import {pool} from '../config/db.config.js';
import { CustomError } from '../error/customError.js';

export const getMissionById = async (missionId) => {
    try {
        const [rows] = await pool.query(
        `SELECT * FROM mission WHERE id = ?;`,
        [missionId]
    );
    return rows[0];
    } catch (error) {
        throw new CustomError(`미션 조회에 실패했습니다: ${error.message}`);
    }
};

export const insertMission = async (data) => {
    try {
        const [result] = await pool.execute(
            `INSERT INTO mission (store_id, amount, deadline, point) VALUES (?, ?, ?, ?);`,
            [storeId, data.amount, data.deadline, data.point]
        );
        return result.insertId;
    } catch (error) {
        throw new CustomError(`미션 생성에 실패했습니다: ${error.message}`);
    }
};

export const insertUserMission = async (missionId, data, status, verificationCode) => {
    try {
        const [result] = await pool.execute(
            `INSERT INTO user_mission (mission_id, user_id, status, verification_code) VALUES (?, ?, ?, ?);`,
            [missionId, data.userId, status, verificationCode]
        );
        return result.insertId;
    } catch (error) {
        throw new CustomError(`사용자 미션 추가에 실패했습니다: ${error.message}`);
    }
};

export const getUserMissionById = async (userMissionId) => {
    try {
        const [rows] = await pool.execute(
            `SELECT * FROM user_mission WHERE id = ?;`,
            [userMissionId]
        );
        return rows[0];
    } catch (error) {
        throw new CustomError(`사용자 미션 조회에 실패했습니다: ${error.message}`);
    }
};

export const existUserMission = async (data) => {
    try {
        const [rows] = await pool.execute(
            `SELECT * FROM user_mission WHERE mission_id = ? AND user_id = ?;`,
            [data.missionId, data.userId]
        );
        return rows.length > 0;
    } catch (error) {
        throw new CustomError(`사용자 미션 존재 여부 확인에 실패했습니다: ${error.message}`);
    }
};
