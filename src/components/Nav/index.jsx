// src/components/NavBar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
