import { createSlice } from "@reduxjs/toolkit";
import { weaponInitState } from "@chia/store/modules/Weapon/state";
import { weaponReducer } from "@chia/store/modules/Weapon/reducers";
import { type AppState } from "@chia/store";
import {
  getAllWeaponsAsync,
  getWeaponAsync,
} from "@chia/store/modules/Weapon/actions";

const weaponSlice = createSlice({
  name: "weapon",
  initialState: weaponInitState,
  reducers: weaponReducer,
  extraReducers: (builder) => {
    builder
      .addCase(getAllWeaponsAsync.pending, (state) => {
        state.allWeapons.loading = "pending";
        state.allWeapons.error = null;
      })
      .addCase(getAllWeaponsAsync.fulfilled, (state, action) => {
        state.allWeapons.loading = "succeeded";
        state.allWeapons.error = null;
        state.allWeapons.data = action.payload?.data;
      })
      .addCase(getAllWeaponsAsync.rejected, (state, action) => {
        state.allWeapons.loading = "failed";
        state.allWeapons.error = action.payload;
      })
      .addCase(getWeaponAsync.pending, (state) => {
        state.weapon.loading = "pending";
        state.weapon.error = null;
      })
      .addCase(getWeaponAsync.fulfilled, (state, action) => {
        state.weapon.loading = "succeeded";
        state.weapon.error = null;
        state.weapon.data = action.payload?.data;
      })
      .addCase(getWeaponAsync.rejected, (state, action) => {
        state.weapon.loading = "failed";
        state.weapon.error = action.payload;
      });
  },
});

export const selectAllWeapons = (state: AppState) => state.weapon.allWeapons;
export const selectWeapon = (state: AppState) => state.weapon.weapon;

export default weaponSlice.reducer;
