import React from "react";

const NewsAndEvents = () => {
  const events = [
    {
      title: "Youth Fellowship Night",
      date: "Sept 28, 2025",
      description:
        "Join our youth for an evening of worship, games, and bonding at the parish hall.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Community Outreach",
      date: "Oct 5, 2025",
      description:
        "Be part of our mission to support local families in need. Volunteers are welcome.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Sunday Masses",
      date: "Every Sunday",
      description:
        "Weekly worship services with powerful sermons, praise, and fellowship.",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <section
      id="events"
      className="py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/church-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="text-center mb-5 mt-5">
          <h2 className="fw-bold display-5 text-dark">News & Events</h2>
          <p className="lead text-dark">
            Stay up to date with the latest happenings and upcoming events at St John the Evangelist Parish.
          </p>
        </div>

        <div className="row g-4">
          {events.map((event, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card shadow-lg rounded-4 h-100 glass-card border-0">
                <img
                  src={event.image}
                  className="card-img-top rounded-top-4"
                  alt={event.title}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{event.title}</h5>
                  <p className="text-muted mb-2">
                    <i className="fa-solid fa-calendar me-2"></i>{event.date}
                  </p>
                  <p className="card-text text-dark">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
