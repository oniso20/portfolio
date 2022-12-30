import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faNodeJs,
  faJs,
  faReact,
  faGithub,
  faHtml5,
  faCss3Alt,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import { useProject } from "../../hooks/useProject";

// styles
import "./Card.css";

const LearningTask = () => {
  const { learningProjects } = useProject();
  console.log(learningProjects);

  //'React, Node, Express, MongoDB'

  const getLanguageIcon = (language) => {
    switch (language) {
      case "Node":
        return faNodeJs;
      case "JavaScript":
        return faJs;
      case "Express":
        return faNodeJs;
      case "React":
        return faReact;
      case "HTML5":
        return faHtml5;
      case "CSS3":
        return faCss3Alt;
      case "Github":
        return faGithub;
      case "MongoDB":
        return faDatabase;
      case "AWS":
        return faAws;
      default:
        return faJs;
    }
  };

  return (
    <div className="cards">
      {learningProjects.map((project) => (
        <div className="card" key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p className="tech">Tech &#128297;</p>
          <div className="tech-used">
            {project &&
              project.tech.split(",").map((language) => (
                <div className="language-tag" key={language}>
                  <FontAwesomeIcon icon={getLanguageIcon(language)} />{" "}
                  {language}
                </div>
              ))}
          </div>
          <div className="group-btn">
            <button className="btn">
              <a href={project.github}>Repo</a>
            </button>
            <button className="btn">
              <a href={project.demo}>Demo</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningTask;
