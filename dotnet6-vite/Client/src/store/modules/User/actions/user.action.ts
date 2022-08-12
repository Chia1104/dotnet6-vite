import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getUser,
  postUserArmor,
  deleteUserArmor,
  postUserHeadgear,
  deleteUserHeadgear,
  postUserWeapon,
  deleteUserWeapon,
  postUserShield,
  deleteUserShield,
} from "@chia/api/user";
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

export const postUserArmorAsync = createAsyncThunk(
  "user/postUserArmor",
  async (data: { token: string; armorId: UUID }, { rejectWithValue }) => {
    try {
      const { token, armorId } = data;
      const response = await postUserArmor(token, armorId);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUserArmorAsync = createAsyncThunk(
  "user/deleteUserArmor",
  async (data: { token: string }, { rejectWithValue }) => {
    try {
      const { token } = data;
      const response = await deleteUserArmor(token);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postUserHeadgearAsync = createAsyncThunk(
  "user/postUserHeadgear",
  async (data: { token: string; headgearId: UUID }, { rejectWithValue }) => {
    try {
      const { token, headgearId } = data;
      const response = await postUserHeadgear(token, headgearId);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUserHeadgearAsync = createAsyncThunk(
  "user/deleteUserHeadgear",
  async (data: { token: string }, { rejectWithValue }) => {
    try {
      const { token } = data;
      const response = await deleteUserHeadgear(token);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postUserWeaponAsync = createAsyncThunk(
  "user/postUserWeapon",
  async (data: { token: string; weaponId: UUID }, { rejectWithValue }) => {
    try {
      const { token, weaponId } = data;
      const response = await postUserWeapon(token, weaponId);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUserWeaponAsync = createAsyncThunk(
  "user/deleteUserWeapon",
  async (data: { token: string }, { rejectWithValue }) => {
    try {
      const { token } = data;
      const response = await deleteUserWeapon(token);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postUserShieldAsync = createAsyncThunk(
  "user/postUserShield",
  async (data: { token: string; shieldId: UUID }, { rejectWithValue }) => {
    try {
      const { token, shieldId } = data;
      const response = await postUserShield(token, shieldId);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUserShieldAsync = createAsyncThunk(
  "user/deleteUserShield",
  async (data: { token: string }, { rejectWithValue }) => {
    try {
      const { token } = data;
      const response = await deleteUserShield(token);
      if (response.status !== 200)
        return rejectWithValue(response.data.message);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
