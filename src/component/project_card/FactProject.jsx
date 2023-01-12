import React from "react";
import { Link } from "react-router-dom";

// images and icons
import factImage from "../../assets/images/factchecker.jpeg";
import factHelp from "../../assets/images/fact-images/fact-help.jpg";
import factTop from "../../assets/images/fact-images/fact-top.jpg";
import factChoices from "../../assets/images/fact-images/fact-choices.jpg";

// styles
import "./ProjectCard.css";

const FactProject = () => {
  return (
    <div className="project">
      <h2 className="header-project">FactChecker Game</h2>
      <nav className="mini-nav">
        <a href="#overview">Overview</a>
        <a href="#process">Process</a>
        <a href="#result">Result</a>
        <a className="blink" href="https://github.com/oniso20/factle-game">
          Repo
        </a>
        <a className="blink" href="https://factcheckerpro.com/">
          Live Site
        </a>
      </nav>
      <div className="image-holder">
        <img src={factTop} alt="Image of project" />
      </div>
      <div id="overview" className="overview">
        <div className="header">
          <h2>Overview</h2>
        </div>
        <div className="overview-details">
          <h3>Purpose</h3>
          <p>
            The FactChecker Game is a new word game that challenges users to
            solve daily fact-based quizzes. These quizzes can range from asking
            which songs on Spotify have been streamed the most, to what country
            has won the most World Cups.
          </p>
          <p>
            Players have six chances to make their guesses and must choose the
            top five answers. The purpose and goal of the FactChecker Game is to
            provide a fun and engaging way for users to learn new facts and test
            their knowledge on current facts.
          </p>
          <h3>Web Stack</h3>
          <p>
            The FactChecker Game was built using a number of technologies,
            including HTML, CSS, SASS, React, JavaScript, Node.js, Express,
            MongoDB, AWS S3, AWS CloudFront, AWS Lambda, and MongoDB Atlas. A
            classic <a href="https://www.mongodb.com/mern-stack">MERN stack</a>{" "}
            was used to build the application, with the addition of AWS Lambda
            and MongoDB Atlas.
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src={factChoices} alt="Image of project" />
      </div>
      <div id="process" className="overview">
        <div className="header">
          <h2>Process</h2>
        </div>
        <div className="overview-details">
          <h3>Design</h3>
          <p>
            The design process for the FactChecker Game involved coming up with
            a variety of quiz topics and determining the best way to present the
            questions and answers to users. During the development process, the
            I implemented the game mechanics and user interface, as well as
            integrating the necessary technologies. To ensure best practices, I
            had one of my mentors{" "}
            <a href="https://www.linkedin.com/in/cfonville/">Corbin Fonville</a>{" "}
            review my code and provide feedback on how to improve the code
            through out the development and deployment process.
          </p>
          <h3>Development</h3>
          <p>
            The development process for the FactChecker Game involved building
            the front-end and back-end of the application. The front-end was
            built using React and styled with CSS. The back-end was built using
            Node.js and Express and uses MongoDB as the database. The server is
            deployed using AWS serverless functions and the database is deployed
            using MongoDB Atlas. The first version of the front-end is deployed
            using domain name from `namecheap.com`, AWS S3 bucket, and
            CloudFront distribution . A second version of the client-side was
            deployed on Netlify -
            <a href="www.factcheckerpro.com">`www.factcheckerpro.com`</a> due to
            SSL issues with my original domain from `namecheap.com`.
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src={factHelp} alt="Image of project" />
      </div>
      <div id="result" className="overview">
        <div className="header">
          <h2>Result</h2>
        </div>
        <div className="overview-details">
          <h3>Lessons Learnt</h3>
          <p>
            One of the key lessons learnt during the development of the
            FactChecker Game was the importance of deployment. Using AWS to
            deploy the server side and S3 bucket for the frontend was new for
            me, but proved to be a successful approach. I also had the
            opportunity to create a custom hook, which allowed me to reuse logic
            and improve the efficiency of my code. Overall, the FactChecker Game
            was a fun and educational project that provided users with a new way
            to learn and test their knowledge on a variety of topics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FactProject;
