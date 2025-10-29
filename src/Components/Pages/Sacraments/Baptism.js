import React from "react";
import { Container, Card, Alert } from "react-bootstrap";

const Baptism = () => {
  return (
    <Container className="my-5">
      <Card
        className="shadow-lg border-0 rounded-4 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff, #f8f9fa)",
        }}
      >
        {/* 💧 Top Banner Image */}
        <div
          style={{
            height: "400px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/baptism.jpg"
            alt="Baptism"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        </div>

        {/* 💬 Content */}
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <i
              className="fas fa-water mb-3"
              style={{ fontSize: "3rem", color: "#0d6efd" }}
            ></i>
            <h1 className="fw-bold text-dark display-5">Baptism</h1>
            <p className="text-muted fst-italic mt-2">
              “Go therefore and make disciples of all nations, baptizing them in
              the name of the Father and of the Son and of the Holy Spirit.”
              <br />– Matthew 28:19
            </p>
          </div>

          <div className="px-3">
            <p className="lead text-dark" style={{ lineHeight: "1.8" }}>
              Baptism is the first and foundational sacrament of Christian
              initiation — the gateway to life in the Spirit and the door that
              opens access to all the other sacraments. Through Baptism, we are
              freed from sin and reborn as sons and daughters of God; we become
              members of Christ, incorporated into His Church, and made sharers
              in her mission.
            </p>
            <p className="text-muted">
              The pouring of water symbolizes cleansing from sin and rebirth
              into new life with Christ. Preparation classes are required for
              parents and godparents to understand the grace and responsibilities
              that come with this holy sacrament.
            </p>
          </div>

          {/* 📞 Contact Section */}
          <Alert
            variant="light"
            className="mt-5 text-center border-0 shadow-sm rounded-4"
            style={{
              background: "linear-gradient(180deg, #eaf4ff, #ffffff)",
            }}
          >
            <Alert.Heading as="h4" className="fw-bold text-dark">
              To Schedule a Baptism
            </Alert.Heading>
            <p className="text-muted">
              Please contact the Parish Office to begin the process or inquire
              about baptismal preparation classes.
            </p>
            <hr />
            <div>
              <p className="mb-1 text-dark">
                <i className="fas fa-envelope me-2 text-primary"></i>
                info@stjohntheevangelistchurch.co.ke
              </p>
              <p className="mb-3 text-dark">
                <i className="fas fa-phone me-2 text-success"></i>
                020-3882000 / 0797828903
              </p>
              <div className="mt-2 d-flex justify-content-center gap-2">
                <a
                  href="#!"
                  className="btn btn-outline-primary rounded-circle"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#!"
                  className="btn btn-outline-success rounded-circle"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="#!"
                  className="btn btn-outline-secondary rounded-circle"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Baptism;
