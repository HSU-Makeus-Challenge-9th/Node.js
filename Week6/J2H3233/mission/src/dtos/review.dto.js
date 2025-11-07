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
        storeId: parseInt(review.store_id),
        userId: parseInt(review.user_id),
        score: parseFloat(review.score),
        content: review.content,
    };
};

export const getReviewDto = (userId) => {
    return parseInt(userId);
};

export const responseGetReviewDto = (reviews) => {
    return reviews.map((review) => ({
        id: parseInt(review.id),
        storeId: parseInt(review.store_id),
        userId: parseInt(review.user_id),
        score: parseFloat(review.score),
        content: review.content,
        createdAt: review.created_at,
    }));
}