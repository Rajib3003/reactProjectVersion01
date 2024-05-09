import {  createStore } from "redux";
import countReducer from "./Components/ReduxIncrement/ReduxComponents/Services/Reducers/CounterReducers";


const store = createStore(countReducer);


export default store;