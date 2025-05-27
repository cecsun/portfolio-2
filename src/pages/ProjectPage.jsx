import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams();

  return (
    <div className="container py-5">
      <h1>Project {id}</h1>
      <p>This is the detailed article page for project {id}.</p>
    </div>
  );
};

export default ProjectPage;
