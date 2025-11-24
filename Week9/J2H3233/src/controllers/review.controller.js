import { createReview, getReviewList } from "../services/review.service.js";
import { createReviewDto, getReviewDto } from "../dtos/review.dto.js";
import { CustomError, ErrorCodes } from '../error/customError.js';
import { SuccessCodes } from '../error/responseCodes.js';

export const handlerCreateReview = async (req, res, next) => {
  /*
  #swagger.tags = ['Review']
  #swagger.summary = '가게에 리뷰 추가하기'
  #swagger.parameters['storeId'] = {
    in: 'path',
    description: '가게 ID',
    required: true,
    type: 'integer'
  }
  #swagger.parameters['review'] = {
    in: 'body',
    description: '리뷰 정보',
    required: true,
    schema: {
      type: 'object',
      required: ['userId', 'score', 'content'],
      properties: {
        userId: {
          type: 'integer',
          description: '사용자 ID',
          example: 1
        },
        score: {
          type: 'number',
          description: '평점 (1-5)',
          example: 4.5
        },
        content: {
          type: 'string',
          description: '리뷰 내용',
          example: '맛있고 친절해요!'
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: '리뷰 생성 성공',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        data: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            storeId: { type: 'integer', example: 1 },
            userId: { type: 'integer', example: 1 },
            score: { type: 'number', example: 4.5 },
            content: { type: 'string', example: '맛있고 친절해요!' }
          }
        },
        message: { type: 'string', example: '리뷰 작성에 성공했습니다' }
      }
    }
  }
  #swagger.responses[400] = {
    description: '잘못된 요청',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: false },
        error: {
          type: 'object',
          properties: {
            code: { type: 'string', example: 'INVALID_INPUT' },
            message: { type: 'string', example: '유효하지 않은 가게 ID입니다.' }
          }
        }
      }
    }
  }
  */
    const { storeId } = req.params;
    const data = req.body;

    
    try {

        if (!storeId || isNaN(parseInt(storeId))) {
        throw new CustomError(
            400,
            ErrorCodes.INVALID_INPUT,
            '유효하지 않은 가게 ID입니다.'
        );
        }
        const review = await createReview(createReviewDto(storeId, data));
        
        res.jsonSuccess(
            201,
            SuccessCodes.Created,
            '리뷰 작성에 성공했습니다',
            review, 
        )
    } catch (error) {
        next(error);
    }
}

export const handlerGetReviewList = async (req, res, next) => {
  /*
  #swagger.tags = ['Review']
  #swagger.summary = '사용자 작성 리뷰 목록 조회'
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '사용자 ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[200] = {
    description: '리뷰 목록 조회 성공',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer', example: 1 },
              storeId: { type: 'integer', example: 1 },
              userId: { type: 'integer', example: 1 },
              score: { type: 'number', example: 4.5 },
              content: { type: 'string', example: '맛있고 친절해요!' },
              createdAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
              store: {
                type: 'object',
                properties: {
                  name: { type: 'string', example: '맛있는 치킨집' },
                  address: { type: 'string', example: '서울시 강남구' }
                }
              }
            }
          }
        },
        message: { type: 'string', example: '리뷰 목록 조회에 성공했습니다' }
      }
    }
  }
  #swagger.responses[400] = {
    description: '잘못된 요청',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: false },
        error: {
          type: 'object',
          properties: {
            code: { type: 'string', example: 'INVALID_INPUT' },
            message: { type: 'string', example: '유효하지 않은 사용자 ID입니다.' }
          }
        }
      }
    }
  }
  */
    const userId  = req.params.userId;
    try {
        if (!userId || isNaN(parseInt(userId))) {
            throw new CustomError(
                400,
                ErrorCodes.INVALID_INPUT,
                '유효하지 않은 사용자 ID입니다.'
            );
        }
        const reviews = await getReviewList(getReviewDto(userId));
        res.jsonSuccess(
            200,
            SuccessCodes.OK,
            '리뷰 목록 조회에 성공했습니다', 
            reviews, 
        );
    } catch (error) {
        next(error);
    }
};