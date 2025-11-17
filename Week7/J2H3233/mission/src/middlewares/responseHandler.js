export const responseHandler = (req, res, next) => {
    res.jsonSuccess = ( httpStatus = 200, code,message = "요청에 성공했습니다.", data) => {

        return res.status(httpStatus).json({
            code: code || 'SUCCESS',
            message: message,
            result: data,
        });
    };
    next();
};
