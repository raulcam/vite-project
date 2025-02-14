import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// Acción asíncrona para obtener los datos del usuario
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await api.get("users/me");
  return response.data;
});

const initialState = {
  token: null,
  isLoading: true,
  isSingOut: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //Restaura el token si es que lo hay
    restoretoken:(state, action)=>{
      state.token = action.payload;
      state.isLoading = false;
    },
    //Gruada el accestoken y lo lanza
    singIn:(state, action)=>{
      state.isSingOut = false;
      state.token = action.payload;
    },
    singOut:(state, action)=>{
      state.isSingOut = true;
      state.token = null;
      localStorage.removeItem("@token");
    }
  },
});

export const { singIn, singOut,restoretoken } = authSlice.actions;
export default authSlice.reducer;
