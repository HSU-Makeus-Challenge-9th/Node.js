import { createReview, getReviewList } from "../services/review.service.js";
import { createReviewDto, getReviewDto } from "../dtos/review.dto.js";
import { CustomError, ErrorCodes } from '../error/customError.js';
import { SuccessCodes } from '../error/responseCodes.js';

export const handlerCreateReview = async (req, res, next) => {
    /*
      #swagger.tags = ['Review']
      #swagger.summary = '가게에 리뷰 추가하기'
      #swagger.description = '특정 가게에 리뷰를 작성합니다.'
      #swagger.parameters['storeId'] = {
        in: 'path',
        description: '가게 ID',
        required: true,
        type: 'integer'
      }
      #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                userId: { type: 'integer', description: '사용자 ID' },
                score: { type: 'number', description: '평점 (1-5)' },
                content: { type: 'string', description: '리뷰 내용' }
              },
              required: ['userId', 'score', 'content']
            }
          }
        }
      }
      #swagger.responses[201] = {
        description: '리뷰 작성 성공'
      }
      #swagger.responses[400] = {
        description: '잘못된 요청',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                code: { type: 'string', example: 'INVALID_INPUT' },
                message: { type: 'string', example: '유효하지 않은 가게 ID입니다.' }
              }
            }
          }
        }
      }
      #swagger.responses[404] = {
        description: '존재하지 않는 가게',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                code: { type: 'string', example: 'STORE_NOT_FOUND' },
                message: { type: 'string', example: '존재하지 않는 가게입니다.' }
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
      #swagger.description = '특정 사용자가 작성한 리뷰 목록을 조회합니다.'
      #swagger.parameters['userId'] = {
        in: 'path',
        description: '사용자 ID',
        required: true,
        type: 'integer'
      }
      #swagger.responses[200] = {
        description: '리뷰 목록 조회 성공',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean' },
                code: { type: 'string' },
                message: { type: 'string' },
                data: {
                  type: 'array',
                  items: { type: 'object' }
                }
              }
            }
          }
        }
      }
      #swagger.responses[400] = {
        description: '잘못된 요청',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                code: { type: 'string', example: 'INVALID_INPUT' },
                message: { type: 'string', example: '유효하지 않은 사용자 ID입니다.' }
              }
            }
          }
        }
      }
      #swagger.responses[404] = {
        description: '존재하지 않는 사용자',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                code: { type: 'string', example: 'USER_NOT_FOUND' },
                message: { type: 'string', example: '존재하지 않는 사용자입니다.' }
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