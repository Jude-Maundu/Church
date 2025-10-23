import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#fdfcf5", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Body Section */}
      <div style={{ display: "flex", flexGrow: 1 }}>
        <SideMenu />
        <main style={{ flexGrow: 1, padding: "20px" }}>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
