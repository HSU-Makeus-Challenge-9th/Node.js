import { bodyToMissionAdd } from "../dtos/mission-add.dto.js";
import { missionAdd } from "../services/mission-add.service.js";

export const handleMissionAdd = async (req, res, next) => {
  try {
    console.log("미션 등록을 요청했습니다!");
    
    // dto 변환
    const missionData = bodyToMissionAdd(req.body);

    // service 레이어 호출
    const result = await missionAdd(missionData);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};
