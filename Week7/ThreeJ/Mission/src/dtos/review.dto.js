// 가게에 리뷰 추가
export const bodyToReviewAdd = (body) => {
    return {
        userId: parseInt(body.userId),
        missionId: parseInt(body.missionId),
        content: body.content,
        score: parseFloat(body.score)
    };
};
export const responseFromReviewAdd = (review, missionId) => {
    return {
        reviewId: Number(review.id), // BigInt를 Number로 변환
        content: review.content,
        score: review.score,
        writerId: Number(review.writerId), // BigInt를 Number로 변환
        storeId: Number(review.storeId), // BigInt를 Number로 변환
        missionId: Number(missionId), // Service에서 전달받은 missionId
    };
};

// 리뷰 목록 조회 응답
export const responseFromReviewList = (reviews, totalCount, page, limit) => {
    return {
        reviews: reviews.map(review => ({
            reviewId: Number(review.id),
            store: {
                storeId: Number(review.store.id),
                storeName: review.store.name,
            },
            content: review.content,
            score: review.score,
            createdAt: review.createdAt,
        })),
        pageInfo: {
            currentPage: page,
            pageSize: limit,
            totalElements: totalCount,
            totalPages: Math.ceil(totalCount / limit),
        }
    };
};

// 가게 리뷰 목록 조회 응답 (커서 페이지네이션)
export const responseFromStoreReviewList = (reviews, limit) => {
    const hasNext = reviews.length > limit;
    const data = hasNext ? reviews.slice(0, limit) : reviews;
    const nextCursor = hasNext ? String(data[data.length - 1].id) : null;

    return {
        reviews: data.map(review => ({
            reviewId: Number(review.id),
            writerId: Number(review.writer.id),
            writerName: review.writer.name, // 닉네임이지만, 지금은 닉네임 추가가 없어서 이름으로 대체
            content: review.content,
            score: review.score,
            createdAt: review.createdAt,
        })),
        cursor: {
            nextCursor: nextCursor,
            hasNext: hasNext,
        }
    };
};
