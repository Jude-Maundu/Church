import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InfoCard from "./InfoCard";
import "./Home.css";

const Home = () => {
  const [readings, setReadings] = useState(null);
  const [readingsLoading, setReadingsLoading] = useState(true);
  const [rosary, setRosary] = useState(null);
  const [rosaryLoading, setRosaryLoading] = useState(true);

  // Helper function to get today's mystery
  const getMysteryOfTheDay = () => {
    const day = new Date().getDay(); // Sunday = 0
    switch (day) {
      case 0:
        return "Glorious Mysteries"; // Sunday
      case 1:
        return "Joyful Mysteries"; // Monday
      case 2:
        return "Sorrowful Mysteries"; // Tuesday
      case 3:
        return "Glorious Mysteries"; // Wednesday
      case 4:
        return "Luminous Mysteries"; // Thursday
      case 5:
        return "Sorrowful Mysteries"; // Friday
      case 6:
        return "Joyful Mysteries"; // Saturday
      default:
        return "";
    }
  };

  useEffect(() => {
    // Fetch Daily Readings
    const fetchReadings = async () => {
      try {
        const res = await axios.get(
          "https://rapidapi.com/matheusfrota/api/catholic-bible-readings/"
        );
        setReadings(res.data);
      } catch (error) {
        console.error("Error fetching readings:", error);
      } finally {
        setReadingsLoading(false);
      }
    };

    // Fetch Daily Rosary
    const fetchRosary = async () => {
      try {
        const date = new Date().toISOString().split("T")[0]; // today’s date in YYYY-MM-DD
        const res = await axios.get(
          `https://liturgy.day/api/rosary-days/${date}`
        );
        setRosary(res.data);
      } catch (error) {
        console.error("Error fetching rosary:", error);
      } finally {
        setRosaryLoading(false);
      }
    };

    fetchReadings();
    fetchRosary();
  }, []);

  return (
    <div id="home">
      {/* Hero Banner */}
      <section className="home-hero d-flex flex-column align-items-center justify-content-center text-center">
        <div className="hero-content mt-3 p-4 rounded-4 shadow-lg">
          <h1 className="fw-bold mb-3 display-4 text-dark">
            Welcome to <br /> St John the Evangelist Parish
          </h1>
          <p className="lead mb-0 text-dark">
            A place of worship, community, and growth. Join us in celebrating
            faith, hope, and love through our services, events, and fellowship.
          </p>
          <div className="mt-4">
            <Link to="/about" className="btn btn-light me-3 px-4 py-2 hero-btn">
              <i className="fas fa-info-circle me-2"></i> Learn More
            </Link>
            <Link to="/events" className="btn btn-dark px-4 py-2 hero-btn">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Mass Schedule + Latest Masses Section */}
      <section className="container py-5">
        <div className="row g-4 text-center align-items-stretch">
          {/* 🕊️ Mass Schedule Card */}
          <div className="col-md-6">
            <div
              className="p-5 rounded-4 shadow-lg h-100 text-white"
              style={{
                background: "linear-gradient(135deg, #6f4e37, #8b5a2b)",
              }}
            >
              <div className="mb-4">
                <i className="fas fa-church fa-3x mb-3"></i>
                <h3 className="fw-bold mb-2">Mass Schedule</h3>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#f8f9fa",
                    margin: "0 auto",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>

              <div className="fs-5">
                <p>
                  📅 <strong>Sunday:</strong> 7:00 AM, 9:00 AM & 10:00 AM
                </p>
                <p>
                  📅 <strong>Weekdays:</strong> 6:00 PM
                </p>
                <p>
                  📅 <strong>Thursdays (Adoration):</strong> 6:00 PM
                </p>
              </div>

              <p className="mt-4 fst-italic small">
                “Come, let us worship and bow down before the Lord our Maker.”
              </p>
            </div>
          </div>

          {/* 🎥 Latest Masses Card */}
          <div className="col-md-6">
            <div
              className="p-5 rounded-4 shadow-lg h-100 d-flex flex-column justify-content-center"
              style={{
                background: "linear-gradient(135deg, #fff, #f8f9fa)",
              }}
            >
              <div className="mb-4">
                <i className="fas fa-video fa-3x mb-3 text-danger"></i>
                <h3 className="fw-bold mb-2 text-dark">Watch Latest Masses</h3>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#6f4e37",
                    margin: "0 auto",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>

              <p className="fs-5 text-muted mb-4">
                Watch our latest and past Masses from St. John the Evangelist
                Parish on YouTube.
              </p>

              <div>
                <a
                  href="https://youtube.com/@stjohntheevangelistparishk3514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger px-5 py-2 rounded-pill fw-semibold shadow-sm"
                >
                  <i className="fab fa-youtube me-2"></i> Visit YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Spiritual Content Section */}
      <section className="py-5 readings-section bg-light text-dark">
        <div className="container text-center">
          <div className="mb-5">
            <i className="fas fa-pray fa-3x text-warning mb-3"></i>
            <h2 className="fw-bold mb-2">Daily Spiritual Devotions</h2>
            <div className="divider"></div>
            <p className="text-muted fs-5">
              Nourish your soul with today's readings and rosary prayers.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Daily Readings Card */}
            <div className="col-lg-6">
              {readingsLoading ? (
                <p className="text-muted">Fetching today's readings...</p>
              ) : readings ? (
                <div className="reading-card mx-auto p-4 rounded-4 shadow-lg bg-white">
                  <h4 className="fw-bold text-dark mb-2">{readings.title}</h4>
                  <p className="text-muted mb-3">
                    <i className="fa-solid fa-calendar me-2"></i>{" "}
                    {readings.date}
                  </p>
                  <p className="text-dark fs-5">{readings.content}</p>
                  {readings.source && (
                    <a
                      href={readings.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark mt-3 rounded-pill px-4 py-2"
                    >
                      <i className="fas fa-book-open me-2"></i> Read More
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-muted">No readings available for today.</p>
              )}
            </div>

            {/* Daily Rosary Card */}
            <div className="col-lg-6">
              {rosaryLoading ? (
                <p className="text-muted">Fetching today's rosary...</p>
              ) : rosary ? (
                <div className="rosary-card mx-auto p-4 rounded-4 shadow-lg bg-white">
                  <h4 className="fw-bold text-dark mb-2">Daily Rosary</h4>
                  <p className="text-muted mb-3">
                    <i className="fa-solid fa-calendar me-2"></i>{" "}
                    {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-dark fs-5">
                    🌿 Today's Rosary: {getMysteryOfTheDay()}
                    <ul className="mt-2 text-start">
                      {rosary.prayers?.map((prayer, idx) => (
                        <li key={idx}>{prayer}</li>
                      )) || <li>No rosary data available today.</li>}
                    </ul>
                  </p>
                  <a
                    href={rosary.pdf || "/rosary-guide.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark mt-3 rounded-pill px-4 py-2"
                  >
                    <i className="fas fa-pray me-2"></i> Download Rosary Guide
                  </a>
                </div>
              ) : (
                <p className="text-muted">No rosary available for today.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5 text-dark">
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
