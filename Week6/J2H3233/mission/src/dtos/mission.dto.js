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
    storeId: parseInt(mission.store_id),
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
        missionId: parseInt(userMission.mission_id),
        userId: parseInt(userMission.user_id),
        status: userMission.status,
        verificationCode: userMission.verification_code,
    };
}

export const getMissionListDto = (storeId) => {
    return parseInt(storeId);
}

export const responseGetMissionListDto = (missions) => {
    return missions.map((mission) => ({
        id: parseInt(mission.id),
        amount: parseInt(mission.amount),
        deadline: mission.deadline,
        point: parseInt(mission.point),
    }));
}

export const responseGetUserMissionListDto = (userMissions) => {
    return userMissions.map((userMission) => ({
        id: parseInt(userMission.id),
        missionId: parseInt(userMission.mission_id),
        amount: parseInt(userMission.mission.amount),
        deadline: userMission.mission.deadline,
        point: parseInt(userMission.mission.point),
    }));
}

export const responseCompleteUserMissionDto = (userMission) => {
    return {
        id: parseInt(userMission.id),
        status: userMission.status,
    };
}