import { createStoreDto } from '../dtos/store.dto.js';   
import { createStore } from '../services/store.service.js';

// 특정 지역에 가게 추가하기
export const handlerCreateStore = async (req, res, next) => {
  const { regionCode } = req.params;
  const data = req.body;
  
  try {
    if (!regionCode || typeof regionCode !== 'string' || regionCode.trim() === '') {
      throw new CustomError(400, ErrorCodes.INVALID_INPUT, '유효하지 않은 지역 코드입니다.');
    }
    const store = await createStore(createStoreDto(data, regionCode));

    res.jsonSuccess(
      201,
      SuccessCodes.Created,
      '가게를 성공적으로 추가하였습니다.',
      store
  );
  } catch (error) {
    next(error);
  }
};

