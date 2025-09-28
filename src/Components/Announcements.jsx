import React from "react";

const Announcements = () => {
  // Sample announcements (replace with dynamic data if available)
  const announcements = [
    {
      title: "Sunday Service Time Change",
      date: "Sept 22, 2025",
      description:
        "Please note that the Sunday 9:00 AM service will start at 9:30 AM this week due to a special event.",
    },
    {
      title: "Youth Fellowship Meeting",
      date: "Sept 25, 2025",
      description:
        "All youth members are invited to our monthly fellowship meeting at the parish hall at 5:00 PM.",
    },
    {
      title: "Community Outreach Event",
      date: "Oct 2, 2025",
      description:
        "Join us as we visit local families in need. Volunteers are encouraged to participate.",
    },
  ];

  return (
    <section
      id="announcements"
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
        {/* Section Title */}
        <div className="text-center mb-5 mt-5">
          <h2 className="fw-bold display-5 text-dark">Church Announcements</h2>
          <p className="lead text-dark">
            Stay updated with all the latest news and announcements from St John the Evangelist Parish.
          </p>
        </div>

        <div className="row g-4">
          {announcements.map((ann, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="p-4 rounded-4 shadow-lg glass-card h-100">
                <h4 className="fw-bold text-dark mb-2">{ann.title}</h4>
                <p className="text-muted mb-3"><i className="fa-solid fa-calendar me-2"></i>{ann.date}</p>
                <p className="text-dark">{ann.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
