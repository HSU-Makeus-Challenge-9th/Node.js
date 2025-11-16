import { StatusCodes } from "http-status-codes";
import { bodyToUserSignup, } from "../dtos/user.dto.js";
import { userSignUp, } from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
    try {
        console.log("회원가입을 요청했습니다!");
        console.log("body:", req.body); // 테스트용

        const user = await userSignUp(bodyToUserSignup(req.body));
        
        res
            .status(StatusCodes.CREATED)
            .json({
                success: true, 
                code: "SUCCESS_201", 
                message: "회원가입이 완료되었습니다.", 
                data: user
            });
    } catch (error) {
        next(error);  // 에러 미들웨어로 전달
    }
};
