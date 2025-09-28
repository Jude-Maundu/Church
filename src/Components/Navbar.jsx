import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
        const sections = ["home", "about"];
        let current = "home";
        sections.forEach((section) => {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 150) {
            current = section;
          }
        });
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      sideMenu.addEventListener("show.bs.offcanvas", () => setMenuOpen(true));
      sideMenu.addEventListener("hide.bs.offcanvas", () => setMenuOpen(false));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sideMenu) {
        sideMenu.removeEventListener("show.bs.offcanvas", () =>
          setMenuOpen(true)
        );
        sideMenu.removeEventListener("hide.bs.offcanvas", () =>
          setMenuOpen(false)
        );
      }
    };
  }, [location]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top glass-navbar ${
        scrolled ? "scrolled" : ""
      } ${menuOpen ? "shifted" : ""}`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo + Name */}
        <a
          className="navbar-brand d-flex align-items-center fw-bold text-white"
          href="#home"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="evangeist-logoz.jpg"
            alt="Logo"
            className={`nav-logo ${scrolled ? "small" : ""}`}
          />
          <span className="ms-2">Evangelist</span>
        </a>

        {/* Collapse Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex flex-lg-row flex-column align-items-lg-center align-items-start gap-2 mt-2 mt-lg-0">
            <li className="nav-item">
              <span
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                onClick={() => scrollToSection("home")}
              >
                <i className="fa-solid fa-house me-1"></i> Home
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                onClick={() => scrollToSection("about")}
              >
                <i className="fa-solid fa-star me-1"></i> About us
              </span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="fa-solid fa-phone me-1"></i> Contact
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/announcements">
                <i className="fa-solid fa-bullhorn me-1"></i> Announcements
              </Link>
            </li>
          </ul>

          {/* Side Menu Toggle */}
          <button
            className="btn btn-outline-light ms-lg-3 mt-2 mt-lg-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sideMenu"
          >
            <i className="fa-solid fa-bars"></i> Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
