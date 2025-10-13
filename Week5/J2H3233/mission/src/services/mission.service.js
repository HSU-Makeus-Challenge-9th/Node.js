import { getStoreById } from "../repositories/store.repository.js";
import { existUserMission, insertMission, getMissionById, insertUserMission, getUserMissionById } from "../repositories/mission.repository.js";
import { responseCreateMissionDto, responseAddMissionToUserDto } from "../dtos/mission.dto.js";
import { CustomError } from '../error/customError.js';


export const createMission = async (data) => {
    try {
        const store = await getStoreById(data.storeId);
        if(!store) {
            throw new CustomError(404,'존재하지 않는 가게입니다.');
        }
        const missionId = await insertMission(data);
        if(!missionId) {
            throw new CustomError(500, '미션 생성에 실패했습니다.');
        }
        const mission = await getMissionById(missionId);
        if(!mission) {
            throw new CustomError(404,'존재하지 않는 미션입니다.');
        }
        return responseCreateMissionDto(mission);
    } catch (error) {
        throw error;
    }

}

export const addMissionToUser = async (data) => {
    try {
        const mission = await getMissionById(data.missionId);
        if (!mission) {
            throw new CustomError(404,'존재하지 않는 미션입니다.');
        }

        if(await existUserMission(data)) {
            throw new CustomError(409, '이미 추가된 미션입니다.');
        }

        const generateVerificationCode = () => {
            const min = 10000000;
            const max = 99999999; 

            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

            return randomNumber.toString(); // 문자열로 반환
        }

        const newUserMissionId = await insertUserMission(data.missionId, data, "pending", generateVerificationCode());
        if (!newUserMissionId) {
            throw new CustomError(500, '미션을 사용자에게 추가하는 데 실패했습니다.');
        }
        const newUserMission = await getUserMissionById(newUserMissionId);
        if (!newUserMission) {
            throw new CustomError(404, '사용자 미션이 존재하지 않습니다');
        }

        return responseAddMissionToUserDto(newUserMission);
    } catch (error) {
        throw error;
    }
};
