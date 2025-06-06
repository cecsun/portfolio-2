import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectCard from './components/ProjectCard';
import ProjectPage from './pages/ProjectPage';
import Layout from './components/Layout';
import RouteNotFound from './pages/RouteNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProjectCard />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
