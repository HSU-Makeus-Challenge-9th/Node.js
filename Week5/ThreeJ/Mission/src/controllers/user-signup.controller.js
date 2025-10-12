import { StatusCodes } from "http-status-codes";
import { bodyToUserSignup } from "../dtos/user-signup.dto.js";
import { userSignUp } from "../services/user-signup.service.js";

export const handleUserSignUp = async (req, res, next) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  const user = await userSignUp(bodyToUserSignup(req.body));
  res.status(StatusCodes.CREATED).json({
    success: true,
    code: "SUCCESS_201",
    message: "회원가입이 완료되었습니다.",
    data: user,
  });
};
