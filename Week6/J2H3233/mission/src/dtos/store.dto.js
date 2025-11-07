export const createStoreDto = (body, regionCode) => {
  return {
    regionCode: region_code,
    name: body.name,
    address: body.address,
    category: body.category,
  };
};

export const responseCreateStoreDto = (store) => {
  return {
    id: store.id,
    name: store.name,
    address: store.address,
  };
};
