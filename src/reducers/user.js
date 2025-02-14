import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const verifyToken = createAsyncThunk(
  "user/verifyToken",
  async (token, { rejectWithValue }) => {
    const response = await api.get("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!token) {
      return rejectWithValue("Token inválido");
    }
    return await response.data;
  }
);

export const usertState = createSlice({
  name: "user",
  initialState: {
    isLoader: true,
    error: null,
    data: {
      _id: null,
      username: null,
      email: null,
      status: null,
      role: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyToken.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoader = false;
      })
      .addCase(verifyToken.rejected, (state, action) => {
        state.error = action.payload || "Token inválido o expirado";
        state.isLoader = true;
        localStorage.removeItem("@token");
      });
  },
});

export default usertState.reducer;
