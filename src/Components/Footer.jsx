import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-4 pb-3">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start mt-3">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold footer-title">
              St. John the Evangelist
            </h5>
            <p>
              A welcoming Catholic community dedicated to living and sharing the
              Gospel of Jesus Christ.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold footer-title">
              Quick Links
            </h5>
            <div className="d-flex flex-column gap-2">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="/about" className="footer-link">
                About
              </Link>
              <Link to="/events" className="footer-link">
                Events
              </Link>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold footer-title">
              Contact
            </h5>
            <p>
              <i className="fas fa-home me-3"></i>Langata South Rd
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>info@stjohntheevangelistchurch.co.ke
            </p>
            <p>
              <i className="fas fa-phone me-3"></i>020-3882000 <br/>
              <i className="fas fa-phone me-3"></i>0797828903
            </p>
          </div>
        </div>

        <hr className="my-4" />

        {/* Social Media and Copyright */}
        <div className="row align-items-center justify-content-between">
          {/* Copyright */}
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} St. John the Evangelist Parish. All
              Rights Reserved.
            </p>
          </div>
          {/* Social Icons */}
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="social-icons">
              <a href="#!" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com/@stjohntheevangelistparishk3514"
                className="social-icon"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <strong>
          Developed by Jude Maundu
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
