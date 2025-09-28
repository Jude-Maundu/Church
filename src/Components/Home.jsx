import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          minHeight: "80vh",
          backgroundImage: "url('DSC_0176-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          padding: "80px 20px",
        }}
      >
        <div
          className="mt-3 p-4 rounded-4 shadow-lg"
          style={{ maxWidth: "750px", background: "rgba(255,255,255,0.8)" }}
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
              className="btn btn-light me-3 px-4 py-2"
              style={{
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <i className="fas fa-info-circle me-2"></i>
              Learn More
            </Link>
            <Link
              to="/events"
              className="btn btn-dark px-4 py-2"
              style={{
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      <hr />

      {/* Mass Schedule + Latest Masses Section */}
      <section className="container py-5">
        <div className="row g-4 text-center">
          {/* Mass Schedule Card - Brown */}
          <div className="col-md-6">
            <div
              className="p-5 shadow-lg rounded h-100 d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "#8B4513",
                color: "#fff",
                borderRadius: "20px",
                minHeight: "450px", // Increased height
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 className="fw-bold mb-4">📖 Mass Schedule</h3>
              <p className="mb-3 fs-5">📅 Sunday: 8:00 AM & 10:00 AM</p>
              <p className="mb-3 fs-5">📅 Wednesday: 6:00 PM</p>
              <p className="mb-0 fs-5">📅 Friday: 6:00 PM (Adoration)</p>
            </div>
          </div>

          {/* Latest Masses Card with Links */}
          <div className="col-md-6">
            <div
              className="p-5 shadow-lg rounded bg-white h-100 d-flex flex-column justify-content-center"
              style={{
                borderRadius: "20px",
                minHeight: "450px", // Increased height to match
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 className="fw-bold mb-4" style={{ color: "#6f4e37" }}>
                🎥 Latest Masses
              </h3>
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item">
                  <a
                    href="https://youtube.com/@stjohntheevangelistparishk3514?si=rMeWu3bgJwfGzrpc"
                    className="text-decoration-none"
                    style={{ color: "#6f4e37", fontWeight: "500" }}
                  >
                    Sunday Mass – Sept 15, 2025
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://youtube.com/@stjohntheevangelistparishk3514?si=rMeWu3bgJwfGzrpc"
                    className="text-decoration-none"
                    style={{ color: "#6f4e37", fontWeight: "500" }}
                  >
                    Morning Mass – Sept 14, 2025
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://youtube.com/@stjohntheevangelistparishk3514?si=rMeWu3bgJwfGzrpc"
                    className="text-decoration-none"
                    style={{ color: "#6f4e37", fontWeight: "500" }}
                  >
                    Evening Mass – Sept 13, 2025
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #3e2723 0%, #6f4e37 100%)",
          padding: "80px 20px",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-5">About Us</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="card shadow-lg border-0 h-100"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  borderRadius: "15px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src="https://via.placeholder.com/400x250"
                  className="card-img-top rounded-top"
                  alt="Church building"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#6f4e37" }}>
                    Our Church
                  </h5>
                  <p className="card-text text-muted">
                    A place of worship and fellowship for all people seeking
                    God’s love.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card shadow-lg border-0 h-100"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  borderRadius: "15px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src="https://via.placeholder.com/400x250"
                  className="card-img-top rounded-top"
                  alt="Priests"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#6f4e37" }}>
                    Our Priests
                  </h5>
                  <p className="card-text text-muted">
                    Leading with faith and wisdom, guiding our community closer
                    to God.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card shadow-lg border-0 h-100"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  borderRadius: "15px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src="https://via.placeholder.com/400x250"
                  className="card-img-top rounded-top"
                  alt="Community"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#6f4e37" }}>
                    Our Community
                  </h5>
                  <p className="card-text text-muted">
                    A strong family of believers who support one another in
                    faith and life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link
              to="/contact"
              className="btn btn-light px-4 py-2"
              style={{
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;