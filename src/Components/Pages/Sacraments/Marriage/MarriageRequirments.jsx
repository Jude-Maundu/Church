import React from "react";
import { Container, Card, ListGroup, Alert, Row, Col } from "react-bootstrap";

const MarriageRequirements = () => {
  const galleryImages = [
    "/images/wedding-altar.jpg",
    "/images/church-wedding.jpg",
    "/images/wedding-rings.jpg",
  ];

  return (
    <Container className="my-5">
      <Card
        className="shadow-lg border-0 rounded-4"
        style={{
          background: "linear-gradient(180deg, #ffffff, #f9f9f9)",
          padding: "2rem",
        }}
      >
        <Card.Body>
          {/* 🕊️ Header */}
          <div className="text-center mb-4">
            <i
              className="fas fa-ring mb-3"
              style={{ fontSize: "3rem", color: "#c49b63" }}
            ></i>
            <h1 className="fw-bold text-dark display-5">
              Marriage Requirements
            </h1>
            <p className="text-muted fst-italic mt-2">
              “Therefore what God has joined together, let no one separate.” – Mark 10:9
            </p>
          </div>

          {/* 📸 Image Gallery Section */}
          <Row className="g-4 mb-5">
            {galleryImages.map((img, i) => (
              <Col md={4} key={i}>
                <div
                  className="shadow-sm rounded-4 overflow-hidden"
                  style={{
                    height: "230px",
                    border: "3px solid #f0e6d2",
                  }}
                >
                  <img
                    src={img}
                    alt={`Marriage photo ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              </Col>
            ))}
          </Row>

          {/* 📜 Requirements List */}
          <ListGroup as="ol" numbered variant="flush">
            {[
              "Make sure you see the parish priest of St. John the Evangelist Parish first before you fix your date of marriage...",
              "If you are not from St. John’s Parish, bring a letter of introduction from your parish priest...",
              "Bring your Baptismal Certificate as proof that you are baptized. For Mixed Marriages, Bishop’s permission is required...",
              "You will need at least five marriage sessions (instructions) before the marriage ceremony...",
              "Go to Sheria House to obtain a Registrar Certificate within three months before the wedding...",
              "Both the bridegroom and bride must fill out and return forms from St. John’s in good time.",
              "Wedding rehearsals must be arranged early. The actual rehearsal will be three days before the wedding.",
              "Confession is necessary a day or so before the wedding.",
              "The best man and best maid should be practicing Catholics.",
              "You will pay Ksh. 20,000 (Ksh. 15,000 + Ksh. 5,000 refundable if punctual).",
              "Prepare three altar flowers of equal size for the celebration.",
              "Hall booking: Ksh. 20,000 (6 AM – 6 PM). Late departures attract a Ksh. 10,000 penalty.",
              "Prepare a stipend of not less than Ksh. 5,000 for the officiating priest.",
              "Live streaming is available optionally at Ksh. 5,000.",
              "Wedding announcements (Banns) will be made thrice in your home parish.",
              "Meet with the priest at least two weeks before the wedding to finalize arrangements.",
              "Offertory gifts: wine, host, and other gifts (e.g., foodstuffs, tissue).",
              "Bring a copy of your I.D./Passport to the parish office.",
              "The priest’s office day for marriage matters is THURSDAY.",
            ].map((req, i) => (
              <ListGroup.Item
                key={i}
                as="li"
                className="py-3 px-3 bg-transparent border-0"
                style={{
                  borderLeft: "4px solid #c49b63",
                  backgroundColor: i % 2 === 0 ? "#fcfcfc" : "#f6f6f6",
                }}
              >
                {req}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* 📞 Contact Section */}
          <Alert
            variant="light"
            className="mt-5 text-center border-0 shadow-sm rounded-4"
            style={{
              background: "linear-gradient(180deg, #fff8e1, #fff)",
            }}
          >
            <Alert.Heading as="h4" className="fw-bold text-dark">
              For More Info Contact the Parish Office
            </Alert.Heading>
            <p className="text-muted">
              Your opinions are important to us. Whether it’s a simple question or
              a valuable suggestion — reach out anytime.
            </p>
            <hr />
            <div>
              <p className="mb-1 text-dark">
                <i className="fas fa-phone me-2 text-success"></i>0797828903
              </p>
              <p className="mb-3 text-dark">
                <i className="fas fa-envelope me-2 text-primary"></i>
                info@stjohntheevangelisttchurch.co.ke
              </p>

              <div className="mt-3 d-flex justify-content-center gap-2">
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
                  className="btn btn-outline-dark rounded-circle"
                  aria-label="X"
                >
                  <i className="fab fa-twitter"></i>
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

export default MarriageRequirements;
