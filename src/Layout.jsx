import React from "react";
import { Outlet } from "react-router-dom";
import ThemeToggler from "./components/ThemeToggler";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
