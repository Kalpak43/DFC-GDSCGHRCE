import React from "react";
import { Outlet } from "react-router-dom";
import ThemeToggler from "./components/ThemeToggler";
import Navbar from "./components/Navbar";
import "./App.css";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="fixed bottom-0 right-0 p-4">
        <ThemeToggler />
      </div>
    </>
  );
}

export default Layout;
