import { getStoreById, insertStore } from "../repositories/store.repository.js";
import { findByRegionCode } from "../repositories/region.repository.js";
import { findByCategory } from "../repositories/category.repository.js";
import { responseCreateStoreDto } from "../dtos/store.dto.js";
import { CustomError, ErrorCodes } from '../error/customError.js';

export const createStore = async (data) => {
    const region = await findByRegionCode(data.regionCode);
    if(!region) {
        throw new CustomError(404, ErrorCodes.REGION_NOT_FOUND, '존재하지 않는 지역 코드입니다.');
    }

    const category = await findByCategory(data.category);
    if(!category) {
        throw new CustomError(404, ErrorCodes.CATEGORY_NOT_FOUND, '존재하지 않는 카테고리입니다.');
    }

    const newStore = await insertStore(data, region, category);
    if(!newStore) {
        throw new CustomError(500, ErrorCodes.STORE_CREATE_FAILED, '가게 생성에 실패했습니다.');
    }

    return responseCreateStoreDto(newStore);
}

