import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginapi } from "../../Api_url";
import { toast } from "react-toastify";

// api calls
export const login = createAsyncThunk(
  "login/auth",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(loginapi, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("_id", res.data._id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    error: null,
    message: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
        toast.success(action.payload.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        // toast.error(action.payload);
      });
  },
});

export default authSlice.reducer;
