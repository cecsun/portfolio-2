import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: 'JavaScript Frameworks',
      description: 'For my JavaScript Frameworks project, I designed and developed a fully responsive, user-friendly eCommerce web application using React.',
      thumbnail: '/images/ecom-store.png',
      link: '/projects/1',
    },
    {
      id: 2,
      title: 'Semester Project 2',
      description: 'This project marks the culmination of knowledge and practical skills developed over the course of three semesters',
      thumbnail: '/images/auction-house.png',
      link: '/projects/2',
    },
    {
      id: 3,
      title: 'Exam Project 2',
      description: 'Project Exam 2 represents the final milestone after two years of learning and development, by building an end-to-end application.',
      thumbnail: '/images/holidaze.png',
      link: '/projects/3',
    },
  ];

  return (
    <>
      <Container className="about-container py-3">
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <Image
              src="/images/image_6487329.JPG"
              fluid
              alt="Cecilie"
              style={{ objectFit: 'cover', height: '100%', maxHeight: '400px', borderRadius: '10px' }}
            />
          </Col>

          <Col md={7}>
            <h1>Hello, I'm Cecilie</h1>
            <p className="fw-light mt-2 mb-4">
              As a front-end developer, I bring designs to life through clean, responsive code and intuitive user experiences. I thrive at the intersection of creativity and technology, constantly evolving with new tools and frameworks to craft engaging, high-quality digital solutions.
            </p>
            <div className='tech-stack p-3 bg-dark text-white rounded-3'>
              <h2 className="mb-4 text-center">Tech Stack</h2>
              <div className="d-flex flex-wrap justify-content-center bg-light gap-3 my-3 p-3 rounded-3">
                <img src="/images/icons/bootstrap5.png" alt="bootstrap" width="40" height="40" />
                <img src="/images/icons/css3.png" alt="css" width="40" height="40" />
                <img src="/images/icons/cypress.png" alt="cypress" width="40" height="40" />
                <img src="/images/icons/figma.png" alt="figma" width="40" height="40" />
                <img src="/images/icons/github.png" alt="github" width="40" height="40" />
                <img src="/images/icons/html5.png" alt="html" width="40" height="40" />
                <img src="/images/icons/jest.png" alt="jest" width="40" height="40" />
                <img src="/images/icons/js.png" alt="js" width="40" height="40" />
                <img src="/images/icons/netlify2.png" alt="netlify" width="40" height="40" />
                <img src="/images/icons/reactjs.png" alt="react" width="40" height="40" />
                <img src="/images/icons/sass.png" alt="sass" width="40" height="40" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="card-container py-3">
        <h4 className="mb-4">My Projects</h4>
        <Row>
          {projects.map(project => (
            <Col md={4} key={project.id} className="mb-4">
              <Link to={project.link} className="text-decoration-none">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={project.thumbnail} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="line-clamp-2 fw-light">
                      {project.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProjectCard;

