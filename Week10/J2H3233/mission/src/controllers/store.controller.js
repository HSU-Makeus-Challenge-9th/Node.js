import { createStoreDto } from '../dtos/store.dto.js';   
import { createStore } from '../services/store.service.js';
import { CustomError, ErrorCodes } from '../error/customError.js';
import { SuccessCodes } from '../error/responseCodes.js';

// 특정 지역에 가게 추가하기
export const handlerCreateStore = async (req, res, next) => {
  /*
  #swagger.tags = ['Store']
  #swagger.summary = '특정 지역에 가게 추가하기'
  #swagger.parameters['regionCode'] = {
    in: 'path',
    description: '지역 코드',
    required: true,
    type: 'string'
  }
  #swagger.parameters['store'] = {
    in: 'body',
    description: '가게 정보',
    required: true,
    schema: {
      type: 'object',
      required: ['name', 'address', 'category'],
      properties: {
        name: {
          type: 'string',
          description: '가게 이름',
          example: '맛있는 치킨집'
        },
        address: {
          type: 'string',
          description: '가게 주소',
          example: '서울시 강남구 역삼동 123-45'
        },
        category: {
          type: 'string',
          description: '가게 카테고리',
          example: '치킨'
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: '가게 생성 성공',
    schema: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
          example: true
        },
        data: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: '가게 ID',
              example: 1
            },
            name: {
              type: 'string',
              description: '가게 이름',
              example: '맛있는 치킨집'
            },
            address: {
              type: 'string',
              description: '가게 주소',
              example: '서울시 강남구 역삼동 123-45'
            }
          }
        },
        message: {
          type: 'string',
          example: '가게를 성공적으로 추가하였습니다.'
        }
      }
    }
  }
  #swagger.responses[400] = {
    description: '잘못된 요청',
    schema: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
          example: false
        },
        error: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              example: 'INVALID_INPUT'
            },
            message: {
              type: 'string',
              example: '유효하지 않은 지역 코드입니다.'
            }
          }
        }
      }
    }
  }
  #swagger.responses[404] = {
    description: '리소스를 찾을 수 없음',
    schema: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
          example: false
        },
        error: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              example: 'REGION_NOT_FOUND'
            },
            message: {
              type: 'string',
              example: '존재하지 않는 지역 코드입니다.'
            }
          }
        }
      }
    }
  }
  #swagger.responses[500] = {
    description: '서버 내부 오류',
    schema: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
          example: false
        },
        error: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              example: 'STORE_CREATE_FAILED'
            },
            message: {
              type: 'string',
              example: '가게 생성에 실패했습니다.'
            }
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

