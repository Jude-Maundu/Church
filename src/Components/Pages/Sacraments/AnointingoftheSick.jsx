import React from "react";
import { Container, Card, Alert } from "react-bootstrap";

const AnointingOfTheSick = () => {
  return (
    <Container className="my-5">
      <Card
        className="shadow-lg border-0 rounded-4 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff, #f8f9fa)",
        }}
      >
        {/* 🕊️ Full-width top image */}
        <div
          style={{
            height: "400px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/anointing.jpg"
            alt="Anointing of the Sick"
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

        <Card.Body className="p-5">
          {/* Header */}
          <div className="text-center mb-4">
            <i
              className="fas fa-hand-holding-heart mb-3"
              style={{ fontSize: "3rem", color: "#0d6efd" }}
            ></i>
            <h1 className="fw-bold text-dark display-5">
              Anointing of the Sick
            </h1>
            <p className="text-muted fst-italic mt-2">
              “Is anyone among you sick? Let them call the elders of the church
              to pray over them and anoint them with oil in the name of the
              Lord.” – James 5:14
            </p>
          </div>

          {/* Description */}
          <div className="px-3">
            <p className="lead text-dark" style={{ lineHeight: "1.8" }}>
              Jesus came to heal the whole person — body and soul. When the
              Sacrament of the Anointing of the Sick is given, the hoped-for
              effect is that, if it be God’s will, the person may be physically
              healed of illness. But even when there is no physical healing, the
              <strong> primary effect</strong> of the Sacrament is a spiritual
              healing — the gift of peace, courage, and the grace to unite one’s
              suffering with Christ.
            </p>
            <p className="text-muted">
              The Sacrament may be celebrated in hospitals, homes, or the church
              for anyone seriously ill, elderly, or preparing for major surgery.
            </p>
          </div>

          {/* Contact Info */}
          <Alert
            variant="light"
            className="mt-5 text-center border-0 shadow-sm rounded-4"
            style={{
              background: "linear-gradient(180deg, #eaf4ff, #ffffff)",
            }}
          >
            <Alert.Heading as="h4" className="fw-bold text-dark">
              For More Information
            </Alert.Heading>
            <p className="text-muted">
              Please contact the Parish Office to arrange for the Sacrament or
              to request prayers for the sick.
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

export default AnointingOfTheSick;
