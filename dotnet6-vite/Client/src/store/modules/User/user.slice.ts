import { createSlice } from "@reduxjs/toolkit";
import { userInitState } from "@chia/store/modules/User/state";
import { userReducer } from "@chia/store/modules/User/reducers";
import { type AppState } from "@chia/store";
import {
  getAllUsersAsync,
  getUserAsync,
  postUserArmorAsync,
  deleteUserArmorAsync,
  postUserHeadgearAsync,
  deleteUserHeadgearAsync,
  postUserWeaponAsync,
  deleteUserWeaponAsync,
  postUserShieldAsync,
  deleteUserShieldAsync,
} from "@chia/store/modules/User/actions";
import { postUserArmor } from "@chia/api/user";

const userSlice = createSlice({
  name: "user",
  initialState: userInitState,
  reducers: userReducer,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.allUsers.loading = "pending";
        state.allUsers.error = null;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.allUsers.loading = "succeeded";
        state.allUsers.error = null;
        state.allUsers.data = action.payload?.data;
      })
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.allUsers.loading = "failed";
        state.allUsers.error = action.payload;
      })
      .addCase(getUserAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      })
      .addCase(postUserArmorAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(postUserArmorAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(postUserArmorAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      })
      .addCase(deleteUserArmorAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(deleteUserArmorAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(deleteUserArmorAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      })
      .addCase(postUserHeadgearAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(postUserHeadgearAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(postUserHeadgearAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      })
      .addCase(deleteUserHeadgearAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(deleteUserHeadgearAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(deleteUserHeadgearAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      })
      .addCase(postUserWeaponAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(postUserWeaponAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(postUserWeaponAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      })
      .addCase(deleteUserWeaponAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(deleteUserWeaponAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(deleteUserWeaponAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      })
      .addCase(postUserShieldAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(postUserShieldAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(postUserShieldAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      })
      .addCase(deleteUserShieldAsync.pending, (state) => {
        state.user.loading = "pending";
        state.user.error = null;
      })
      .addCase(deleteUserShieldAsync.fulfilled, (state, action) => {
        state.user.loading = "succeeded";
        state.user.error = null;
        state.user.data = action.payload?.data;
      })
      .addCase(deleteUserShieldAsync.rejected, (state, action) => {
        state.user.loading = "failed";
        state.user.error = action.payload;
      });
  },
});

export const selectAllUsers = (state: AppState) => state.user.allUsers;
export const selectUser = (state: AppState) => state.user.user;

export default userSlice.reducer;
