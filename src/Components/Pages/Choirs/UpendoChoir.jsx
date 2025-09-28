import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UpendoChoir = () => {
  return (
    <div className="choir-page">

      {/* Hero Section */}
      <section
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('upendo.jpg')", // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <div className="overlay"></div>
        <div className="container position-relative">
          <h1 className="display-4 fw-bold">Upendo Choir</h1>
          <p className="lead">A Family of Faith, Music, and Service</p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold">Our Journey</h2>
            <p className="text-muted">
              The Upendo Choir has been a pillar of St. John the Evangelist Parish since its inception. 
              Filled with dedicated singers, the choir has a rich history marked by growth, resilience, 
              and a deep love for music.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="choir-group.jpg"
              alt="Upendo Choir"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Leadership Team</h2>
          <div className="row g-4">
            {[
              { role: "Moderator", name: "Benedict Nthiani", details: "2nd Term – 15+ years of experience" },
              { role: "Vice Moderator", name: "Joyce Karweni", details: "1st Term – 10+ years of membership" },
              { role: "Secretary", name: "Victoria Ndinda", details: "2nd Term – 15+ years of service" },
              { role: "Vice Secretary", name: "Dominic Nzavilu", details: "2 years – Highly committed" },
              { role: "Treasurer", name: "Inviolata Njeri", details: "Longstanding member with multiple roles" }
            ].map((leader, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm text-center p-3">
                  <h5 className="fw-bold">{leader.role}</h5>
                  <p className="mb-1">{leader.name}</p>
                  <small className="text-muted">{leader.details}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Directors Section */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">Music Directors</h2>
        <div className="row text-center g-4">
          <div className="col-md-6">
            <div className="card p-3 shadow-sm h-100">
              <h5 className="fw-bold">Lead Music Director</h5>
              <p>Nathan Mutiso</p>
              <small className="text-muted">Trained in solfa notation & piano</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 shadow-sm h-100">
              <h5 className="fw-bold">Assistant Music Director</h5>
              <p>Silas Matanda</p>
              <small className="text-muted">Skilled in solfa notation & piano</small>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">A Growing Family of Faith</h2>
          <p className="text-muted">
            The Upendo Choir is a family of 53 members, with 46 commissioned under the Parish guidelines and the CLiMAK constitution. 
            We are committed to spiritual growth, unity, and service.
          </p>
          <img
            src="family.jpg"
            alt="Choir Family"
            className="img-fluid rounded shadow mt-3"
          />
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">United in Song</h2>
        <p className="text-muted text-center mb-4">
          The Upendo Choir collaborates with other choirs within the Parish to strengthen our musical community.
        </p>
        <div className="row text-center g-3">
          {[
            "Divine Mercy Choir – Kuwinda",
            "Sacred Heart Choir – Apostles of Jesus Shrine",
            "St. Gabriel Choir – Cooperative University",
            "St. Cecilia Choir – Tangaza University",
            "Holy Trinity Choir – CUEA",
            "St. Patrick’s Choir – Multi Media University",
            "Blessed Voices Choir – St. John",
            "Singers of Christ Choir – St. John"
          ].map((choir, idx) => (
            <div className="col-md-6" key={idx}>
              <div className="card shadow-sm p-3 h-100">{choir}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-section text-center text-white py-5">
        <div className="overlay"></div>
        <div className="container position-relative">
          <h2 className="fw-bold">Join Upendo Choir!</h2>
          <p className="lead">Raise your voice in worship and praise.</p>
          <p>
            <a href="mailto:upendochoir@stjohntheevangelistchurch.co.ke" className="btn btn-warning btn-lg">
              Contact Us
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default UpendoChoir;
