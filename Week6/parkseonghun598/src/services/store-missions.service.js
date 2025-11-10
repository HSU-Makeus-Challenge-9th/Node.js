import { getStoreMissions } from "../repositories/store-missions.repository.js";
import { responseFromStoreMissions } from "../dtos/store-missions.dto.js";

export const listStoreMissions = async (storeId, cursor) => {
  // 미션 목록 조회
  const missions = await getStoreMissions(storeId, cursor);

  // DTO 변환
  return responseFromStoreMissions(missions);
};

