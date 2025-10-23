import React from "react";

const LectorsCommittee = () => {
  return (
    <div className="lectors-committee-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/DSC_0797.jpg"
          alt="Lectors at St. John the Evangelist Parish"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Lectors Ministry</h1>
        <p className="lead text-muted">Hear the Word, Proclaim the Word.</p>
      </section>

      {/* Introduction Section */}
      <section className="mb-5">
        <p className="fs-5">
          The Lectors Ministry at St. John the Evangelist Parish welcomes
          baptized and confirmed Catholic adults who wish to serve as
          proclaimers of the Word during Sunday Masses and special events.
        </p>
      </section>

      {/* Roles and Requirements Section */}
      <section className="mb-5 row g-4">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">
            As a Lector, you will:
          </h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="fas fa-book-open text-primary me-2"></i>Be entrusted with the sacred duty of proclaiming the readings.</li>
            <li className="mb-2"><i className="fas fa-cross text-primary me-2"></i>Participate in the processional entry and exit during Mass.</li>
            <li className="mb-2"><i className="fas fa-pray text-primary me-2"></i>Contribute to a prayerful and inspiring worship experience.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">
            We are looking for individuals with:
          </h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="fas fa-church text-success me-2"></i>A strong foundation in the Catholic faith.</li>
            <li className="mb-2"><i className="fas fa-bible text-success me-2"></i>A commitment to preparing and understanding the Scriptures.</li>
            <li className="mb-2"><i className="fas fa-microphone-alt text-success me-2"></i>Excellent public speaking and reading skills.</li>
          </ul>
        </div>
      </section>

      {/* Time Commitment Section */}
      <section className="mb-5 row g-4 align-items-center flex-md-row-reverse">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">Time Commitment</h2>
          <ul className="list-group">
            <li className="list-group-item">Arrive 30 minutes before your scheduled Mass.</li>
            <li className="list-group-item">Attend mandatory rehearsals every Saturday from 4:00 PM to 4:30 PM.</li>
            <li className="list-group-item">Participate in annual training sessions.</li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/DSC_0731.jpg"
            alt="Lector during Mass"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-5 p-4 bg-light rounded shadow-sm">
        <h2 className="fw-bold">Interested in Learning More?</h2>
        <p className="lead">
          Become a Lector and share the gift of God’s Word with your community!
        </p>
        <p>
          Contact the Parish Office at{" "}
          <strong>020-3882000</strong> or{" "}
          <a href="mailto:info@stjohntheevangelistchurch.co.ke">
            info@stjohntheevangelistchurch.co.ke
          </a>
        </p>
        <p className="mt-3 fw-bold">We look forward to hearing from you!</p>
      </section>
    </div>
  );
};

export default LectorsCommittee;