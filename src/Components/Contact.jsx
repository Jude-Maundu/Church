import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
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
          <h2 className="fw-bold display-5 text-dark">Get in Touch</h2>
          <p className="lead text-dark">
            We'd love to hear from you! Reach out with any questions, prayer
            requests, or to get involved with our parish.
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="p-4 rounded-4 shadow-lg glass-card h-100">
              <h4 className="fw-bold text-dark mb-3">
                <i className="fa-solid fa-address-card me-2"></i> Contact Info
              </h4>
              <p className="text-dark mb-2">
                <i className="fa-solid fa-location-dot me-2"></i>
                St John the Evangelist Parish, Karen, Nairobi, Kenya
              </p>
              <p className="text-dark mb-2">
                <i className="fa-solid fa-phone me-2"></i>
                +254 700 123 456
              </p>
              <p className="text-dark mb-2">
                <i className="fa-solid fa-envelope me-2"></i>
                info@stjohnkaren.org
              </p>
              <p className="text-dark">
                <i className="fa-solid fa-clock me-2"></i>
                Sunday Service: 9:00 AM & 11:00 AM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-4">
            <div className="p-4 rounded-4 shadow-lg glass-card h-100">
              <h4 className="fw-bold text-dark mb-3">
                <i className="fa-solid fa-paper-plane me-2"></i> Send a Message
              </h4>
              <form>
                <div className="mb-3">
                  <label className="form-label text-dark">Name</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark">Message</label>
                  <textarea
                    className="form-control rounded-4"
                    rows="4"
                    placeholder="Type your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark rounded-pill w-100"
                >
                  <i className="fa-solid fa-paper-plane me-2"></i> Send
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-lg-4">
            <div className="p-2 rounded-4 shadow-lg glass-card h-100">
              <iframe
                title="church-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.699043625678!2d36.74407357523706!3d-1.357187835708262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05251a6d5e7d%3A0x3e63e93b0b946331!2sSt.%20John%20The%20Evangelist%20Catholic%20Church!5e0!3m2!1sen!2ske!4v1758354731380!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{
                  border: "0",
                  borderRadius: "15px",
                  minHeight: "300px",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
