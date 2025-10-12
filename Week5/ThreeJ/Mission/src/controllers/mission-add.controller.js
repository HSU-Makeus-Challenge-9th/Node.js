import { StatusCodes, } from "http-status-codes";
import { bodyToMissionAdd, } from "../dtos/mission-add.dto.js";
import { missionAdd, } from "../services/mission-add.service.js";

export const handleMissionAdd = async (req, res, next) => {
  console.log("미션 추가를 요청했습니다!");
  console.log("body:", req.body);
    
  const mission = await missionAdd(bodyToMissionAdd(req.body));

  res.status(StatusCodes.CREATED).json({
    success: true,
    code: "SUCCESS_201",
    message: "미션이 성공적으로 추가되었습니다.",
    data: mission,
  });
}