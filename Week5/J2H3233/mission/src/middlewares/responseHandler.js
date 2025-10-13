export const responseHandler = (req, res, next) => {
    res.jsonSuccess = (data, message = "요청에 성공했습니다.", code = 200) => {
        const httpStatus = res.statusCode || 200;

        return res.status(httpStatus).json({
            isSuccess: true,
            code: code,
            message: message,
            result: data,
        });
    };
    next();
};
