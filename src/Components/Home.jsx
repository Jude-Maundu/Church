import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      {/* Hero Banner */}
      <section
        className="home-hero d-flex flex-column align-items-center justify-content-center text-center"
      >
        <div
          className="hero-content mt-3 p-4 rounded-4 shadow-lg"
        >
          <h1 className="fw-bold mb-3 display-4 text-dark">
            Welcome to <br /> St John the Evangelist Parish
          </h1>
          <p className="lead mb-0 text-dark">
            A place of worship, community, and growth. Join us in celebrating
            faith, hope, and love through our services, events, and fellowship.
          </p>
          <div className="mt-4">
            <Link
              to="/about"
              className="btn btn-light me-3 px-4 py-2 hero-btn"
            >
              <i className="fas fa-info-circle me-2"></i>
              Learn More
            </Link>
            <Link
              to="/events"
              className="btn btn-dark px-4 py-2 hero-btn"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
      
      {/* Mass Schedule + Latest Masses Section */}
      <section
        className="container py-5 mass-section"
      >
        <div className="row g-4 text-center align-items-stretch">
          {/* Mass Schedule Card */}
          <div className="col-md-6">
            <div
              className="mass-schedule-card p-5 shadow-lg h-100"
            >
              <div className="mb-4">
                <i className="fas fa-church fa-3x mb-3"></i>
                <h3 className="fw-bold mb-2">Mass Schedule</h3>
                <div className="divider"></div>
              </div>
              <div className="fs-5">
                <p>
                  📅 <strong>Sunday:</strong> 8:00 AM & 10:00 AM
                </p>
                <p>
                  📅 <strong>Wednesday:</strong> 6:00 PM
                </p>
                <p>
                  📅 <strong>Friday (Adoration):</strong> 6:00 PM
                </p>
              </div>
              <p className="mt-4 fst-italic text-light small">
                “Come, let us worship and bow down before the Lord our Maker.”
              </p>
            </div>
          </div>
          {/* Latest Masses Card */}
          <div className="col-md-6">
            <div
              className="latest-masses-card p-5 shadow-lg bg-white h-100"
            >
              <div className="mb-4">
                <i className="fas fa-video fa-3x mb-3"></i>
                <h3 className="fw-bold mb-2">Latest Masses</h3>
                <div className="divider"></div>
              </div>
              <ul className="list-unstyled fs-5 text-start">
                <li className="mb-3">
                  <a
                    href="https://youtube.com/@stjohntheevangelistparishk3514?si=rMeWu3bgJwfGzrpc"
                    className="latest-mass-link text-decoration-none d-flex align-items-center"
                  >
                    <i className="fas fa-play-circle me-2 text-warning"></i>
                    Sunday Mass – Sept 15, 2025
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://youtube.com/@stjohntheevangelistparishk3514?si=rMeWu3bgJwfGzrpc"
                    className="latest-mass-link text-decoration-none d-flex align-items-center"
                  >
                    <i className="fas fa-play-circle me-2 text-warning"></i>
                    Morning Mass – Sept 14, 2025
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@stjohntheevangelistparishk3514?si=rMeWu3bgJwfGzrpc"
                    className="latest-mass-link text-decoration-none d-flex align-items-center"
                  >
                    <i className="fas fa-play-circle me-2 text-warning"></i>
                    Evening Mass – Sept 13, 2025
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://youtube.com/@stjohntheevangelistparishk3514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-btn btn btn-outline-dark px-4 py-2 rounded-pill"
                >
                  <i className="fab fa-youtube me-2 text-danger"></i> Watch More on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section py-5 text-dark"
      >
        <div className="container text-center">
          <div className="mb-5">
            <h2 className="fw-bold mb-2">About Us</h2>
            <div className="divider"></div>
            <p className="mt-3 text-muted fs-5">
              We are a faith-driven community rooted in worship, service, and
              love.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <InfoCard
                icon="fa-church"
                title="Our Church"
                imageSrc={process.env.PUBLIC_URL + "/DSC_0150.jpg"}
                imageAlt="Church building"
              >
                A sacred space where we gather to celebrate the sacraments,
                strengthen faith, and grow in love.
              </InfoCard>
            </div>
            <div className="col-md-4">
              <InfoCard
                icon="fa-user-tie"
                title="Our Priests"
                imageSrc={process.env.PUBLIC_URL + "/DSC_1655.jpg"}
                imageAlt="Priests"
              >
                Faithful shepherds who guide our parish with wisdom, humility,
                and devotion to Christ’s mission.
              </InfoCard>
            </div>
            <div className="col-md-4">
              <InfoCard
                icon="fa-people-group"
                title="Our Community"
                imageSrc={process.env.PUBLIC_URL + "/IMG_3835.jpg"}
                imageAlt="Community"
              >
                United in spirit, our parish family stands together in prayer,
                service, and compassion for one another.
              </InfoCard>
            </div>
          </div>
          <div className="mt-5">
            <Link
              to="/contact"
              className="contact-btn btn btn-outline-dark px-4 py-2 rounded-pill"
            >
              <i className="fas fa-envelope me-2"></i> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
