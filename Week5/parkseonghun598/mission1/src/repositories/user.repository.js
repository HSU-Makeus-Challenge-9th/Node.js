import { pool } from "../db.config.js";

export const addUser = async (data) => {
  const conn = await pool.getConnection();

  try {
    const [confirm] = await conn.query(
      `SELECT EXISTS(SELECT 1 FROM users WHERE email = ?) AS isExistEmail;`,
      [data.email]
    );

    if (confirm[0].isExistEmail) {
      return null;
    }

    const [result] = await pool.query(
      `INSERT INTO users 
       (name, gender, birth, address, password, email, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW());`,      
      [
        data.name,
        data.gender,
        data.birth,
        data.address,
        data.password, 
        data.email,    
      ]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};
//약관 동의 저장
export const setAgreements = async (userId) => {
  const conn = await pool.getConnection();
  try {
    await conn.query(
      `INSERT INTO agreements 
       (user_id, is_service_agreed, is_personal_agreed, is_location_agreed, is_alram_agreed, if_fourteen_agreed, is_created, is_updated)
       VALUES (?, true, true, true, true, true, NOW(), NOW());`, 
      [userId]
    );
  } catch (err) {
    throw new Error(`DB 오류(setAgreements): ${err}`);
  } finally {
    conn.release();
  }
};
//선호 카테고리 매핑
export const setPreferences = async (userId, preferences) => {
  const conn = await pool.getConnection();
  try {
    //Bulk Insert 방식으로 다수 카테고리 등록
    const values = preferences.map((categoryId) => [userId, categoryId]);
    await conn.query(
      `INSERT INTO mapping (user_id, category_id) VALUES ?;`, 
      [values]
    );
  } catch (err) {
    throw new Error(`DB 오류(setPreferences): ${err}`);
  } finally {
    conn.release();
  }
};
// 사용자 정보 얻기
export const getUser = async (userId) => {
  const conn = await pool.getConnection();

  try {
    const [user] = await conn.query(`SELECT * FROM users WHERE id = ?;`, userId);

    console.log(user);

    if (user.length == 0) {
      return null;
    }

    return user;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

// 사용자 선호 카테고리 조회
export const getUserPreferencesByUserId = async (userId) => {
  const conn = await pool.getConnection();

  try {
    const [preferences] = await conn.query(
      `
      SELECT 
        m.id AS mapping_id,
        m.category_id,
        p.name AS category_name
      FROM mapping m
      JOIN perfer_categories p 
        ON m.category_id = p.id
      WHERE m.user_id = ?
      ORDER BY m.category_id ASC;
      `,
      [userId]
    );

    return preferences;
  } catch (err) {
    throw new Error(`DB 오류(getUserPreferencesByUserId): ${err}`);
  } finally {
    conn.release();
  }
};
