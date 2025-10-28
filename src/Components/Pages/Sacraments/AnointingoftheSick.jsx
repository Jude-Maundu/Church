import React from 'react';
import { Container, Card, Row, Col, Alert } from 'react-bootstrap';


const AnointingOfTheSick = () => {
  return (
    <Container className="my-5">
      <Card className="shadow-lg" bg="light">
        <Card.Body>
          <h1 className="text-center display-4 fw-bold mb-4">Anointing of the Sick</h1>
          <Row className="g-4 align-items-center">
           
            <Col md={7}>
              <p className="lead">
            Jesus came to heal the whole person, body and soul. When the Sacrament of Anointing of the Sick is given, the hoped-for effect is that, if it be God’s will, the person be physically healed of illness. But even if there is no physical healing, the primary effect of the Sacrament is a spiritual healing by which the sick person receives the Holy Spirit’s gift of peace and courage to deal with the difficulties that accompany serious illness or the frailty of old age.
              </p>
            </Col>
          </Row>
          <Alert variant="info" className="mt-4">
            <Alert.Heading as="h5" className="text-center">For More Information</Alert.Heading>
            <hr />
            <p className="text-center mb-1">Please contact the Parish office:</p>
            <p className="text-center mb-1"><i className="fas fa-envelope me-2"></i>info@stjohntheevangelistchurch.co.ke</p>
            <p className="text-center mb-0"><i className="fas fa-phone me-2"></i>020-3882000 / 0797828903</p>
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AnointingOfTheSick;