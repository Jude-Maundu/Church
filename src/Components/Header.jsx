import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ handleShow }) => {
  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Button variant="outline-light" onClick={handleShow}>
          <i className="fas fa-bars"></i>
        </Button>
        <Navbar.Brand as={Link} to="/">St. John The Evangelist</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;