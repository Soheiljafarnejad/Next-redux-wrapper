import { combineReducers } from "@reduxjs/toolkit";
import { UserReducer } from "./Reducers/UserReducer";
import { CounterReducer } from "./Reducers/CounterReducer";

const RootReducer = combineReducers({
  user: UserReducer,
  counter: CounterReducer,
});

export default RootReducer;
