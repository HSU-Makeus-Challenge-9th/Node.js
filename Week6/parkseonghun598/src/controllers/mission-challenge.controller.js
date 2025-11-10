import { bodyToUserMissionAdd } from "../dtos/mission-challenge.dto.js";
import { userMissionAdd } from "../services/mission-challenge.service.js";

export const handleMissionChallenge = async (req, res) => {
  try {
    // dto 변환
    const userMissionData = bodyToUserMissionAdd(req.body);

    // 서비스 레이어 호출
    const result = await userMissionAdd(userMissionData);

    // 성공시
    res.status(201).json({
      message: "미션 도전 성공",
      result,
    });
  } catch (err) {
    //실패시
    res.status(500).json({
      message: `미션 도전 실패: ${err.message}`,
    });
  }
};
