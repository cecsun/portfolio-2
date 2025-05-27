// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectCard from './components/ProjectCard';
import ProjectPage from './pages/ProjectPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProjectCard />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
