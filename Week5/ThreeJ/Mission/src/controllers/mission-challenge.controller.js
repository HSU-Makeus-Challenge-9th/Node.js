import { StatusCodes } from "http-status-codes";
import { bodyToUserMissionAdd } from "../dtos/mission-challenge.dto.js";
import { userMissionAdd } from "../services/mission-challenge.service.js";

export const handleMissionChallenge = async (req, res, next) => {
  console.log("미션 도전을 요청했습니다!");
  console.log("body:", req.body);

  const userMission = await userMissionAdd(bodyToUserMissionAdd(req.body));

  res.status(StatusCodes.CREATED).json({
    success: true,
    code: "SUCCESS_201",
    message: "미션 도전을 수락했습니다.",
    data: userMission,
  });
};
