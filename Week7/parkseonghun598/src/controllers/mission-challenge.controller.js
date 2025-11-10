import { bodyToUserMissionAdd } from "../dtos/mission-challenge.dto.js";
import { userMissionAdd } from "../services/mission-challenge.service.js";

export const handleMissionChallenge = async (req, res, next) => {
  try {
    console.log("미션 도전을 요청했습니다!");
    
    // dto 변환
    const userMissionData = bodyToUserMissionAdd(req.body);

    // 서비스 레이어 호출
    const result = await userMissionAdd(userMissionData);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};
