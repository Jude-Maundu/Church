import React from "react";

const LayIncarnate = () => {
  return (
    <div className="lay-incarnate-page container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <img
          src="/Lay Incarnate 2.jpg"
          alt="Lay Incarnate Group"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="display-4 fw-bold">Lay Incarnate</h1>
        <p className="lead text-muted">
          Do you yearn for a deeper connection with God while living your life
          in the world?
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="mb-5 row g-4 align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">Who We Are</h2>
          <p>
            The Lay Order of the Family of the Incarnate Word might be the path
            you’ve been seeking. We are a vibrant community of faithful lay
            people, just like you, who share a desire to:
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="fas fa-cross text-primary me-2"></i>Grow in our
              Christian faith: We seek a deeper intimacy with Jesus Christ, the
              Incarnate Word.
            </li>
            <li className="mb-2">
              <i className="fas fa-church text-primary me-2"></i>Live the
              charism of the Sisters of the Incarnate Word & Blessed Sacrament:
              Our purpose is to extend the message of God’s love and draw others
              closer to Him.
            </li>
            <li className="mb-2">
              <i className="fas fa-gift text-primary me-2"></i>Contribute our
              gifts to the Church: We believe in sharing our talents and time to
              serve our community.
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/Lay incarnate.jpg"
            alt="Lay Incarnate Story"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Journey & Commitment Section */}
      <section className="mb-5 row g-4 align-items-center flex-md-row-reverse">
        <div className="col-md-6">
          <h2 className="fw-bold border-bottom pb-2 mb-3">
            Our Journey Together
          </h2>
          <p>
            As Associates of the Incarnate Word, we embark on a shared journey
            of prayer and reflection, personal and communal growth, and active
            service. We strive to live the Gospel message through acts of love,
            justice, mercy, and peace.
          </p>
          <h3 className="fw-bold mt-4">Our Commitment</h3>
          <p>
            If you feel a desire to live a more purposeful life, rooted in faith
            and service, we invite you to learn more. We have a thriving
            community of 8 commissioned members in our parish, and we welcome
            new members who share our calling.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src="/Lay cover.jpg" alt="Our Calling" className="img-fluid rounded shadow-lg" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-5 p-4 bg-light rounded shadow-sm">
        <h2 className="fw-bold">Join us in making God’s presence known!</h2>
        <p className="lead">For more info, contact the Parish office:</p>
        <p><strong>Tel No:</strong> 0798758823 | <strong>Email:</strong> <a href="mailto:layincarnate@stjohntheevangelistchurch.co.ke">layincarnate@stjohntheevangelistchurch.co.ke</a></p>
      </section>
    </div>
  );
};

export default LayIncarnate;