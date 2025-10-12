export const bodyToReviewAdd = (body) => {
  return {
    userId: parseInt(body.userId),
    missionId: parseInt(body.missionId),
    content: body.content,
    score: parseFloat(body.score),
  };
};

export const responseFromReviewAdd = (review) => {
  return {
    reviewId: review.id,
    content: review.content,
    score: review.score,
    missionId: review.mission_id,
    writerId: review.writer_id,
    storeId: review.store_id,
  };
};
