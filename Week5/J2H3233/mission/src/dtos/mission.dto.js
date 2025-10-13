export const createMissionDto = (storeId, body) => {
  return {
    storeId: parseInt(storeId),
    amount : parseInt(body.amount),
    deadline : body.deadline,
    point : parseInt(body.point),
  };
}

export const responseCreateMissionDto = (mission) => {
  return {
    id: parseInt(mission.id),
    storeId: parseInt(mission.storeId),
    amount: parseInt(mission.amount),
    deadline: mission.deadline,
    point: parseInt(mission.point),
  };
}

export const addMissionToUserDto = (missionId, body) => {
    return {
        missionId: parseInt(missionId),
        userId: parseInt(body.userId),
    };
}
export const responseAddMissionToUserDto = (userMission) => {
    return {
        id: parseInt(userMission.id),
        missionId: parseInt(userMission.missionId),
        userId: parseInt(userMission.userId),
        status: userMission.status,
        verificationCode: userMission.verificationCode,
    };
}