import { completeUserMission,getMissionList,createMission, addMissionToUser, getUserMissionList} from '../services/mission.service.js';
import { getMissionListDto,createMissionDto, addMissionToUserDto } from '../dtos/mission.dto.js';
import { CustomError, ErrorCodes } from '../error/customError.js';
import { SuccessCodes } from '../error/responseCodes.js';


export const handlerCreateMission = async (req, res, next) => {
  /*
  #swagger.tags = ['Mission']
  #swagger.summary = '가게 미션 추가하기'
  #swagger.parameters['storeId'] = {
    in: 'path',
    description: '가게 ID',
    required: true,
    type: 'integer'
  }
  #swagger.parameters['mission'] = {
    in: 'body',
    description: '미션 정보',
    required: true,
    schema: {
      type: 'object',
      required: ['amount', 'deadline', 'point'],
      properties: {
        amount: {
          type: 'integer',
          description: '목표 금액',
          example: 10000
        },
        deadline: {
          type: 'string',
          format: 'date',
          description: '마감일',
          example: '2024-12-31'
        },
        point: {
          type: 'integer',
          description: '포인트 보상',
          example: 1000
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: '미션 생성 성공',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        data: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            storeId: { type: 'integer', example: 1 },
            amount: { type: 'integer', example: 10000 },
            deadline: { type: 'string', example: '2024-12-31' },
            point: { type: 'integer', example: 1000 }
          }
        },
        message: { type: 'string', example: '가게 미션을 성공적으로 추가하였습니다.' }
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
    const mission = await createMission(createMissionDto(storeId, data));
    res.jsonSuccess(
      201,
      SuccessCodes.Created,
      '가게 미션을 성공적으로 추가하였습니다.',
      mission,
    );
  } catch (error) {
    next(error);
  }
};

export const handlerAddMissionToUser = async (req, res, next) => {
  /*
  #swagger.tags = ['Mission']
  #swagger.summary = '가게의 미션을 도전 중인 미션에 추가'
  #swagger.parameters['missionId'] = {
    in: 'path',
    description: '미션 ID',
    required: true,
    type: 'integer'
  }
  #swagger.parameters['userMission'] = {
    in: 'body',
    description: '사용자 미션 정보',
    required: true,
    schema: {
      type: 'object',
      required: ['userId'],
      properties: {
        userId: {
          type: 'integer',
          description: '사용자 ID',
          example: 1
        }
      }
    }
  }
  #swagger.responses[201] = {
    description: '사용자 미션 추가 성공',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        data: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            missionId: { type: 'integer', example: 1 },
            userId: { type: 'integer', example: 1 },
            status: { type: 'string', example: 'IN_PROGRESS' }
          }
        },
        message: { type: 'string', example: '미션을 사용자에게 추가하였습니다.' }
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
            message: { type: 'string', example: '유효하지 않은 미션 ID입니다.' }
          }
        }
      }
    }
  }
  */
  const { missionId } = req.params;
  const data = req.body;
  try {

    if (!missionId || isNaN(parseInt(missionId))) {
      throw new CustomError(
        400,
        ErrorCodes.INVALID_INPUT,
        '유효하지 않은 미션 ID입니다.'
      );
    }

    const result = await addMissionToUser(addMissionToUserDto(missionId, data));
    res.jsonSuccess(
      201,
      SuccessCodes.Created,
      '미션을 사용자에게 추가하였습니다.',  
      result
    );
  } catch (error) {
    next(error);
  }
};

export const handlerGetMissionList = async (req, res, next) => {
  /*
  #swagger.tags = ['Mission']
  #swagger.summary = '가게 미션 목록 조회하기'
  #swagger.parameters['storeId'] = {
    in: 'path',
    description: '가게 ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[200] = {
    description: '미션 목록 조회 성공',
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
              amount: { type: 'integer', example: 10000 },
              deadline: { type: 'string', example: '2024-12-31' },
              point: { type: 'integer', example: 1000 }
            }
          }
        },
        message: { type: 'string', example: '가게의 미션 목록 조회에 성공했습니다' }
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
  try {
    if (!storeId || isNaN(parseInt(storeId))) {
      throw new CustomError(
        400,
        ErrorCodes.INVALID_INPUT,
        '유효하지 않은 가게 ID입니다.'
      );
  }


    const missions = await getMissionList(getMissionListDto(storeId));
    res.jsonSuccess(
      200,
      SuccessCodes.OK,
      '미션 목록 조회에 성공했습니다.',
      missions,
    );
  } catch (error) {
    next(error);
  }
};

export const handlerGetUserMissionList = async (req, res, next) => {
    const { userId } = req.params.userId;
    try {
        if (!userId || isNaN(parseInt(userId))) {
            throw new CustomError(
              400,
              ErrorCodes.INVALID_INPUT,
              '유효하지 않은 사용자 ID입니다.'
            );
        }

        const userMissions = await getUserMissionList(parseInt(userId));
        res.jsonSuccess(
            200,
            SuccessCodes.OK,
            '사용자 미션 목록 조회에 성공했습니다',
            userMissions,
        );
    } catch (error) {
        next(error);
    }
};

export const handlerCompleteUserMission = async (req, res, next) => {
    const { userMissionId } = req.params.userMissionId;
    if (!userMissionId || isNaN(parseInt(userMissionId))) {
        throw new CustomError(
            400,
            ErrorCodes.INVALID_INPUT,
            '유효하지 않은 미션 ID입니다.'
        );
    }

    try {
        const result = await completeUserMission(parseInt(userMissionId));
        res.jsonSuccess(
            200,
            SuccessCodes.OK,
            '사용자 미션 진행 완료에 성공했습니다',
            result,
        );
    } catch (error) {
        next(error);
    }
};
