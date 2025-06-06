import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="https://linkedin.com/in/cecilie-sunde"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link
              href="https://github.com/cecsun"
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
