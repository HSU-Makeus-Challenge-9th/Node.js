// 가게 추가
export const bodyToStoreAdd = (body) => {
    return {
        name: body.name,
        address: body.address,
        sType: body.stype,
        ownerId: parseInt(body.ownerId)
    };
};
export const responseFromStoreAdd = (store) => {
    return {
        storeId: Number(store.id), // BigInt를 Number로 변환
        name: store.name, 
        address: store.address,
        stype: store.stype,
    };
};
