import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getallblogApi } from "../../Api_url";
import { toast } from "react-toastify";

// Fetch all blogs
export const getallblog = createAsyncThunk(
  "getallblog/blog",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(getallblogApi); // Use GET instead of POST
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch blogs"
      );
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    status: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all blogs
      .addCase(getallblog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallblog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload.blogs;
      })
      .addCase(getallblog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export default blogSlice.reducer;
