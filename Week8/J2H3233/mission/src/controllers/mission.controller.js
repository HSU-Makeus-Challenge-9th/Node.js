import { completeUserMission,getMissionList,createMission, addMissionToUser, getUserMissionList} from '../services/mission.service.js';
import { getMissionListDto,createMissionDto, addMissionToUserDto } from '../dtos/mission.dto.js';
import { CustomError, ErrorCodes } from '../error/customError.js';
import { SuccessCodes } from '../error/responseCodes.js';


export const handlerCreateMission = async (req, res, next) => {
  /*
    #swagger.tags = ['Mission']
    #swagger.summary = '가게 미션 추가하기'
    #swagger.description = '특정 가게에 새로운 미션을 추가합니다.'
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
              amount: { type: 'integer', description: '미션 달성 목표 수량' },
              point: { type: 'integer', description: '보상 포인트' },
              deadline: { type: 'string', format: 'date', description: '마감일' }
            },
            required: ['amount', 'point', 'deadline']
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: '미션 추가 성공'
    }
    #swagger.responses[400] = {
      description: '잘못된 요청 또는 미션 생성 실패',
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              code: { type: 'string', example: 'MISSION_CREATE_FAILED', description: 'INVALID_INPUT 또는 MISSION_CREATE_FAILED' },
              message: { type: 'string', example: '미션 생성에 실패했습니다.' }
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
    #swagger.summary = '미션을 도전 중인 미션에 추가'
    #swagger.description = '가게의 미션을 사용자의 도전 중인 미션 목록에 추가합니다.'
    #swagger.parameters['missionId'] = {
      in: 'path',
      description: '미션 ID',
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
              userId: { type: 'integer', description: '사용자 ID' }
            },
            required: ['userId']
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: '미션 추가 성공'
    }
    #swagger.responses[400] = {
      description: '유효하지 않은 가게 ID',
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
    }swagger.responses[404] = {
      description: '존재하지 않는 미션',
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              code: { type: 'string', example: 'MISSION_NOT_FOUND' },
              message: { type: 'string', example: '존재하지 않는 미션입니다.' }
            }
          }
        }
      }
    }
    #swagger.responses[409] = {
      description: '이미 추가된 미션',
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              code: { type: 'string', example: 'MISSION_ALREADY_EXISTS' },
              message: { type: 'string', example: '이미 추가된 미션입니다.' }
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
    #swagger.summary = '가게 미션 목록 조회'
    #swagger.description = '특정 가게의 미션 목록을 조회합니다.'
    #swagger.parameters['storeId'] = {
      in: 'path',
      description: '가게 ID',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: '미션 목록 조회 성공',
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
      description: '유효하지 않은 가게 ID',
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
    /*
      #swagger.tags = ['Mission']
      #swagger.summary = '진행 중인 미션 목록 조회'
      #swagger.description = '사용자가 진행 중인 미션 목록을 조회합니다.'
      #swagger.parameters['userId'] = {
        in: 'path',
        description: '사용자 ID',
        required: true,
        type: 'integer'
      }
      #swagger.responses[200] = {
        description: '진행 중인 미션 목록 조회 성공',
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
    /*
      #swagger.tags = ['Mission']
      #swagger.summary = '미션 진행 완료 처리'
      #swagger.description = '진행 중인 미션을 완료 상태로 변경합니다.'
      #swagger.parameters['userMissionId'] = {
        in: 'path',
        description: '사용자 미션 ID',
        required: true,
        type: 'integer'
      }
      #swagger.responses[200] = {
        description: '미션 완료 처리 성공',
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
        description: '잘못된 요청 또는 이미 완료된 미션',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                code: { type: 'string', example: 'USER_MISSION_ALREADY_COMPLETED' },
                message: { type: 'string', example: '이미 완료된 미션입니다.' }
              }
            }
          }
        }
      }
      #swagger.responses[404] = {
        description: '존재하지 않는 사용자 미션',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                code: { type: 'string', example: 'USER_MISSION_NOT_FOUND' },
                message: { type: 'string', example: '존재하지 않는 사용자 미션입니다.' }
              }
            }
          }
        }
      }
    */
    const userMissionId  = req.params.userMissionId;
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
