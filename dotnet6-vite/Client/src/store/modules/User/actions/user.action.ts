import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getUser } from "@chia/api/user";
import type { UUID } from "@chia/util/types";

export const getAllUsersAsync = createAsyncThunk(
  "user/getAllUsers",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await getAllUsers(token);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserAsync = createAsyncThunk(
  "user/getUser",
  async (data: { token: string; id: UUID }, { rejectWithValue }) => {
    try {
      const { token, id } = data;
      const response = await getUser(token, id);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
