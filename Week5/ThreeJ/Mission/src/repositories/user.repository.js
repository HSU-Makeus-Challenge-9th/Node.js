import { pool } from "../config/db.config.js";

// 이메일 중복 검사
export const checkEmailExists = async (email) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
          SELECT id 
          FROM users 
          WHERE email = ?;`;
    const [existingEmail] = await conn.query(sql, [email]);

    return existingEmail.length > 0;
  } catch (err) {
    console.error(err);
    throw new Error("이메일 중복 확인 중 오류가 발생했습니다.");
  } finally {
    conn.release();
  }
};

const insertUser = async (conn, data) => {
  const sql = `
      INSERT INTO users (name, gender, birth, address, detail_address, email, phone, points, provider, provider_id, role, created_at, updated_at, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?, NOW(), NOW(), 'ACTIVE');
    `;
  const [result] = await conn.query(sql, [
    data.name,
    data.gender,
    data.birth,
    data.address,
    data.detailAddress,
    data.email,
    data.phone,
    data.provider,
    data.providerId,
    data.role,
  ]);
  return result.insertId;
};
const insertTerms = async (conn, userId) => {
  const sql = `
      INSERT INTO terms (is_over_fourteen, agreed_to_terms_of_service, agreed_to_privacy_policy, agreed_to_location_services, agreed_to_marketing_emails, created_at, updated_at, user_id) 
      VALUES (true, true, true, true, true, NOW(), NOW(), ?);
    `;
  await conn.query(sql, [userId]);
};
const insertUserPreferences = async (conn, userId, preferences) => {
  if (!preferences || preferences.length === 0) {
    return;
  }

  // 선호 카테고리 추가 (Bulk Insert 방식)

  // 1. Bulk Insert를 위해 데이터를 2차원 배열 형태로 가공합니다.
  // 예: [1, 5] -> [[userId, 1], [userId, 5]]
  const values = preferences.map((categoryId) => [userId, categoryId]);

  // 2. INSERT ... VALUES ? 구문을 사용하여 한 번의 쿼리로 모든 데이터를 삽입합니다.
  const sql = `INSERT INTO user_prefer (user_id, category_id) VALUES ?`;

  // [values] 처럼 배열을 한 번 더 감싸서 전달해야 합니다.
  await conn.query(sql, [values]);
};

// User 데이터 삽입
export const addUser = async (data) => {
  const conn = await pool.getConnection();

  try {
    await conn.beginTransaction(); // 트랜잭션 시작

    // 1. 사용자 정보 추가
    const userId = await insertUser(conn, data);

    // 2. 약관 동의 정보 추가
    await insertTerms(conn, userId);

    // 3. 선호 카테고리 정보 추가
    await insertUserPreferences(conn, userId, data.preferences);

    await conn.commit(); // 모든 작업 성공 시 커밋

    return userId;
  } catch (err) {
    await conn.rollback(); // 오류 발생 시 롤백
    console.error(err);
    throw new Error("사용자 등록 중 오류가 발생했습니다.");
  } finally {
    conn.release();
  }
};

// 사용자 정보 얻기
export const getUserById = async (userId) => {
  const conn = await pool.getConnection();

  try {
    const [user] = await conn.query(`SELECT * FROM users WHERE id = ?;`, [
      userId,
    ]);

    return user.length > 0 ? user[0] : null;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

// 사용자 선호 카테고리 반환
export const getUserPreferencesByUserId = async (userId) => {
  const conn = await pool.getConnection();

  try {
    const sql = `
      SELECT pc.name
      FROM user_prefer up
      JOIN prefer_categories pc ON up.category_id = pc.id
      WHERE up.user_id = ?
      ORDER BY pc.name ASC;
    `;

    const [preferences] = await conn.query(sql, [userId]);

    return preferences;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};