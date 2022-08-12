import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllShields, getShield } from "@chia/api/item";
import type { UUID } from "@chia/util/types";

export const getAllShieldsAsync = createAsyncThunk(
  "shield/getAllShields",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllShields();
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getShieldAsync = createAsyncThunk(
  "shield/getShield",
  async (id: UUID, { rejectWithValue }) => {
    try {
      const response = await getShield(id);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
