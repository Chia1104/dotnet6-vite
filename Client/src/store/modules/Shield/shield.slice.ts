import { createSlice } from "@reduxjs/toolkit";
import { shieldInitState } from "@chia/store/modules/Shield/state";
import { shieldReducer } from "@chia/store/modules/Shield/reducers";
import { type AppState } from "@chia/store";
import {
  getAllShieldsAsync,
  getShieldAsync,
} from "@chia/store/modules/Shield/actions";

const shieldSlice = createSlice({
  name: "shield",
  initialState: shieldInitState,
  reducers: shieldReducer,
  extraReducers: (builder) => {
    builder
      .addCase(getAllShieldsAsync.pending, (state) => {
        state.allShields.loading = "pending";
        state.allShields.error = null;
      })
      .addCase(getAllShieldsAsync.fulfilled, (state, action) => {
        state.allShields.loading = "succeeded";
        state.allShields.error = null;
        state.allShields.data = action.payload?.data;
      })
      .addCase(getAllShieldsAsync.rejected, (state, action) => {
        state.allShields.loading = "failed";
        state.allShields.error = action.payload;
      })
      .addCase(getShieldAsync.pending, (state) => {
        state.shield.loading = "pending";
        state.shield.error = null;
      })
      .addCase(getShieldAsync.fulfilled, (state, action) => {
        state.shield.loading = "succeeded";
        state.shield.error = null;
        state.shield.data = action.payload?.data;
      })
      .addCase(getShieldAsync.rejected, (state, action) => {
        state.shield.loading = "failed";
        state.shield.error = action.payload;
      });
  },
});

export const selectAllShields = (state: AppState) => state.shield.allShields;
export const selectShield = (state: AppState) => state.shield.shield;

export default shieldSlice.reducer;
