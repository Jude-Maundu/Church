import React from "react";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";

const HolyOrders = () => {
  return (
    <Container className="my-5">
      <Card
        className="shadow-lg border-0 rounded-4 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff, #f8f9fa)",
        }}
      >
        {/* 🕊️ Header Image */}
        <div
          style={{
            height: "400px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/holyorders-banner.jpg"
            alt="Holy Orders Ordination"
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
          <h1 className="text-center display-4 fw-bold mb-4 text-dark">
            Holy Orders
          </h1>

          <Row className="g-5 align-items-center">
            {/* 📸 Side Image */}
            <Col md={5} className="text-center">
              <img
                src="/images/ordination.jpg"
                alt="Ordination Ceremony"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              />
            </Col>

            {/* ✝️ Text Content */}
            <Col md={7}>
              <blockquote className="blockquote mb-4 text-center">
                <p className="fst-italic mb-1">“Here I am, send me.”</p>
                <footer className="blockquote-footer">Isaiah 6:8</footer>
              </blockquote>

              <p className="lead" style={{ lineHeight: "1.8" }}>
                Ordination to the priesthood or diaconate is always a call and a
                gift from God. Christ reminded his Apostles that they should ask
                the Lord of the harvest to send laborers into His harvest.
                Those who seek priesthood respond generously to God’s call using
                the prophet’s words, “Here I am, send me” (Isaiah 6:8).
              </p>
              <p>
                This call from God can be recognized and understood from the
                daily signs that disclose His will to those discerning the
                vocation of the candidate. At our Parish, various congregations
                choose our Church for their Ordinations and Professions.
              </p>
            </Col>
          </Row>

          {/* 📞 Parish Info */}
          <Alert
            variant="light"
            className="text-center mt-5 border-0 shadow-sm rounded-4"
            style={{
              background: "linear-gradient(180deg, #fff6e6, #ffffff)",
            }}
          >
            <Alert.Heading as="h5" className="fw-bold text-warning">
              Thinking About a Vocation?
            </Alert.Heading>
            <p className="text-muted mb-0">
              Contact the Parish Office to speak with our Vocation Director.
            </p>
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HolyOrders;
