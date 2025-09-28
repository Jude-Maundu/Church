import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#fdfcf5", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <SideMenu />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
