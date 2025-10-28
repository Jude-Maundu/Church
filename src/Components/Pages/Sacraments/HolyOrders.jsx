import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';


const HolyOrders = () => {
  return (
    <Container className="my-5">
      <Card className="shadow-lg" bg="light">
        <Card.Body>
          <h1 className="text-center display-4 fw-bold mb-4">Holy Orders</h1>
          <Row className="g-4 align-items-center">
            
            <Col md={7}>
              <blockquote className="blockquote">
                <p className="mb-0 fst-italic">“Here I am, send me.”</p>
                <footer className="blockquote-footer">Isaiah 6:8</footer>
              </blockquote>
              <p className="lead mt-3">
            Ordination to the priesthood/Diaconate is always a call and a gift from God. Christ reminded his Apostles that they needed to ask the Lord of the harvest to send laborers into the harvest. Those who seek priesthood respond generously to God’s call using the words of the prophet, “Here I am, send me” (Is 6:8). This call from God can be recognized and understood from the daily signs that disclose his will to those in charge of discerning the vocation of the candidate. At the Parish various congregations choose our Church for their Ordinations and Professions.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HolyOrders;