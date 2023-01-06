import React from "react";
import { Link } from "react-router-dom";

// images and icons
import spinderDashboard from "../../assets/images/spinder-images/spinder-dashboard.jpg";
import spinderHome from "../../assets/images/spinder-images/spinder-home.jpg";
import spinderSignup from "../../assets/images/spinder-images/spinder-signup.jpg";

// styles
import "./ProjectCard.css";

const SpinderProject = () => {
  return (
    <div className="project">
      <h2 className="header-project">Spinder App</h2>
      <nav className="mini-nav">
        <a href="#overview">Overview</a>
        <a href="#process">Process</a>
        <a href="#result">Result</a>
        <a className="blink" href="https://github.com/oniso20/spinder-app">
          Repo
        </a>
        <a className="blink" href="https://spinder.netlify.app/">
          Live Site
        </a>
      </nav>
      <div className="image-holder">
        <img src={spinderHome} alt="Image of project" />
      </div>
      <div id="overview" className="overview">
        <div className="header">
          <h2>Overview</h2>
        </div>
        <div className="overview-details">
          <h3>Purpose</h3>
          <p>
            The Spinder App is a revolutionary new dating app that connects
            users based on their music tastes and moods. By fusing music and the
            popular swiping concept of apps like Tinder, the Spinder App aims to
            create meaningful connections between users.
          </p>
          <p>
            The purpose of the Spinder App is to bring people together through
            their shared love of music and to explore the connection between
            music and personality. The goal is to provide a unique and enjoyable
            way for users to meet and connect with others who have similar
            interests.
          </p>
          <h3>Web Stack</h3>
          <p>
            A classic{" "}
            <a href="https://www.mongodb.com/mern-stack">MERN stack</a> was used
            to build the application. The Spinder App was developed using a
            variety of technologies, including HTML, CSS, React, JavaScript,
            MongoDB, and Node.js. These technologies were used to create a
            login/sign-up functionality, an onboarding page, a user profile
            page, a dashboard for browsing and connecting with other users,
            swipe functionality to get matched with another user, and a chat
            feature for messaging.
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src={spinderSignup} alt="Image of project" />
      </div>
      <div id="process" className="overview">
        <div className="header">
          <h2>Process</h2>
        </div>
        <div className="overview-details">
          <h3>Design</h3>
          <p>
            The development process for the Spinder App involved a team of
            contributors, including{" "}
            <a href="https://github.com/kirpister">Jenni Alanko</a> ,{" "}
            <a href="https://github.com/BPharoh">Alexander Otulugbu</a> , and
            myself. The team used a single git repository to plan and
            collaborate on the project, and worked to establish communication
            between the frontend and backend of the app. The initial design was
            created of the app using Figma, and the team used the design to
            create the frontend of the application. The backend was created
            using MongoDB and Node.js, and the frontend was created using React.
            For managing our tasks and planning our sprints, we used{" "}
            <a href="https://github.com/features/issues">GitHub Project</a>. The
            team also used Microsoft Teams and Discord to communicate and
            collaborate on the project.
          </p>
          <h3>Development</h3>
          <p>
            Still in the pipeline, the Spinder App is a work in progress. The
            team is currently working on implementing additional features, such
            as a music player and a user search feature.
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src={spinderDashboard} alt="Image of project" />
      </div>
      <div id="result" className="overview">
        <div className="header">
          <h2>Result</h2>
        </div>
        <div className="overview-details">
          <h3>Lessons Learnt</h3>
          <p>
            One of the key lessons learnt during the development of the Spinder
            App was the importance of working as a team and using collaborative
            tools like GitHub to plan and manage the project. The team also
            gained experience in building communication between the frontend and
            backend of the app, which was a valuable skill to have. As the
            project owner, I also learned the importance of delegating tasks and
            managing a team of contributors.
          </p>
          <p>
            Overall, the Spinder App is a unique and innovative dating app that
            uses music to bring people together in a fun and meaningful way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpinderProject;
