export const createReviewDto = (id, body) => {
    return {
        storeId : parseInt(id),
        userId : parseInt(body.userId),
        score : parseFloat(body.score),
        content :  body.content,
    };
};

export const responseCreateReviewDto = (review) => {
    return {
        id: parseInt(review.id),
        storeId: parseInt(review.storeId),
        userId: parseInt(review.userId),
        score: parseFloat(review.score),
        content: review.content,
    };
};
