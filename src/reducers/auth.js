import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const fetchData = createAsyncThunk(
  "auth/fetchData",
  async (_, { getState, rejectWhiteValue }) => {
    const state = getState();
    const token = state.auth.userToken;

    if (!token) {
      return rejectWhiteValue("Token no disponible");
    }
    try {
      const response = api.get("http://localhost:4000/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWhiteValue(error.response.data || "Error en la peticion");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userToken: null,
    isLoding: false,
    isSingout: false,
    error: null,
    data: null,
  },
  reducers: {
    restoreToken: (state, action) => {
      state.userToken = action.payload;
      state.isLoding = false;
    },

    sigIn: (state, action) => {
      state.isSingout = false;
      state.userToken = action.payload;
    },
    singOut: (state) => {
      state.isSingout = true;
      state.userToken = null;
      localStorage.removeItem("@token");
    },
    setToken: (state, action) => {
      state.userToken = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoding = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoding = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      });
  },
});

export const { sigIn, singOut, restoreToken, setToken } = authSlice.actions;
export default authSlice.reducer;
