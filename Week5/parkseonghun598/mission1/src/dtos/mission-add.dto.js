// 요청
export const bodyToMissionAdd = (body) => {
  return {
    point: body.point,
    store_id: body.store_id,
    start_date: body.start_date,
    end_date: body.end_date,
    region: body.region,
  };
};

//응답
export const responseFromMissionAdd = (mission) => {
  return {
    id: mission.id,
    point: mission.point,
    store_id: mission.store_id,
    start_date: mission.start_date,
    end_date: mission.end_date,
    region: mission.region,
  };
};
