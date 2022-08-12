import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./modules/Auth";
import userReducer from "./modules/User";
import actionSheetReducer from "./modules/ActionSheet";
import armorReducer from "./modules/Armor";
import headgearReducer from "./modules/Headgear";
import shieldReducer from "./modules/Shield";
import weaponReducer from "./modules/Weapon";

export const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  actionSheet: actionSheetReducer,
  armor: armorReducer,
  headgear: headgearReducer,
  shield: shieldReducer,
  weapon: weaponReducer,
});
