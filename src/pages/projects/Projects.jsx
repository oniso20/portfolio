import React from "react";
import { useState, useEffect } from "react";
// import Nav from "../../components/nav/Nav";
// import Footer from "../../components/footer/Footer";
// import ProjectsList from "../../components/projectsList/ProjectsList";

// style
import "./Projects.css";

// Fetch project data from github api
// https://api.github.com/users/username/repos
// https://api.github.com/users/username/repos?sort=created&direction=asc

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const repoName = "animal-farm";

  useEffect(() => {
    fetch("https://api.github.com/users/oniso20/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  fetch(`https://api.github.com/repos/oniso20/${repoName}/readme`)
    .then((response) => response.json())
    .then((data) => {
      // data.content is the base64 encoded content of the readme file
      // You can decode it using the atob() function
      const content = atob(data.content);
      console.log(content);
    });

  return (
    <div>
      {/* <Nav />
      <ProjectsList />
      <Footer /> */}
    </div>
  );
};

export default Projects;
