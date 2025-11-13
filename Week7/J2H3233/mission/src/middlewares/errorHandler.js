export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const httpStatus = err.statusCode || 500;

    res.status(httpStatus).json({
        isSuccess: false,
        code: err.code || 'INTERNAL_SERVER_ERROR',
        message: err.message || '서버 오류',
    });
};
