import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createcontactApi } from "../../Api_url";
import { toast } from "react-toastify";

// create contact
export const createcontact = createAsyncThunk(
  "createcontact/contact",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(createcontactApi, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
    status: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create contact
      .addCase(createcontact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createcontact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts.push(action.payload.contact);
        toast.success(action.payload.message);
      })
      .addCase(createcontact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      })
      
  },
});

export default contactSlice.reducer;
