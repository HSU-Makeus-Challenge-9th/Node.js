import { getStoreById, insertStore } from "../repositories/store.repository.js";
import { findByRegionCode } from "../repositories/region.repository.js";
import { findByCategory } from "../repositories/category.repository.js";
import { responseCreateStoreDto } from "../dtos/store.dto.js";

export const createStore = async (data) => {
    try {
        const region = await findByRegionCode(data.regionCode);
        if(!region) {
            throw new CustomError(404, '존재하지 않는 지역 코드입니다.');
        }
        const category = await findByCategory(data.category);
        if(!category) {
            throw new CustomError(404,'존재하지 않는 카테고리입니다.');
        }
        const newStoreId = await insertStore(data, region, category);
        if(!newStoreId) {
            throw new CustomError(500,'가게 생성에 실패했습니다.');
        }
        const newStore = await getStoreById(newStoreId);
        if(!newStore) {
            throw new CustomError(404,'가게 정보를 가져오는 데 실패했습니다.');
        }

        return responseCreateStoreDto(newStore);
    } catch (error) {
        throw error;
    }
}

