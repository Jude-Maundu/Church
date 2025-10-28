import React from 'react';
import { Container, Card, Row, Col, Alert } from 'react-bootstrap';


const Eucharist = () => {
  return (
    <Container className="my-5">
      <Card className="shadow-lg" bg="light">
        <Card.Body>
          <h1 className="text-center display-4 fw-bold mb-4">Eucharist</h1>
          <Row className="g-4 align-items-center">
           
            <Col md={7}>
              <p className="lead">
            The Eucharist is a sacrament that is performed at Catholic Mass and at other Church events. In this sacrament, individuals consume bread and wine that, in Catholic doctrine, are transubstantiated to become the blood and body of Christ during the rite. The Eucharist is intended to connect Catholics with Christ and to recreate the Last Supper. The Eucharist is considered a reminder of and a continuation of Jesus’s sacrifice for his followers and for humans in general. The Eucharist is also called Communion. Only those who are baptized can take Communion.
              </p>
              <blockquote className="blockquote">
                <p className="mb-0 fst-italic">”Whoever eats my flesh and drinks my blood has eternal life, and I will raise him on the last day. For my flesh is true food, and my blood is true drink. Whoever eats my flesh and drinks my blood remains in me and I in him.”</p>
                <footer className="blockquote-footer">John 6:54-56</footer>
              </blockquote>
            </Col>
          </Row>
          <Alert variant="info" className="text-center mt-4">
            Contact the Parish for Catechism Classes.
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Eucharist;