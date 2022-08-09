import { createSlice } from "@reduxjs/toolkit";
import { authInitState } from "@chia/store/modules/Auth/state";
import { authReducer } from "@chia/store/modules/Auth/reducers";
import { type AppState } from "@chia/store";
import { loginAsync, registerAsync } from "@chia/store/modules/Auth/actions";

const authSlice = createSlice({
  name: "auth",
  initialState: authInitState,
  reducers: authReducer,
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loginState.loading = "pending";
        state.loginState.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loginState.loading = "succeeded";
        state.loginState.error = null;
        state.authData.isAuthenticated = true;
        state.authData.auth = action.payload?.data;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loginState.loading = "failed";
        state.authData.isAuthenticated = false;
        state.loginState.error = action.payload;
      })
      .addCase(registerAsync.pending, (state) => {
        state.registerState.loading = "pending";
        state.registerState.error = null;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.registerState.loading = "succeeded";
        state.registerState.error = null;
        state.authData.isAuthenticated = true;
        state.authData.auth = action.payload?.data;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.registerState.loading = "failed";
        state.authData.isAuthenticated = false;
        state.registerState.error = action.payload;
      });
  },
});

export const selectAuthData = (state: AppState) => state.auth.authData;
export const selectLoginState = (state: AppState) => state.auth.loginState;
export const selectRegisterState = (state: AppState) =>
  state.auth.registerState;

export default authSlice.reducer;
