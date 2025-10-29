import React from "react";
import { Container, Card, Alert } from "react-bootstrap";

const Confession = () => {
  return (
    <Container className="my-5">
      <Card
        className="shadow-lg border-0 rounded-4 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff, #f8f9fa)",
        }}
      >
        {/* 🕊️ Image Banner */}
        <div
          style={{
            height: "400px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/confession.jpg"
            alt="Confession"
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

        {/* 📜 Content */}
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <i
              className="fas fa-praying-hands mb-3"
              style={{ fontSize: "3rem", color: "#0d6efd" }}
            ></i>
            <h1 className="fw-bold text-dark display-5">Confession</h1>
            <p className="text-muted fst-italic mt-2">
              “If we confess our sins, He is faithful and just to forgive us our
              sins and to cleanse us from all unrighteousness.”
              <br />– 1 John 1:9
            </p>
          </div>

          <p className="lead text-dark" style={{ lineHeight: "1.8" }}>
            Penance is an experience of the gift of God’s boundless mercy.
            The Sacrament of Penance is God’s gift to us so that any sin committed
            after Baptism can be forgiven. In confession, we have the opportunity
            to repent and recover the grace of friendship with God.
          </p>

          <p className="text-muted">
            It is a holy moment in which we place ourselves in His presence and
            honestly acknowledge our sins, especially mortal sins. With absolution,
            we are reconciled to God and the Church. The Sacrament helps us stay
            close to the truth that we cannot live without God — “In Him we live
            and move and have our being” (Acts 17:28).
          </p>

          {/* 🕓 Schedule */}
          <Alert
            variant="light"
            className="text-center mt-5 border-0 shadow-sm rounded-4"
            style={{
              background: "linear-gradient(180deg, #eaf4ff, #ffffff)",
            }}
          >
            <Alert.Heading as="h4" className="fw-bold text-dark">
              Sacrament Schedule
            </Alert.Heading>
            <p className="text-muted mb-2">
              The Sacrament of Penance is administered every
            </p>
            <h5 className="fw-bold text-primary mb-0">
              Saturday from 4:00 PM at the Parish
            </h5>
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Confession;
