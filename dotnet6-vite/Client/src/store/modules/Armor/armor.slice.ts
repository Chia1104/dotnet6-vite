import { createSlice } from "@reduxjs/toolkit";
import { armorInitState } from "@chia/store/modules/Armor/state";
import { armorReducer } from "@chia/store/modules/Armor/reducers";
import { type AppState } from "@chia/store";
import {
  getAllArmorsAsync,
  getArmorAsync,
} from "@chia/store/modules/Armor/actions";

const armorSlice = createSlice({
  name: "armor",
  initialState: armorInitState,
  reducers: armorReducer,
  extraReducers: (builder) => {
    builder
      .addCase(getAllArmorsAsync.pending, (state) => {
        state.allArmors.loading = "pending";
        state.allArmors.error = null;
      })
      .addCase(getAllArmorsAsync.fulfilled, (state, action) => {
        state.allArmors.loading = "succeeded";
        state.allArmors.error = null;
        state.allArmors.data = action.payload?.data;
      })
      .addCase(getAllArmorsAsync.rejected, (state, action) => {
        state.allArmors.loading = "failed";
        state.allArmors.error = action.payload;
      })
      .addCase(getArmorAsync.pending, (state) => {
        state.armor.loading = "pending";
        state.armor.error = null;
      })
      .addCase(getArmorAsync.fulfilled, (state, action) => {
        state.armor.loading = "succeeded";
        state.armor.error = null;
        state.armor.data = action.payload?.data;
      })
      .addCase(getArmorAsync.rejected, (state, action) => {
        state.armor.loading = "failed";
        state.armor.error = action.payload;
      });
  },
});

export const selectAllArmors = (state: AppState) => state.armor.allArmors;
export const selectArmor = (state: AppState) => state.armor.armor;

export default armorSlice.reducer;
