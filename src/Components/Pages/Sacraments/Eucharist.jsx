import React from "react";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";

const Eucharist = () => {
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
            src="/images/eucharist.jpg"
            alt="Eucharist Celebration"
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
            Eucharist
          </h1>

          <Row className="g-5 align-items-center">
            {/* 📸 Left Image */}
            <Col md={5} className="text-center">
              <img
                src="/images/communion-bread.jpg"
                alt="Communion Bread and Wine"
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
              <p className="lead" style={{ lineHeight: "1.8" }}>
                The Eucharist is a sacrament that is performed at Catholic Mass
                and other Church events. In this sacrament, individuals consume
                bread and wine that, according to Catholic doctrine, are
                transubstantiated into the body and blood of Christ. The
                Eucharist connects Catholics with Christ and re-enacts the Last
                Supper — a sacred remembrance and continuation of Jesus’s
                sacrifice.
              </p>

              <blockquote className="blockquote text-center mt-4">
                <p className="fst-italic mb-2">
                  “Whoever eats my flesh and drinks my blood has eternal life,
                  and I will raise him on the last day. For my flesh is true
                  food, and my blood is true drink.”
                </p>
                <footer className="blockquote-footer">
                  John 6:54–56
                </footer>
              </blockquote>
            </Col>
          </Row>

          {/* 📞 Parish Notice */}
          <Alert
            variant="light"
            className="text-center mt-5 border-0 shadow-sm rounded-4"
            style={{
              background: "linear-gradient(180deg, #e7f3ff, #ffffff)",
            }}
          >
            <Alert.Heading as="h5" className="fw-bold text-primary">
              Contact the Parish Office
            </Alert.Heading>
            <p className="text-muted mb-0">
              Join our <strong>Catechism Classes</strong> to prepare for receiving
              the Holy Eucharist.
            </p>
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Eucharist;
