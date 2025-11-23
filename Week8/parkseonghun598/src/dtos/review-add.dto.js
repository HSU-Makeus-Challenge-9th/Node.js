// 요청 
export const bodyToReviewAdd = (body) => {
  return {
    store_id: body.store_id,
    user_id: body.user_id,
    title: body.title,
    context: body.context,
    score: body.score,
  };
};

// 응답 
export const responseFromReviewAdd = (review) => {
  return {
    data:{
      id: review.id,
      store_id: review.store_id,
      user_id: review.user_id,
      title: review.title,
      context: review.context,
      score: review.score,
      created_at: review.created_at,
      updated_at: review.updated_at,
    }
  };
};
