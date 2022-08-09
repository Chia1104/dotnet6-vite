import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/Auth";

export const reducers = combineReducers({
  auth: authReducer,
});
