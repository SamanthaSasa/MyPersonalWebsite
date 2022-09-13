import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {
  return (
    <Navbar className="navBg " expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="title" href="#home">As a/an...</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#Engineer" className="title px-4">Soon-to-be Engineer</Nav.Link>
            <Nav.Link href="#Cinephile" className="title px-4">Cinephile</Nav.Link>
            <Nav.Link href="#Shutterbug" className="title px-4">Shutterbug</Nav.Link>
            <Nav.Link href="#Fashion" className="title px-4">Fashion Aficionado</Nav.Link>
            <Nav.Link href="#more" className="title px-4">More</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;