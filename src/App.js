import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// styles
import './App.css';

// components
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Project from './pages/project/Project';
import Footer from './component/footer/Footer';
import Resume from './pages/resume/Resume';
import NavBar from './component/navbar/NavBar';
import Contact from './component/contact/Contact';
import ProjectCard from './component/project_card/ProjectCard';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project-detail" element={<ProjectCard />} />
      </Routes>
      < Contact />
      < Footer />
    </BrowserRouter>
  );
}

export default App;
