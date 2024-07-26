import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Nav className="mx-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Payment</Nav.Link>
        <Nav.Link href="#">Orders</Nav.Link>
        <Nav.Link href="#">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
