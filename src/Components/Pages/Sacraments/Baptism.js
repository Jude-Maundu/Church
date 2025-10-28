import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';


const Baptism = () => {
  return (
    <Container className="my-5">
      <Card className="shadow-lg" bg="light">
        <Card.Body>
          <h1 className="text-center display-4 fw-bold mb-4">Baptism</h1>
          <Row className="g-4 align-items-center">
            
            <Col md={7}>
              <p className="lead">
            Baptism is the first and foundational sacrament of Christian initiation. 
            It is the gateway to life in the Spirit and the door which gives access 
            to the other sacraments. Through Baptism, we are freed from sin and reborn 
            as sons and daughters of God; we become members of Christ, are incorporated 
            into the Church, and made sharers in her mission. The pouring of water 
            symbolizes the cleansing of our souls from original sin and our rebirth 
            into a new life with Christ.
              </p>
              <p>
            To schedule a Baptism for your child, please contact the parish office to 
            begin the process. Preparation classes are required for parents and godparents 
            to fully understand the grace and responsibilities that come with this holy sacrament.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Baptism;