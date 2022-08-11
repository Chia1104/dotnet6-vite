import { createSlice } from "@reduxjs/toolkit";
import { actionSheetInitState } from "@chia/store/modules/ActionSheet/state";
import { actionSheetReducer } from "@chia/store/modules/ActionSheet/reducers";
import { type AppState } from "@chia/store";

const actionSheetSlice = createSlice({
  name: "actionSheet",
  initialState: actionSheetInitState,
  reducers: actionSheetReducer,
});

export const { activeDrawer } = actionSheetSlice.actions;

export const selectActionSheet = (state: AppState) => state.actionSheet;

export default actionSheetSlice.reducer;
