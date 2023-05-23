import { createSlice } from "@reduxjs/toolkit";
import { headgearInitState } from "@chia/store/modules/Headgear/state";
import { headgearReducer } from "@chia/store/modules/Headgear/reducers";
import { type AppState } from "@chia/store";
import {
  getAllHeadgearAsync,
  getHeadgearAsync,
} from "@chia/store/modules/Headgear/actions";

const headgearSlice = createSlice({
  name: "headgear",
  initialState: headgearInitState,
  reducers: headgearReducer,
  extraReducers: (builder) => {
    builder
      .addCase(getAllHeadgearAsync.pending, (state) => {
        state.allHeadgear.loading = "pending";
        state.allHeadgear.error = null;
      })
      .addCase(getAllHeadgearAsync.fulfilled, (state, action) => {
        state.allHeadgear.loading = "succeeded";
        state.allHeadgear.error = null;
        state.allHeadgear.data = action.payload?.data;
      })
      .addCase(getAllHeadgearAsync.rejected, (state, action) => {
        state.allHeadgear.loading = "failed";
        state.allHeadgear.error = action.payload;
      })
      .addCase(getHeadgearAsync.pending, (state) => {
        state.headgear.loading = "pending";
        state.headgear.error = null;
      })
      .addCase(getHeadgearAsync.fulfilled, (state, action) => {
        state.headgear.loading = "succeeded";
        state.headgear.error = null;
        state.headgear.data = action.payload?.data;
      })
      .addCase(getHeadgearAsync.rejected, (state, action) => {
        state.headgear.loading = "failed";
        state.headgear.error = action.payload;
      });
  },
});

export const selectAllHeadgear = (state: AppState) =>
  state.headgear.allHeadgear;
export const selectHeadgear = (state: AppState) => state.headgear.headgear;

export default headgearSlice.reducer;
