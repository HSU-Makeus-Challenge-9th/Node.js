import { createMission } from '../services/mission.service.js';
import { addMissionToUser } from '../services/mission.service.js';
import { createMissionDto, addMissionToUserDto } from '../dtos/mission.dto.js';

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
