import { createStore } from "redux";
import rootReducer from "./reducer";

//centralize Store....
const store = createStore(rootReducer);

export default store;
