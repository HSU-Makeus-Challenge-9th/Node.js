import { CustomError, ErrorCodes } from '../error/customError.js';
import { SuccessCodes } from '../error/responseCodes.js';
import { LocalregisterService } from "../services/auth.service.js";
import { LocalLoginService } from "../services/auth.service.js";
import { refreshTokenService } from "../services/auth.service.js";
import { clearRefreshToken, generateAccessToken, generateRefreshToken} from "../services/auth.service.js";
import { GoogleLoginService } from '../services/auth.service.js';

export const hanlderLocalRegister = async (req, res, next ) => {
    try {
        const { 
            email,
            name, 
            password 
        } = req.body;

        const user = await LocalregisterService(
            email,
            name,
            password
        );
        res.jsonSuccess(
            201,
            SuccessCodes.Created,
            '사용자 등록이 완료되었습니다.',
            user
        );

    } catch (error) {
        next(error);
    }
}

export const handlerLocalLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { accessToken, refreshToken } = await LocalLoginService(email, password);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.jsonSuccess(
            200,
            SuccessCodes.OK,
            '로그인에 성공하였습니다.',
            { accessToken, refreshToken }
        );
    } catch (error) {
        next(error);
    }
}

export const hanlderTokenRefresh = async (req, res, next) => {
  try {
    const clientRefreshToken = req.cookies.refreshToken; 
    
    if (!clientRefreshToken) {
      throw new CustomError(401, ErrorCodes.UNAUTHORIZED, 'Refresh token이 제공되지 않았습니다.');
    }

    const { accessToken, refreshToken } = await refreshTokenService(clientRefreshToken);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.jsonSuccess(
        200,
        SuccessCodes.OK,
        '토큰이 재발급되었습니다.',
        { accessToken }
    );
  } catch (error) {
    next(error);
  } 
}

export const handlerLogout = async (req, res, next) => {
  try {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    
    await clearRefreshToken(req.user.id ,null); 

    res.jsonSuccess(
        200,
        SuccessCodes.OK,
        '로그아웃에 성공하였습니다.',
        {}
    );
  } catch (error) {
    next(error);
  } 
}

export const handlerGoogleCallback = async (req, res, next) => {
    try {
        const user = req.user;
        
        const { accessToken, refreshToken } = await GoogleLoginService(user.email);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        
        return res.jsonSuccess(
            200,
            SuccessCodes.OK,
            '구글 로그인에 성공하였습니다.',
            { accessToken, refreshToken }
        );
    } catch (error) {
        next(error);
    }
}
