import { createStore } from "redux";
import counterReducer from "../Reducers/countReducers";

const store = createStore(counterReducer);
// console.log(store);
export default store;