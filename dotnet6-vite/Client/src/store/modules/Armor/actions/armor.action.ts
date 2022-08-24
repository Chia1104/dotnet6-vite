import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArmors, getArmor } from "@chia/api/item";
import type { UUID } from "@chia/shared/types";

export const getAllArmorsAsync = createAsyncThunk(
  "armor/getAllArmor",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllArmors();
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getArmorAsync = createAsyncThunk(
  "armor/getArmor",
  async (id: UUID, { rejectWithValue }) => {
    try {
      const response = await getArmor(id);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
