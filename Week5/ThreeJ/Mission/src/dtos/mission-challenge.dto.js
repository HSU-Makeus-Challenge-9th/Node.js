export const bodyToUserMissionAdd = (body) => {
  return {
    userId: parseInt(body.userId),
    missionId: parseInt(body.missionId),
  };
};

export const responseFromUserMissionAdd = (userMission) => {
  return {
    userId: userMission.user_id,
    missionId: userMission.mission_id,
    status: "CHALLENGING",
  };
};
