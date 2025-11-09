// 가게에 미션 추가
export const bodyToMissionAdd = (body) => {
    return {
        endDate: new Date(body.endDate),
        money: parseInt(body.money),
        points: parseInt(body.points),
        storeId: parseInt(body.storeId),
        regionId: parseInt(body.regionId)
    };
};
export const responseFromMissionAdd = (mission) => {
    return {
        missionId: Number(mission.id), // BigInt를 Number로 변환
        endDate: mission.endDate,
        money: Number(mission.money), // BigInt를 Number로 변환
        points: Number(mission.points), // BigInt를 Number로 변환
        storeId: Number(mission.storeId), // BigInt를 Number로 변환
        regionId: Number(mission.regionId), // BigInt를 Number로 변환
    };
};


// 미션 수락(사용자가 미션 도전 버튼을 누름)
export const bodyToUserMissionAdd = (body) => {
    return {
        userId: parseInt(body.userId),
        missionId: parseInt(body.missionId)
    };
};
export const responseFromUserMissionAdd = (userMission) => {
    return {
        userId: Number(userMission.userId), // BigInt를 Number로 변환
        missionId: Number(userMission.missionId), // BigInt를 Number로 변환
        status: userMission.status
    };
};

// 내 미션 목록 조회 응답
export const responseFromMissionList = (userMissions, totalCount, page, limit) => {
    return {
        missions: userMissions.map(um => ({
            missionId: Number(um.mission.id),
            money: Number(um.mission.money),
            points: Number(um.mission.points),
            endDate: um.mission.endDate,
            store: {
                storeId: Number(um.mission.store.id),
                storeName: um.mission.store.name,
            },
            status: um.status,
            acceptedAt: um.acceptedAt,
        })),
        pagination: {
            currentPage: page,
            pageSize: limit,
            totalItems: totalCount,
            totalPages: Math.ceil(totalCount / limit),
        },
    };
};

// 가게 미션 목록 조회 응답 (커서 페이지네이션)
export const responseFromStoreMissionList = (missions, limit) => {
    const hasNext = missions.length > limit;
    const data = hasNext ? missions.slice(0, limit) : missions;
    const nextCursor = hasNext ? String(data[data.length - 1].id) : null;

    return {
        missions: data.map(mission => ({
            missionId: Number(mission.id),
            money: Number(mission.money),
            points: Number(mission.points),
            endDate: mission.endDate,
            createdAt: mission.createdAt,
        })),
        cursor: {
            nextCursor: nextCursor,
            hasNext: hasNext,
        }
    };
};

// 미션 완료 응답
export const responseFromMissionComplete = (userMission) => {
    return {
        userId: Number(userMission.userId),
        missionId: Number(userMission.missionId),
        status: userMission.status,
        acceptedAt: userMission.acceptedAt,
        completedAt: userMission.completedAt,  // 완료된 시간
    };
};
