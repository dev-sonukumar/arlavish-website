import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getallserviceApi,
} from "../../Api_url";
import { toast } from "react-toastify";

// Helper function to get token
const getToken = () => localStorage.getItem("token");

// Common headers with token
const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

// create service
// export const createservice = createAsyncThunk(
//   "createservice/service",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(createserviceApi, data, { headers: getHeaders() });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Service creation failed");
//     }
//   }
// );

// update service
// export const updateservice = createAsyncThunk(
//   "updateservice/service",
//   async ({ selectedId, data }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`${updateserviceApi}/${selectedId}`, data, { headers: getHeaders() });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Service update failed");
//     }
//   }
// );

// get all services
export const getallservice = createAsyncThunk(
  "getallservice/service",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(getallserviceApi, { headers: getHeaders() });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch services");
    }
  }
);

// delete service
// export const deleteservice = createAsyncThunk(
//   "deleteservice/service",
//   async (serviceId, { rejectWithValue }) => {
//     try {
//       await axios.delete(`${deleteserviceApi}/${serviceId}`, { headers: getHeaders() });
//       return serviceId;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Service deletion failed");
//     }
//   }
// );

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
    status: "idle",
    loadingStatus: "idle",
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create service
      // .addCase(createservice.pending, (state) => {
      //   state.loadingStatus = "loading";
      // })
      // .addCase(createservice.fulfilled, (state, action) => {
      //   state.loadingStatus = "succeeded";
      //   state.services.push(action.payload.categoryEntry); 
      //   toast.success(action.payload.message || "Service created successfully");
      // })
      // .addCase(createservice.rejected, (state, action) => {
      //   state.loadingStatus = "failed";
      //   state.error = action.payload;
      //   toast.error(action.payload);
      // })

      // Update service
      // .addCase(updateservice.pending, (state) => {
      //   state.loadingStatus = "loading";
      // })
      // .addCase(updateservice.fulfilled, (state, action) => {
      //   state.loadingStatus = "succeeded";
      //   const updatedService = action.payload.updatedCategoryEntry;
      //   const existingServiceIndex = state.services.findIndex(
      //     (service) => service._id === updatedService._id
      //   );
      //   if (existingServiceIndex !== -1) {
      //     state.services[existingServiceIndex] = updatedService;
      //   }
      //   toast.success(action.payload.message || "Service updated successfully");
      // })
      // .addCase(updateservice.rejected, (state, action) => {
      //   state.loadingStatus = "failed";
      //   state.error = action.payload;
      //   toast.error(action.payload);
      // })

      // Get all services
      .addCase(getallservice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getallservice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.services = action.payload;
      })
      .addCase(getallservice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        toast.error(action.payload);
      })

      // Delete service
      // .addCase(deleteservice.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(deleteservice.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.services = state.services.filter((service) => service._id !== action.payload);
      //   toast.success("Service deleted successfully");
      // })
      // .addCase(deleteservice.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.payload;
      //   toast.error(action.payload);
      // });
  },
});

export default serviceSlice.reducer;
