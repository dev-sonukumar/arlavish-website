import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar } from "../components/ComponentsIndex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <>
      <ToastContainer />
      <Container>
        {/* <Navbar /> */}
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
