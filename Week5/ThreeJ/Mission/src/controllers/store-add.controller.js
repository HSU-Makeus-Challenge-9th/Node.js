import { StatusCodes, } from "http-status-codes";
import { bodyToStoreAdd, } from "../dtos/store-add.dto.js";
import { storeAdd, } from "../services/store-add.service.js";

export const handleStoreAdd = async (req, res, next) => {
  console.log("가게 추가를 요청했습니다!");
  console.log("body:", req.body);
    
  const store = await storeAdd(bodyToStoreAdd(req.body));

  res.status(StatusCodes.CREATED).json({
    success: true,
    code: "SUCCESS_201",
    message: "가게가 성공적으로 추가되었습니다.",
    data: store,
  });
}