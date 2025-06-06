import { Container, Row, Col } from 'react-bootstrap';

export function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 py-4 border-top">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start mb-2 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} My Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
