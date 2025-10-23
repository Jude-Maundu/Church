import React from "react";

const LaySpiritans = () => {
  return (
    <div className="lay-spiritans-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/IMG-20230825-WA0012.jpg"
          alt="Lay Spiritans Group"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Lay Spiritans</h1>
        <p className="lead text-muted">
          Are you called to share in the Spiritan charism and missions?
        </p>
      </section>

      {/* Introduction Section */}
      <section className="mb-5">
        <p className="fs-5">
          The Lay Spiritans Associates is a community of people from all walks
          of life who feel inspired by the Spiritans and their mission. We come
          together to live a Spiritan way of life within the context of our
          everyday lives and work.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className="mb-5 row g-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">Common Vision</h2>
          <p>
            We believe that all people are called to be holy and to build up
            God’s kingdom on earth. We strive to live out our Christian
            vocation in our daily lives and work.
          </p>
          <h2 className="fw-bold border-bottom pb-2 mb-3 mt-4">Mission</h2>
          <p>
            As Lay Spiritans Associates, we are called to be “Good News” to
            everyone we encounter. We commit ourselves to the charism and
            mission of the Spiritan Congregation.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/IMG-20230311-WA0007.jpg"
            alt="Lay Spiritans Mission"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-5 row g-4 align-items-center flex-md-row-reverse">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">What We Do</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="fas fa-users text-primary me-2"></i>Support and encourage each other</li>
            <li className="mb-2"><i className="fas fa-seedling text-primary me-2"></i>Grow and develop through formation programs</li>
            <li className="mb-2"><i className="fas fa-book-open text-primary me-2"></i>Share faith and prayer</li>
            <li className="mb-2"><i className="fas fa-heart text-primary me-2"></i>Build a community of unity and love</li>
          </ul>
          <p>
            Prayer is at the heart of our way of life. Prayer brings us closer
            to God and inspires us to serve others. We strive to grow in the
            likeness of Christ so that God’s will may be done in us.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/IMG-20230311-WA0004.jpg"
            alt="Lay Spiritans Community"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-5 p-4 bg-light rounded shadow-sm">
        <h2 className="fw-bold">Are you interested in learning more?</h2>
        <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
            <div>
                <i className="fas fa-phone fs-4 me-2"></i>
                <span className="fs-5">0797758823</span>
            </div>
            <div>
                <i className="fas fa-envelope fs-4 me-2"></i>
                <a href="mailto:layspiritans@stjohntheevangelistchurch.co.ke" className="fs-5">
                    layspiritans@stjohntheevangelistchurch.co.ke
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default LaySpiritans;