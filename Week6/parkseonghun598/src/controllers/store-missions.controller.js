import { StatusCodes } from "http-status-codes";
import { listStoreMissions } from "../services/store-missions.service.js";

export const handleGetStoreMissions = async (req, res) => {
  try {
    const storeId = parseInt(req.params.storeId);
    const cursor = req.query.cursor ? parseInt(req.query.cursor) : null;

    console.log(`가게 ${storeId}의 미션 목록 조회 요청`);

    const result = await listStoreMissions(storeId, cursor);

    res.status(StatusCodes.OK).json({
      isSuccess: true,
      result: result,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      isSuccess: false,
      message: `미션 목록 조회 실패: ${err.message}`,
    });
  }
};

