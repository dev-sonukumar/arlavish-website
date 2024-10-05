import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createteacherApi, getallteacherApi } from "../../Api_url";
import { toast } from "react-toastify";

// create teacher
export const createteacher = createAsyncThunk(
  "createteacher/teacher",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(createteacherApi, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// Fetch all teachers
export const getallteacher = createAsyncThunk(
  "getallteacher/teacher",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(getallteacherApi); // Use GET instead of POST
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch teachers"
      );
    }
  }
);

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    teachers: [],
    status: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create teacher
      .addCase(createteacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createteacher.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teachers.push(action.payload.teacher);
        toast.success(action.payload.message);
      })
      .addCase(createteacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      })
      // get all teachers
      .addCase(getallteacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallteacher.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teachers = action.payload;
      })
      .addCase(getallteacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export default teacherSlice.reducer;
