import { responseFromStoreAdd } from "../dtos/store.dto.js";
import { addStore, getStoreById, } from "../repositories/store.repository.js";
import { getUserById } from "../repositories/user.repository.js";

export const storeAdd = async (data) => {
    // 1. 사용자 조회
    const user = await getUserById(data.ownerId);
    
    // 2. 사용자가 존재하지 않는 경우
    if (!user) {
        throw new Error("존재하지 않는 사용자입니다.");
    }
    
    // 3. role이 OWNER가 아닌 경우
    if (user.role !== 'OWNER') {
        throw new Error("가게를 추가할 권한이 없습니다. OWNER 권한이 필요합니다.");
    }
    
    // 4. 검증 통과 시 가게 추가
    const storeId = await addStore(data);
    const store = await getStoreById(storeId);

    return responseFromStoreAdd(store);
};