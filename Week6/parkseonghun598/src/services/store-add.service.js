import { addStore, getStoreById } from "../repositories/store-add.repository.js";
import { responseFromStoreAdd } from "../dtos/store-add.dto.js";

export const storeAdd = async (data) => {

  // 가게 등록
  const storeId = await addStore(data);

  // 가게 정보 조회
  const store = await getStoreById(storeId);

  // dto 변환 후 반환
  return responseFromStoreAdd(store);
};
