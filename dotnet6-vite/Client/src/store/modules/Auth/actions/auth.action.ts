import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "@chia/api/auth";
import type { Email, Password } from "@chia/shared/types";
import type { RegisterDto } from "@chia/shared/interface/register.dto";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (data: { email: Email; password: Password }, { rejectWithValue }) => {
    try {
      const { email, password } = data;
      const response = await login(email, password);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerAsync = createAsyncThunk(
  "auth/register",
  async (data: RegisterDto, { rejectWithValue }) => {
    try {
      const response = await register(data);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
