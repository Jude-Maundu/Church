import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

    // Reinstated event listeners for the Offcanvas (SideMenu)
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      const showHandler = () => setMenuOpen(true);
      const hideHandler = () => setMenuOpen(false);

      sideMenu.addEventListener("show.bs.offcanvas", showHandler);
      sideMenu.addEventListener("hide.bs.offcanvas", hideHandler);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        sideMenu.removeEventListener("show.bs.offcanvas", showHandler);
        sideMenu.removeEventListener("hide.bs.offcanvas", hideHandler);
      };
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const collapseNavbar = () => {
    const nav = document.getElementById('navbarNav');
    if (!nav || !window.bootstrap) return;
    let instance = window.bootstrap.Collapse.getInstance(nav);
    if (!instance) instance = new window.bootstrap.Collapse(nav, { toggle: false });
    instance.hide();
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
      collapseNavbar();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // collapse navbar after navigation
    collapseNavbar();
  };

  return (
    <div className="floating-navbar-container">
      <nav
        className={`navbar navbar-expand-lg py-2 glass-navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "shifted" : ""}`}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a
            className="navbar-brand d-flex align-items-center fw-bold text-white"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <img
              src="evangeist-logoz.jpg"
              alt="Logo"
              className={`nav-logo ${scrolled ? 'small' : ''}`}
            />
            <span className="ms-2 logo-text">Evangelist</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars fs-4 text-white"></i>
          </button>

          {/* Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex flex-lg-row flex-column align-items-lg-center gap-3 mt-3 mt-lg-0">
              {/* Function to get dynamic link styles */}
              {['home', 'about', 'contact', 'announcements'].map((sectionName) => {
                const isActive = (location.pathname === '/' && activeSection === sectionName) || 
                                 (location.pathname === `/${sectionName}` && sectionName !== 'home' && sectionName !== 'about');

                // Handle the first two (scrolling to sections)
                if (sectionName === 'home' || sectionName === 'about') {
                  return (
                    <li className="nav-item" key={sectionName}>
                      <span
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        onClick={() => scrollToSection(sectionName)}
                      >
                        <i className={`fa-solid fa-${sectionName === 'home' ? 'house' : 'star'} me-1`}></i> {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
                      </span>
                    </li>
                  );
                }
                
                // Handle the last two (routing)
                return (
                  <li className="nav-item" key={sectionName}>
                    <Link className={`nav-link ${isActive ? 'active' : ''}`} to={`/${sectionName}`} onClick={() => collapseNavbar()}>
                      <i className={`fa-solid fa-${sectionName === 'contact' ? 'phone' : 'bullhorn'} me-1`}></i> {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
                    </Link>
                  </li>
                );
              })}

              {/* Side Menu Toggle */}
              <button
                className="btn btn-glass ms-lg-3 mt-3 mt-lg-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sideMenu"
              >
                <i className="fa fa-bars me-1"></i> Menu
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;