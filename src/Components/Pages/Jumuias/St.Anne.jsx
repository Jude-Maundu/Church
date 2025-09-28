import React from "react";
import { Link } from "react-router-dom";

const StAnne = () => {
  return (
    <div>
      {/* Hero Section with Church-themed Background */}
      <section
        className="py-5 d-flex flex-column justify-content-center align-items-center"
        style={{
          background: `url('https://www.transparenttextures.com/patterns/stained-glass.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "35vh",
          position: "relative",
        }}
      >
        {/* Glass-style Hero Card */}
        <div
          className="p-4 rounded-4 shadow-lg text-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            maxWidth: "700px",
            color: "#6f4e37",
          }}
        >
          <h1 className="display-4 fw-bold">
            St <span style={{ color: "#ffeb3b" }}>Anne</span>
          </h1>
          <p className="lead mt-3 text-center">
            Welcome to the St. Anne community. Discover our history, events, and
            spiritual activities. Join us in celebrating faith, hope, and fellowship.
          </p>
          <Link
            to="/contact"
            className="btn"
            style={{
              backgroundColor: "#6f4e37",
              color: "white",
              borderRadius: "50px",
              padding: "10px 25px",
              marginTop: "15px",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="container my-5">
        <div
          id="stAnneCarousel"
          className="carousel slide rounded-4 shadow-lg overflow-hidden"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#stAnneCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#stAnneCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#stAnneCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/1200x500"
                className="d-block w-100"
                alt="First Slide"
                style={{ objectFit: "cover", height: "500px" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                <h5>First Slide Label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x500"
                className="d-block w-100"
                alt="Second Slide"
                style={{ objectFit: "cover", height: "500px" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                <h5>Second Slide Label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x500"
                className="d-block w-100"
                alt="Third Slide"
                style={{ objectFit: "cover", height: "500px" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3">
                <h5>Third Slide Label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#stAnneCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#stAnneCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded-circle p-2"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5">
        <h2 className="fw-bold mb-4" style={{ color: "#6f4e37" }}>
          About St. Anne
        </h2>
        <p className="text-muted fs-5">
          St. Anne is revered as the mother of the Virgin Mary and the grandmother of Jesus Christ.
          She is a symbol of faith, patience, and dedication to God. Our parish community honors her
          legacy through regular worship, events, and youth activities. Join us to celebrate her
          teachings and strengthen your spiritual journey.
        </p>
      </section>

      {/* Events Section */}
      <section className="container my-5">
        <h2 className="fw-bold mb-4 text-center" style={{ color: "#6f4e37" }}>
          Upcoming Events
        </h2>
        <div className="row g-4">
          {[
            {
              title: "St. Anne Feast Day",
              desc: "Celebrate St. Anne’s Feast with prayers, fellowship, and community activities.",
              date: "July 26, 2025",
              img: "https://via.placeholder.com/400x200",
            },
            {
              title: "Prayer Meeting",
              desc: "Join us for a monthly prayer meeting in honor of St. Anne.",
              date: "August 15, 2025",
              img: "https://via.placeholder.com/400x200",
            },
            {
              title: "Youth Fellowship",
              desc: "Engage with other youth in faith-based activities and service.",
              date: "Every 1st Sunday",
              img: "https://via.placeholder.com/400x200",
            },
          ].map((event, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card shadow-sm border-0 h-100 rounded-4 hover-card">
                <img
                  src={event.img}
                  className="card-img-top rounded-top-4"
                  alt={event.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: "#6f4e37" }}>
                    {event.title}
                  </h5>
                  <p className="card-text text-muted">{event.desc}</p>
                  <p className="small text-muted">📅 {event.date}</p>
                  <Link to="/events" className="btn btn-brown btn-sm px-3 py-2">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StAnne;
