import React from "react";

const UshersCommittee = () => {
  return (
    <div className="ushers-committee-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/DSC_0983.jpg"
          alt="Ushers Ministry"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Ushers Ministry</h1>
        <p className="lead text-muted">
          Do you feel called to serve your community and welcome others to
          Christ?
        </p>
      </section>

      {/* Introduction Section */}
      <section className="mb-5">
        <p className="fs-5">
          The Ushering Ministry at St. John the Evangelist Parish-Karen is
          searching for dedicated individuals to join our team. As an usher,
          you’ll be a Minister of Hospitality, playing a vital role in creating
          a warm and welcoming atmosphere for all who enter our church.
        </p>
      </section>

      {/* Roles and Benefits Section */}
      <section className="mb-5 row g-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">
            More Than Just Seating People
          </h2>
          <p>
            Ushers are the first point of contact for parishioners and visitors
            alike. You’ll ensure a smooth flow of the liturgy by greeting
            attendees, assisting with seating, taking up the collection, and
            maintaining a reverent atmosphere.
          </p>
          <h3 className="fw-bold mt-4">By serving as an usher, you’ll:</h3>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="fas fa-faith text-primary me-2"></i>Deepen your faith through active participation.</li>
            <li className="mb-2"><i className="fas fa-users text-primary me-2"></i>Develop your leadership skills.</li>
            <li className="mb-2"><i className="fas fa-heart text-primary me-2"></i>Become an integral part of our parish community.</li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/DSC_0747.jpg"
            alt="Ushers welcoming parishioners"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Requirements Section */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h2 className="fw-bold border-bottom pb-2 mb-3">
          We are looking for individuals who are:
        </h2>
        <ul className="list-unstyled d-flex flex-wrap justify-content-around">
          <li className="mb-2 fs-5"><i className="fas fa-smile-beam text-success me-2"></i>Friendly and welcoming</li>
          <li className="mb-2 fs-5"><i className="fas fa-tasks text-success me-2"></i>Well-organized</li>
          <li className="mb-2 fs-5"><i className="fas fa-users-cog text-success me-2"></i>A great team player</li>
          <li className="mb-2 fs-5"><i className="fas fa-cross text-success me-2"></i>Committed to the Catholic faith</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">Interested in Learning More?</h2>
        <p className="lead">
          Together, we can create a welcoming and prayerful environment for all.
        </p>
        <p>
          Please contact the Parish Office at <strong>020-3882000</strong> or{" "}
          <a href="mailto:info@stjohntheevangelistchurch.co.ke">
            info@stjohntheevangelistchurch.co.ke
          </a>
        </p>
      </section>
    </div>
  );
};

export default UshersCommittee;