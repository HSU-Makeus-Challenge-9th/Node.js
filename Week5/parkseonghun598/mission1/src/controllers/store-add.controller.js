import { bodyToStoreAdd } from "../dtos/store-add.dto.js";
import { storeAdd } from "../services/store-add.service.js";


export const handleStoreAdd = async (req, res) => {
  try {
    //dto 변환
    const storeData = bodyToStoreAdd(req.body);
    //필수값 검증 로직 수행(추가해야 함)
    //서비스 호출
    const result = await storeAdd(storeData);
    //응답 변환 
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ message: `가게 등록 실패: ${err.message}` });
  }
};