import React from "react";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../hooks/useProject";

// styles
import "./Card.css";

const FeaturedProject = () => {
  const { featuredProjects } = useProject();

  const navigate = useNavigate();

  const handleClick = (name) => {
    console.log("click me");
    console.log(name);
    if (name === "FactChecker Game") {
      navigate("/project/factchecker-game");
    } else if (name === "Spinder") {
      navigate("/project/spinder-project");
    } else if (name === "TasteIT") {
      navigate("/project/taste-project");
    } else if (name === "Portfolio") {
      navigate("/project/portfolio-project");
    } else {
      return <p>Project not found</p>;
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="cards">
      {featuredProjects.map((project) => (
        <div className="card" key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <button className="btn" onClick={(e) => handleClick(project.name)}>
            View Project
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProject;
