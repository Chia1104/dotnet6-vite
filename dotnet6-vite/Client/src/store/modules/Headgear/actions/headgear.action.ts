import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllHeadgear, getHeadgear } from "@chia/api/item";
import type { UUID } from "@chia/util/types";

export const getAllHeadgearAsync = createAsyncThunk(
  "headgear/getAllHeadgear",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllHeadgear();
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getHeadgearAsync = createAsyncThunk(
  "headgear/getHeadgear",
  async (id: UUID, { rejectWithValue }) => {
    try {
      const response = await getHeadgear(id);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
