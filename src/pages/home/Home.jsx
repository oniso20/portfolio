import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpider, faWaveHand } from "@fortawesome/free-solid-svg-icons";

// style
import "./Home.css";

// images
import profilePic from "../../assets/images/onis_full2.png";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>
            Hello &#9996; <br /> I'm Onis Emem
          </h1>
          <p>
            A software developer with a strong emphasis on frontend development
            and user experience, I am skilled in creating{" "}
            <a href="https://responsibleweb.app/">
              responsive web applications
            </a>
            {"."}
          </p>
          <p>
            I received my formal training at the
            <a href="https://www.bc.fi"> Business College Helsinki</a>, where I
            gained a strong foundation in both frontend and backend development.
          </p>
          <p>
            With my skills and knowledge, I have a proven track record of
            delivering high-quality, user-friendly web applications that meet
            the needs of my clients.
          </p>
          <p>
            I am currently available to work from both Helsinki and Estonia, and
            am always looking for exciting new opportunities to grow and develop
            my skills as a developer.
          </p>
          <p>
            You can find my <a href="https://github.com/oniso20">GitHub</a> and{" "}
            <a href="https://www.linkedin.com/in/onis-emem">LinkedIn</a>{" "}
            profiles for more information.
          </p>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Sketch of Onis" />
        </div>
      </div>
      <div className="featured-projects">
        <h2>Featured Projects</h2>
        <p>
          Find out about my featured projects or check out{" "}
          <Link to="/projects"> my whole portfolio</Link>.
        </p>
      </div>
    </div>
  );
};

export default Home;
