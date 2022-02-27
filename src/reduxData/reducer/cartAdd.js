const iniVal = require("../../data.json");

const cartAdd = (state = iniVal, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "add":
      return action.payload;
    case "remove":
      return action.payload;
    default:
      return state;
  }
};

export default cartAdd;
