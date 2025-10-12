export const bodyToStoreAdd = (body) => {
  return {
    name: body.name,
    address: body.address,
    sType: body.sType,
    ownerId: parseInt(body.ownerId),
  };
};

export const responseFromStoreAdd = (store) => {
  return {
    id: store.id,
    name: store.name,
    address: store.address,
  };
};
