import { SuccessCodes } from '../error/responseCodes.js';

export const responseHandler = (req, res, next) => {
  res.jsonSuccess = (statusCode, code, message, data) => {
    res.status(statusCode).json({
      isSuccess: true,
      code: code,
      message: message,
      data: data,
    });
  };

  next();
};
