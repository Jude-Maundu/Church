import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import Assistant from "./Assistant";
import { ContentProvider } from "../ContentContext";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <ContentProvider>
      <div style={{ backgroundColor: "#fdfcf5", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />

        {/* Body Section */}
        <div style={{ display: "flex", flexGrow: 1 }}>
          <SideMenu />
          <main style={{ flexGrow: 1, padding: "20px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        <Footer />
        <Assistant />
      </div>
    </ContentProvider>
  );
};

export default Layout;
