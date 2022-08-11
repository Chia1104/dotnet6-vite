import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/Auth";
import userReducer from "./modules/User";
import actionSheetReducer from "./modules/ActionSheet";

export const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  actionSheet: actionSheetReducer,
});
