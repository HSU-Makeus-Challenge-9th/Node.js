import { completeUserMission,getMissionList,createMission, addMissionToUser, getUserMissionList} from '../services/mission.service.js';
import { getMissionListDto,createMissionDto, addMissionToUserDto } from '../dtos/mission.dto.js';

export const handlerCreateMission = async (req, res, next) => {
  const { storeId } = req.params;
  const data = req.body;

  try {
    const mission = await createMission(createMissionDto(storeId, data));
    res.jsonSuccess(
      mission,
      '가게 미션을 성공적으로 추가하였습니다.',
      201
    );
  } catch (error) {
    next(error);
  }
};

export const handlerAddMissionToUser = async (req, res, next) => {
  const { missionId } = req.params;
  const data = req.body;

  try {
    const result = await addMissionToUser(addMissionToUserDto(missionId, data));
    res.jsonSuccess(
      result,
      '미션을 사용자에게 추가하였습니다.',
      201
    );
  } catch (error) {
    next(error);
  }
};

export const handlerGetMissionList = async (req, res, next) => {
  const { storeId } = req.params;
  try {
    const missions = await getMissionList(getMissionListDto(storeId));
    res.jsonSuccess(
      missions,
      '가게의 미션 목록 조회에 성공했습니다',
      200
    );
  } catch (error) {
    next(error);
  }
};

export const handlerGetUserMissionList = async (req, res, next) => {
    const { userId } = req.body;
    try {
        const userMissions = await getUserMissionList(parseInt(userId));
        res.jsonSuccess(
            userMissions,
            '사용자 미션 목록 조회에 성공했습니다',
            200
        );
    } catch (error) {
        next(error);
    }
};

export const handlerCompleteUserMission = async (req, res, next) => {
    const { userMissionId } = req.params;
    const result = await completeUserMission(parseInt(userMissionId));
    try {
        res.jsonSuccess(
            result,
            '사용자 미션 진행 완료에 성공했습니다',
            200
        );
    } catch (error) {
        next(error);
    }
};
