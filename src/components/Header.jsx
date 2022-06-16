import React from 'react'
import { Navbar,Container,Nav    } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">JSON</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  as={Link} to="/users" >
        Users
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">Post</Nav.Link>
        <Nav.Link as={Link} to="/comments">Commnets</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
