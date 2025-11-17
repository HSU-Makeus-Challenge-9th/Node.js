import { bodyToStoreAdd } from "../dtos/store-add.dto.js";
import { storeAdd } from "../services/store-add.service.js";

export const handleStoreAdd = async (req, res, next) => {
  try {
    console.log("가게 등록을 요청했습니다!");
    
    // dto 변환
    const storeData = bodyToStoreAdd(req.body);
    
    // 서비스 호출
    const result = await storeAdd(storeData);
    
    // 통일된 성공 응답
    res.success(result);
  } catch (err) {
    // 에러를 전역 핸들러로 전달
    next(err);
  }
};