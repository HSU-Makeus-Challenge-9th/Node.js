export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const httpStatus = err.statusCode || 500;

    res.status(httpStatus).json({
        isSuccess: false,
        code: httpStatus,
        message: err.message || '서버 오류',
    });
};
