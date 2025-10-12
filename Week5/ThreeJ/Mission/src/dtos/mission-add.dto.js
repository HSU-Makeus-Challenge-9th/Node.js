export const bodyToMissionAdd = (body) => {
  return {
    endDate: new Date(body.endDate),
    money: parseInt(body.money),
    points: parseInt(body.points),
    storeId: parseInt(body.storeId),
    regionId: parseInt(body.regionId),
  };
};

export const responseFromMissionAdd = (mission) => {
  return {
    missionId: mission.id,
    endDate: mission.end_date,
    money: mission.money,
    points: mission.points,
    storeId: mission.store_id,
    regionId: mission.region_id,
  };
};