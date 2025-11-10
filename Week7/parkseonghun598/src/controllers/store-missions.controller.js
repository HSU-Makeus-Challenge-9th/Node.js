import { listStoreMissions } from "../services/store-missions.service.js";

export const handleGetStoreMissions = async (req, res, next) => {
  try {
    const storeId = parseInt(req.params.storeId);
    const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;

    console.log(`가게 ${storeId}의 미션 목록 조회 요청`);

    const result = await listStoreMissions(storeId, cursor);

    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};

