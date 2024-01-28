import React from "react";
import { Link } from "react-router-dom";

// style
import "./Home.css";

// images
import profilePic from "../../assets/images/onis_full2.png";
import FeaturedProject from "../../component/card/FeaturedProject";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>
            Hello &#9996; <br /> I'm Onis Emem
          </h1>
          <p>
            As an Agile Product Management Professional (ICP-APM) with a strong technical background, I deliver innovative solutions that solve real-world problems. Currently at Laferla Insurance Group, I oversee full-stack development using agile methodologies while providing strategic direction to align products with business goals.
          </p>
          <p>
            My formal training in ICT from <a href="https://www.bc.fi"> Business College Helsinki</a> combined with multiple certifications enables me to bridge the gap between technical and business needs. I lead cross-functional teams to develop user-centric products, leveraging market research, QA, and stakeholder feedback at every sprint.
          </p>
          <p>
Having managed projects in the construction industry and now steering product development, my experience allows me to optimize release cycles for on-time delivery. With proven success directing development projects end-to-end, I excel at each phase - from planning, solution design to final launch.
</p>
          <p>
            I welcome the chance to channel my technical expertise and leadership capabilities to deliver products that create true impact. My <a href="https://github.com/oniso20">GitHub</a> and{" "}
            <a href="https://www.linkedin.com/in/onis-emem">LinkedIn</a>{" "} available below showcase these strengths further.
          </p>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Sketch of Onis" />
        </div>
      </div>
      <div className="featured-projects">
        <h2>Featured Projects</h2>
        <FeaturedProject />
        <p>
          Find out about my featured projects or check out{" "}
          <Link to="/projects"> my whole portfolio</Link>.
        </p>
      </div>
    </div>
  );
};

export default Home;
