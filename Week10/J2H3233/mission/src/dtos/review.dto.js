export const createReviewDto = (id, body) => {
    return {
        storeId : Number(id),
        userId : Number(body.userId),
        score : parseFloat(body.score),
        content :  body.content,
    };
};

export const responseCreateReviewDto = (review) => {
    return {
        id: Number(review.id),
        storeId: Number(review.store_id),
        userId: Number(review.user_id),
        score: parseFloat(review.score),
        content: review.content,
    };
};

export const getReviewDto = (userId) => {
    return Number(userId);
};

export const responseGetReviewDto = (reviews, nextCursor) => {
    return reviews.map((review) => ({
        id: Number(review.id),
        storeId: Number(review.store_id),
        userId: Number(review.user_id),
        score: parseFloat(review.score),
        content: review.content,
        createdAt: review.created_at,
        updatedAt: review.updated_at,
        store: {
            name: review.store.name,
            address: review.store.address,
        },
        nextCursor: nextCursor ? Number(nextCursor) : null,
    }));
}