import { createStoreDto } from '../dtos/store.dto.js';   
import { createStore } from '../services/store.service.js';
import { CustomError, ErrorCodes } from '../error/customError.js';
import { SuccessCodes } from '../error/responseCodes.js';

// 특정 지역에 가게 추가하기
export const handlerCreateStore = async (req, res, next) => {
  /*
    #swagger.tags = ['Store']
    #swagger.summary = '특정 지역에 가게 추가하기'
    #swagger.description = '특정 지역에 새로운 가게를 추가합니다.'
    #swagger.parameters['regionCode'] = {
      in: 'path',
      description: '지역 코드',
      required: true,
      type: 'string'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              name: { type: 'string', description: '가게 이름' },
              address: { type: 'string', description: '가게 주소' },
              category: { type: 'string', description: '카테고리 이름' }
            },
            required: ['name', 'address', 'category']
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: '가게 추가 성공',
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              success: { type: 'boolean' },
              code: { type: 'string' },
              message: { type: 'string' },
              data: { type: 'object' }
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
              message: { type: 'string', example: '유효하지 않은 지역 코드입니다.' }
            }
          }
        }
      }
    }
    #swagger.responses[404] = {
      description: '존재하지 않는 지역 코드 또는 카테고리',
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              code: { type: 'string', example: 'REGION_NOT_FOUND', description: 'REGION_NOT_FOUND 또는 CATEGORY_NOT_FOUND' },
              message: { type: 'string', example: '존재하지 않는 지역 코드입니다.' }
            }
          }
        }
      }
    }
  */
  const { regionCode } = req.params;
  const data = req.body;
  
  try {
    if (!regionCode || typeof regionCode !== 'string' || regionCode.trim() === '') {
      throw new CustomError(400, ErrorCodes.INVALID_INPUT, '유효하지 않은 지역 코드입니다.');
    }
    const store = await createStore(createStoreDto(data, regionCode));

    res.jsonSuccess(
      201,
      SuccessCodes.Created,
      '가게를 성공적으로 추가하였습니다.',
      store
  );
  } catch (error) {
    next(error);
  }
};

