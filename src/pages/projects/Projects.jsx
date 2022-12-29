import React from "react";
import FeaturedProject from "../../component/card/FeaturedProject";
import LearningTask from "../../component/card/LearningTask";
import PersonalProject from "../../component/card/PersonalProject";

// styles
import "./Projects.css";

const Projects = () => {
  return (
    <div className="all-projects">
      <h2>Projects</h2>
      <nav className="mini-nav">
        <a href="#specialProjects">Selected Projects</a>
        <a href="#learning">Learning Tasks</a>
        <a href="#personal">Personal Projects</a>
      </nav>
      <div id="specialProjects" className="special-project">
        <h3>Selected Projects</h3>
        <FeaturedProject />
      </div>
      <div id="learning" className="learning">
        <h3>Learning Tasks</h3>
        <LearningTask />
      </div>
      <div id="personal" className="personal">
        <h3>Personal Projects</h3>
        <PersonalProject />
      </div>
    </div>
  );
};

export default Projects;
