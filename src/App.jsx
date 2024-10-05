import React from "react";
import Layout from "./Layout/Layout";
import "./App.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./Page/Login/Login";
import Home from "./Page/Home/Home";
import TeacherRegistration from "./Page/Auth/TeacherRegistration";
import Keyfeature from "./Page/Keyfeature/Keyfeature";
import Aboutus from "./Page/About/AboutUs";
import Contact from "./Page/Contact/Contact";
import Blog from "./Page/Blog/Blog";
import Teacher from "./Page/Teacher/Teacher";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="teacher" element={<Teacher />} />
      <Route path="Key-Features" element={<Keyfeature />} />
      <Route path="About-Us" element={<Aboutus />} />
      <Route path="blog" element={<Blog />} />
      <Route path="teacher-registration" element={<TeacherRegistration />} />
      <Route path="Contact-Us" element={<Contact />} />
      {/* login */}
      <Route path="login" element={<Login />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
