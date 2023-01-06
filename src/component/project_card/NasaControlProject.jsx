import React from "react";
import { Link } from "react-router-dom";

// styles
import "./ProjectCard.css";

const NasaControlProject = () => {
  return (
    <div className="project">
      <h1>NASA LAUNCH CONTROL</h1>
      <nav className="mini-nav">
        <a href="#overview">Overview</a>
        <a href="#process">Process</a>
        <a href="#result">Result</a>
        <a className="blink" href="https://github.com/oniso20">
          Repo
        </a>
        <a className="blink" href="#">
          Live Site
        </a>
      </nav>
      <div className="image-holder">
        <img src="#" alt="Image of project" />
      </div>
      <div id="overview" className="overview">
        <div className="header">
          <h2>Overview</h2>
        </div>
        <div className="overview-details">
          <h3>Purpose & Goals</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel
            animi delectus totam aut cum ducimus quo atque quidem ad temporibus
            pariatur, iste, cupiditate quis tenetur aspernatur, enim fuga
            quibusdam placeat illum distinctio dignissimos nemo. Nobis aliquid
            corrupti, minus ab fuga facilis, aut natus rem nesciunt vitae,
            officiis reiciendis laboriosam.
          </p>
          <h3>Web Stack</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolorem aliquid non illo fugiat beatae, ex reprehenderit minus
            libero laborum dolore distinctio, perspiciatis et nulla officiis!
            Nostrum, corrupti natus reiciendis ducimus sunt deserunt, quis cum
            ipsam deleniti reprehenderit temporibus a dicta sed repellat
            voluptas delectus rem facere laboriosam minima! Repellat?
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src="#" alt="Image of project" />
      </div>
      <div id="process" className="overview">
        <div className="header">
          <h2>Process</h2>
        </div>
        <div className="overview-details">
          <h3>Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel
            animi delectus totam aut cum ducimus quo atque quidem ad temporibus
            pariatur, iste, cupiditate quis tenetur aspernatur, enim fuga
            quibusdam placeat illum distinctio dignissimos nemo. Nobis aliquid
            corrupti, minus ab fuga facilis, aut natus rem nesciunt vitae,
            officiis reiciendis laboriosam.
          </p>
          <h3>Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolorem aliquid non illo fugiat beatae, ex reprehenderit minus
            libero laborum dolore distinctio, perspiciatis et nulla officiis!
            Nostrum, corrupti natus reiciendis ducimus sunt deserunt, quis cum
            ipsam deleniti reprehenderit temporibus a dicta sed repellat
            voluptas delectus rem facere laboriosam minima! Repellat?
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src="#" alt="Image of project" />
      </div>
      <div id="result" className="overview">
        <div className="header">
          <h2>Result</h2>
        </div>
        <div className="overview-details">
          <h3>Lessons Learnt</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel
            animi delectus totam aut cum ducimus quo atque quidem ad temporibus
            pariatur, iste, cupiditate quis tenetur aspernatur, enim fuga
            quibusdam placeat illum distinctio dignissimos nemo. Nobis aliquid
            corrupti, minus ab fuga facilis, aut natus rem nesciunt vitae,
            officiis reiciendis laboriosam.
          </p>
          <h3>Future improvements</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolorem aliquid non illo fugiat beatae, ex reprehenderit minus
            libero laborum dolore distinctio, perspiciatis et nulla officiis!
            Nostrum, corrupti natus reiciendis ducimus sunt deserunt, quis cum
            ipsam deleniti reprehenderit temporibus a dicta sed repellat
            voluptas delectus rem facere laboriosam minima! Repellat?
          </p>
        </div>
      </div>
      <div id="otherProjects" className="overview">
        <div className="header">
          <h2>Other Projects</h2>
        </div>
        <div className="overview-details"></div>
      </div>
    </div>
  );
};

export default NasaControlProject;
