import React from "react";

const StAugustine = () => {
  return (
    <div>
      {/* Hero Section */}
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
            St <span style={{ color: "#ffeb3b" }}>Augustine</span>
          </h1>
          <p className="lead mt-3 text-center">
            St. Augustine Jumuias fosters spiritual growth, community involvement, and active participation in church activities.
          </p>
          <a
            href="/contact"
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
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5">
        <h2 className="fw-bold mb-4" style={{ color: "#6f4e37" }}>
          About St. Augustine Jumuias
        </h2>
        <p className="text-muted fs-5">
          St. Augustine Jumuias are dedicated to promoting spiritual growth and unity among members. They organize prayer meetings, community service, and social activities that strengthen fellowship and faith within the church.
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
              title: "Monthly Prayer Gathering",
              desc: "Join us every first Friday of the month to strengthen our faith together.",
              date: "First Friday of Every Month",
              img: "https://via.placeholder.com/400x200",
            },
            {
              title: "Community Service Day",
              desc: "Participate in community outreach programs organized by the Jumuias.",
              date: "September 10, 2025",
              img: "https://via.placeholder.com/400x200",
            },
          ].map((event, idx) => (
            <div className="col-md-6" key={idx}>
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
                  <a href="/events" className="btn btn-brown btn-sm px-3 py-2">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StAugustine;
