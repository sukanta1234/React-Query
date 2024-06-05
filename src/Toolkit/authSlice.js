import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../API/Axios/axiosInstance";
import { toast } from "react-toastify";
export const STATUS = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
});
export const loginApi = createAsyncThunk("/login", async (data) => {
  let response = await axiosInstance.post("/login", data);
  return response.data;
});
const authSlice = createSlice({
  name: "login",
  initialState: {
    status: STATUS.IDLE,
    isLoging: false,
    isRedirect: null,
  },
  reducers: {
    checkToken: (state, { payload }) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.isLoging = true;
      }
    },
    removeToken: (state) => {
      state.isLoging = false;
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("image");
      localStorage.removeItem("name")
    },
    resetRediect:(state, { payload }) => {
      state.isRedirect = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(loginApi.fulfilled, (state, { payload }) => {
        state.status = STATUS.IDLE;
        if (payload.status === 200) {
          toast.success(payload.message);
          state.isLoging = true;
          state.isRedirect = "/";
          localStorage.setItem("token", payload.token);
          localStorage.setItem("id", payload.user._id);
          localStorage.setItem("image", payload.user.photo);
          localStorage.setItem("name",payload.user.name)
        }
      })
      .addCase(loginApi.rejected, (state) => {
        state.status = STATUS.IDLE;
        toast.error("error in Login....");
      });
  },
});
export const { checkToken, removeToken, resetRediect } = authSlice.actions;
export default authSlice.reducer;
