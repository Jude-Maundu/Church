import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlessedVoicesChoir = () => {
  return (
    <div className="choir-page">

      {/* Hero Section */}
      <section
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('DSC_0778.jpg')", // Replace with your choir image
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <div className="overlay"></div>
        <div className="container position-relative">
          <h1 className="display-4 fw-bold">Blessed Voices Choir</h1>
          <p className="lead">A Journey of Music and Unity</p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold">Our Story</h2>
            <p className="text-muted">
              The Blessed Voices Choir (BVC), which sings during the 11:30 am Mass, 
              is a vibrant and diverse group of singers united by their love of music 
              and their desire to praise God through song. Starting in the early 2000s 
              with a small group of parishioners, BVC has grown into an international choir 
              of professionals, students, and religious brothers and sisters.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="DSC_0065.jpg"
              alt="Blessed Voices Choir"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">A Choir with a Global Reach</h2>
          <p className="text-muted">
            Today, BVC reflects the rich diversity of cultures and traditions that make up our community. 
            We’ve interacted with over <strong>15 African nationalities</strong>, enriching our music with 
            different traditions and songs.
          </p>
        </div>
      </section>

      {/* Growth and Practice */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">Continuous Growth and Development</h2>
        <p className="text-muted text-center mb-4">
          Despite its international reach, BVC remains firmly rooted in the parish. 
          Practices are held on <strong>Saturdays at 4 pm</strong> and <strong>Sundays at 10 am</strong>, 
          offering opportunities to learn, perfect songs, and receive music lessons.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Leadership Team</h2>
          <div className="row g-4">
            {[
              { role: "Moderator", name: "Radcliffe Nyamai" },
              { role: "Vice Moderator", name: "Jefferson Sanane" },
              { role: "Treasurer", name: "Jacinta Mue" },
              { role: "Secretary", name: "Miriam Njoroge" },
              { role: "Vice Secretary", name: "Lucy Kapkirwok" },
              { role: "Musical Directors", name: "Br. Michael Munuvi & Wilfried Kabwagala" }
            ].map((leader, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm text-center p-3">
                  <h5 className="fw-bold">{leader.role}</h5>
                  <p className="mb-1">{leader.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">Initiatives</h2>
        <div className="row text-center g-4">
          <div className="col-md-6">
            <div className="card p-3 shadow-sm h-100">
              <h5 className="fw-bold">Music Training</h5>
              <p className="text-muted">
                Every Saturday, BVC offers classes for parishioners to learn how to read and play music.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 shadow-sm h-100">
              <h5 className="fw-bold">Good Friday Service</h5>
              <p className="text-muted">
                Every year, BVC leads the Good Friday Service with angelic voices and deep devotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Membership and Registration</h2>
          <p className="text-muted">
            The Blessed Voices Choir is open to all who love music and worship. 
            We currently have <strong>27 members</strong> from diverse backgrounds. 
            To join, simply talk to a member or visit the parish secretary’s office.
          </p>
        </div>
      </section>

      {/* Join Us */}
      <section className="join-section text-center text-white py-5">
        <div className="overlay"></div>
        <div className="container position-relative">
          <h2 className="fw-bold">Join Blessed Voices Choir!</h2>
          <p className="lead">Share your love of music and faith with us.</p>
          <a
            href="mailto:bvc@stjohnstheevangelistchurch.co.ke"
            className="btn btn-warning btn-lg"
          >
            Contact Us
          </a>
          <div className="mt-3">
            <a href="#" className="btn btn-outline-light btn-sm mx-2">Facebook</a>
            <a href="#" className="btn btn-outline-light btn-sm mx-2">Email</a>
            <a href="#" className="btn btn-outline-light btn-sm mx-2">WhatsApp</a>
            <a href="#" className="btn btn-outline-light btn-sm mx-2">X (Twitter)</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlessedVoicesChoir;
