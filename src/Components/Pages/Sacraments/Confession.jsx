import React from 'react';
import { Container, Card, Row, Col, Alert } from 'react-bootstrap';

const Confession = () => {
  return (
    <Container className="my-5">
      <Card className="shadow-lg" bg="light">
        <Card.Body>
          <h1 className="text-center display-4 fw-bold mb-4">Confession</h1>
          <Row className="g-4 align-items-center">
           
            <Col md={7}>
              <p className="lead">
            Penance is an experience of the gift of God’s boundless mercy. The Sacrament of Penance is God’s gift to us so that any sin committed after Baptism can be forgiven. In confession, we have the opportunity to repent and recover the grace of friendship with God. It is a holy moment in which we place ourselves in his presence and honestly acknowledge our sins, especially mortal sins. With absolution, we are reconciled to God and the Church. The Sacrament helps us stay close to the truth that we cannot live without God. “In him, we live and move and have our being” (Acts 17:28).
              </p>
            </Col>
          </Row>
          <Alert variant="info" className="text-center mt-4">
            The Sacrament is administered every Saturday from 4 pm at the Parish.
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Confession;