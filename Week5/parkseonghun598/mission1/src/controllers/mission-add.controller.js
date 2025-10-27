import { bodyToMissionAdd } from "../dtos/mission-add.dto.js";
import { missionAdd } from "../services/mission-add.service.js";

export const handleMissionAdd = async (req, res) => {
  try {
    // dto 변환
    const missionData = bodyToMissionAdd(req.body);

    //service 레이어 호출
    const result = await missionAdd(missionData);

    // 성공시 
    res.status(201).json({
      message: "미션 등록 성공",
      result,
    });
  } catch (err) {
    //실패시
    res.status(500).json({
      message: `미션 등록 실패: ${err.message}`,
    });
  }
};
