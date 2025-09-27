-- 마이 페이지 화면 쿼리

-- 반환해야 하는 값

-- 1. 사용자 닉네임
-- 2. 이메일
-- 3. 인증 여부
--     1. 인증 시 휴대폰 번호 반환
--     2. 미인증 시 반환 x
-- 4. 포인트

-- 전략

-- 1. 사용자 닉네임 -  users table의 nickname
-- 2. 이메일 - users table의 email
-- 3. 인증 여부 - 약관동의 테이블의 is_service_agreed
--     1. 인증 시 휴대폰 번호 반환
--     2. 미인증 시 반환 x
--     3. →sql문에서 해결하지 말고 인증값과 휴대폰 번호를 모두 반환해서 백엔드 로직 상으로 해결하도록 수정 
-- 4. 포인트 - users table의 point

select 
	u.nickname,
	u.email
	u.phone,
	a.is_serciece_agreed,
	u.point
from users u
join agreements a on a.user_id=u.id
where u.id=?;
