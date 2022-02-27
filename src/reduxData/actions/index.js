export const add = (foodData, ele) => {
  foodData = foodData.map((eles) => {
    if (eles.name === ele.name) {
      eles.count += 1;
    }
    return eles;
  });
  return {
    type: "add",
    payload: foodData,
  };
};
export const remove = (foodData, ele) => {
  foodData = foodData.map((eles) => {
    if (eles.name === ele.name) {
      if (ele.count != 0) {
        eles.count -= 1;
      }
    }
    return eles;
  });
  return {
    type: "remove",
    payload: foodData,
  };
};
