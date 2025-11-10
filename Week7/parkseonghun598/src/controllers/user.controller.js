import { bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
  try {
    console.log("회원가입을 요청했습니다!");

    const user = await userSignUp(bodyToUser(req.body));
    
    // 통일된 성공 응답
    res.success(user);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};