import { createSlice } from "@reduxjs/toolkit";
import { userInitState } from "@chia/store/modules/User/state";
import { userReducer } from "@chia/store/modules/User/reducers";
import { type AppState } from "@chia/store";
import { getAllUsersAsync, getUserAsync } from "@chia/store/modules/User/actions";

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
    },
});

export const selectAllUsers = (state: AppState) => state.user.allUsers;
export const selectUser = (state: AppState) => state.user.user;

export default userSlice.reducer;