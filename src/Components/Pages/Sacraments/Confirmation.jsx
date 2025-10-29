import React from "react";
import { Container, Card, Alert } from "react-bootstrap";

const Confirmation = () => {
  return (
    <Container className="my-5">
      <Card
        className="shadow-lg border-0 rounded-4 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff, #f8f9fa)",
        }}
      >
        {/* 🔥 Header Image */}
        <div
          style={{
            height: "400px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/confirmation.jpg"
            alt="Confirmation Ceremony"
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

        {/* 📖 Content */}
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <i
              className="fas fa-dove mb-3"
              style={{ fontSize: "3rem", color: "#dc3545" }}
            ></i>
            <h1 className="fw-bold text-dark display-5">Confirmation</h1>
            <p className="text-muted fst-italic mt-2">
              “Then Peter and John placed their hands on them, and they received
              the Holy Spirit.” <br />
              <strong>– Acts 8:17</strong>
            </p>
          </div>

          <p className="lead text-dark" style={{ lineHeight: "1.8" }}>
            Confirmation is the final rite of initiation into the Catholic
            Church. It is given only to those who have been baptized and marks
            the moment when one’s faith is strengthened by the gift of the Holy
            Spirit.
          </p>

          <p className="text-muted">
            The Sacrament of Confirmation deepens the grace received at Baptism
            and fully unites the believer with Christ and His Church. Through
            the anointing with sacred chrism and the laying on of hands by the
            bishop or priest, the confirmed person receives the strength to live
            as a true witness of Christ.
          </p>

          {/* 🕊️ Info Section */}
          <Alert
            variant="light"
            className="text-center mt-5 border-0 shadow-sm rounded-4"
            style={{
              background: "linear-gradient(180deg, #fff5f5, #ffffff)",
            }}
          >
            <Alert.Heading as="h4" className="fw-bold text-danger">
              Preparing for Confirmation
            </Alert.Heading>
            <p className="text-muted mb-2">
              Preparation classes are required for candidates and their sponsors.
              These sessions help deepen understanding of the faith and the role
              of the Holy Spirit in our lives.
            </p>
            <p className="fw-semibold mb-0 text-dark">
              Please contact the parish office for registration and guidance.
            </p>
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Confirmation;
