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
import FactProject from './component/project_card/FactProject';
import SpinderProject from './component/project_card/SpinderProject';
import TasteProject from './component/project_card/TasteProject';
import NasaControlProject from './component/project_card/NasaControlProject';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:name" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project-detail" element={<FactProject />} />
        <Route path="/project/factchecker-game" element={<FactProject />} />
        <Route path="/project/spinder-project" element={<SpinderProject />} />
        <Route path="/project/taste-project" element={<TasteProject />} />
        <Route path="/project/nasa-control-project" element={<NasaControlProject />} />
      </Routes>
      < Contact />
      < Footer />
    </BrowserRouter>
  );
}

export default App;
