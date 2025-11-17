import { responseFromUserSignup, } from "../dtos/user.dto.js";
import { addUser, getUserById, checkEmailExists } from "../repositories/user.repository.js";
import { DuplicateError } from "../res/error/custom-error.js";

export const userSignUp = async (data) => {
    // 이메일 중복 검사
    const isEmailExists = await checkEmailExists(data.email);
    if (isEmailExists) {
        throw new DuplicateError('email', '이미 사용 중인 이메일입니다.');
    }
    
    // 사용자 추가
    const userId = await addUser(data);
    const user = await getUserById(userId);

    return responseFromUserSignup(user);
};