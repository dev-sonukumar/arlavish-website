import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./Slice/LoginSlice";
import Service from "./Slice/Service";
import Teacher from "./Slice/Teacher";
import Contact from "./Slice/Contact";
import Blog from "./Slice/Blog";
const rootReducer = combineReducers({
  auth: authSlice,
  service: Service,
  teacher: Teacher,
  contact: Contact,
  blog: Blog,
});

export default rootReducer;
