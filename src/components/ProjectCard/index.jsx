import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief overview of the first project with an interesting challenge and solution.',
      thumbnail: '/images/project1.jpg',
      link: '/projects/1',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Second project involves complex data handling and interactive UI components.',
      thumbnail: '/images/project2.jpg',
      link: '/projects/2',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Final project demonstrates advanced React and Bootstrap integration.',
      thumbnail: '/images/project3.jpg',
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
