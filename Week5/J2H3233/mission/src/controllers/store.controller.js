import { createStoreDto } from '../dtos/store.dto.js';   
import { createStore } from '../services/store.service.js';



// 특정 지역에 가게 추가하기
export const handlerCreateStore = async (req, res, next) => {
  const { regionCode } = req.params;
  const data = req.body;
  
  try {
    const store = await createStore(createStoreDto(data, regionCode));

    res.jsonSuccess(
      store,
      '가게를 성공적으로 추가하였습니다.',
      201
  );
  } catch (error) {
    next(error);
  }
};