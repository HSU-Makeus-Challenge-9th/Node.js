import { completeUserMission,getMissionList,createMission, addMissionToUser, getUserMissionList} from '../services/mission.service.js';
import { getMissionListDto,createMissionDto, addMissionToUserDto } from '../dtos/mission.dto.js';
import { CustomError, ErrorCodes } from '../error/customError.js';
import { SuccessCodes } from '../error/resoposeCodes.js';


export const handlerCreateMission = async (req, res, next) => {
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

    if (error) {
      throw new CustomError(400, ErrorCodes.VALIDATION_ERROR, error.details[0].message);
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
