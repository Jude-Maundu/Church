import React, { useEffect, useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide footer
        setVisible(false);
      } else {
        // scrolling up → show footer
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer
      className={`text-center py-3 fixed-bottom transition-footer ${
        visible ? "show" : "hide"
      }`}
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <div className="container">
        <p className="mb-2 small">
          © {new Date().getFullYear()} St John the Evangelist karen . All rights reserved.
        </p>
        <div>
          <a href="St John the Evangelist Parish- Karen" className="text-white mx-2">
            <i className="fa-brands fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="fa-brands fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="text-white mx-2">
            <i className="fa-brands fa-youtube fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
