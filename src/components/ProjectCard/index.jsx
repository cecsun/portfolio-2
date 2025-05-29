import { Card, Row, Col, Container } from 'react-bootstrap';
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
    <Container className="py-5">
      <Row>
        {projects.map(project => (
          <Col md={4} key={project.id} className="mb-4">
            <Link to={project.link} className="text-decoration-none text-dark">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.thumbnail} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="line-clamp-2">
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectCard;
