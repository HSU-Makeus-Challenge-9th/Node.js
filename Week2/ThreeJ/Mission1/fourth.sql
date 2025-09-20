/*
    필요한 정보 : nickname, email, phone, is_phone_verified, points
*/

select nickname, email, phone, is_phone_verified, points
from users
where id = ?;