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
            An accomplished software engineer and project manager, I bring a fusion of technical proficiency and leadership capabilities to the table. At Laferla Insurance, I've transcended traditional engineering roles, handling not just development but also the intricate aspects of project management. From laying out roadmaps to interfacing with directors, my role has always been about steering projects with a vision.
          </p>
          <p>
            I received my formal training at the
            <a href="https://www.bc.fi"> Business College Helsinki</a>, where I
            gained a strong foundation in both frontend and backend development.
          </p>
          <p>
Over time, I've seamlessly transitioned into roles demanding strategic planning, team collaboration tools setup, and process optimization. At Laferla, I personally initiated the integration of tools like Jira, Confluence, GitHub, and Slack, thereby streamlining our software development lifecycle and fostering enhanced team communication.
</p>
          <p>
            While my roots are in development, I worked for many years as a PM in the construction industry before relocating to Europe and switching careers to Tech. Today, my aspirations lean towards leadership roles in software development project management and other engineering managerial capacities. I am driven by the desire to not just develop, but to lead, strategize, and deliver projects that resonate on a larger scale.
          </p>
          <p>
            I am currently available to work from both Helsinki and Estonia, I am eager to explore avenues where I can channel my combined engineering and managerial expertise. For a deeper dive into my professional journey, I invite you to explore my GitHub and LinkedIn profiles below.
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
