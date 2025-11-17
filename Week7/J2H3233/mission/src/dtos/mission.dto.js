export const createMissionDto = (storeId, body) => {
  return {
    storeId: Number(storeId),
    amount : Number(body.amount),
    deadline : body.deadline,
    point : Number(body.point),
  };
}

export const responseCreateMissionDto = (mission) => {
  return {
    id: Number(mission.id),
    storeId: Number(mission.store_id),
    amount: Number(mission.amount),
    deadline: mission.deadline,
    point: Number(mission.point),
  };
}

export const addMissionToUserDto = (missionId, body) => {
    return {
        missionId: Number(missionId),
        userId: Number(body.userId),
    };
}

export const responseAddMissionToUserDto = (userMission) => {
    return {
        id: Number(userMission.id),
        missionId: Number(userMission.mission_id),
        userId: Number(userMission.user_id),
        status: userMission.status,
        verificationCode: userMission.verification_code,
    };
}

export const getMissionListDto = (storeId) => {
    return Number(storeId);
}

export const responseGetMissionListDto = (missions, nextCursor) => {
    return missions.map((mission) => ({
        id: Number(mission.id),
        amount: Number(mission.amount),
        deadline: mission.deadline,
        point: Number(mission.point),
        nextCursor: nextCursor ? Number(nextCursor) : null,
    }));
}

export const responseGetUserMissionListDto = (userMissions, nextCursor) => {
    return userMissions.map((userMission) => ({
        id: Number(userMission.id),
        missionId: Number(userMission.mission_id),
        amount: Number(userMission.mission.amount),
        deadline: userMission.mission.deadline,
        point: Number(userMission.mission.point),
        nextCursor: nextCursor ? Number(nextCursor) : null,
    }));
}

export const responseCompleteUserMissionDto = (userMission) => {
    return {
        id: Number(userMission.id),
        status: userMission.status,
    };
}