import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import mongodb icon from fontawesome

import {
  faNodeJs,
  faJs,
  faJsSquare,
  faBootstrap,
  faSass,
  faReact,
  faGithub,
  faHtml5,
  faCss3Alt,
  faAws,
  faFigma,
  faAdobe,
  faLinux,
  faWindows,
  faNpm,
  faJira,
  faSlack,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// styles
import "./Resume.css";

const Resume = () => {
  const [frontendOpen, setFrontendOpen] = useState(true);
  const [backendOpen, setBackendOpen] = useState(true);
  const [othersOpen, setOthersOpen] = useState(true);

  function handleFrontendClick() {
    setFrontendOpen(!frontendOpen);
  }

  function handleBackendClick() {
    setBackendOpen(!backendOpen);
  }

  function handleOthersClick() {
    setOthersOpen(!othersOpen);
  }

  return (
    <div className="resume">
      <h2 className="resume-header">Resume</h2>
      <nav className="mini-nav">
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a className="blink" href="https://github.com/oniso20">
          Download a copy
        </a>
      </nav>
      <div id="education" className="container">
        <div className="content">
          <h2>Education</h2>
          <div className="element">
            <div className="left">
              <h3>Business College Helsinki</h3>
              <p>Information and Communications Technology</p>
              <p>
                <span>Specialization</span> Full-Stack Web Development - React &
                Node
              </p>
            </div>
            <div className="right">
              <p>Helsinki, Finland</p>
              <p>Finishing Jun, 2023</p>
            </div>
          </div>
          <div className="element">
            <div className="left">
              <h3>University of Southern Denmark</h3>
              <p>Life Cycle Engineering</p>
            </div>
            <div className="right">
              <p>Odense, Denmark</p>
              <p>Aug. 2019 - Sept. 2020</p>
            </div>
          </div>
        </div>
      </div>
      <div id="experience" className="container">
        <div className="content">
          <h2>Experience</h2>
          <div className="element">
            <div className="left">
              <h3>100Devs</h3>
              <p>Web development agency</p>
              <h5>Software Developer</h5>
              <ul>
                <li>
                  Collaborated with a team of developers to build modern and
                  responsive web applications using best practices.
                </li>
                <li>
                  Built semantically structured full-stack web applications
                </li>
                <li>
                  Applied agile methodologies like SCRUM for project management
                </li>
              </ul>
            </div>
            <div className="right">
              <p>Los Angeles, CA (Remote)</p>
              <p>Dec. 2021 — Present</p>
            </div>
          </div>
          <div className="element">
            <div className="left">
              <h3>Wise</h3>
              <p>International money transfer</p>
              <h5>Payment Operation Specialist</h5>
              <p>
                In this role I used tools/languages such as ZenDesk, Slack,
                Looker, Google Sheets and SQL. My daily tasks include;
              </p>
              <ul>
                <li>
                  Proactively automating transaction processing and reducing
                  manual and repetitive work. This increased the efficiency of
                  the team by 80%.
                </li>
                <li>
                  Translating customer needs into plans and supporting these
                  plans with analysis. This drove improvements to Wise product
                  and work processes to become over 300% more efficient.
                </li>
                <li>Resolving customer issues related to missing payments</li>
                <li>
                  Driving operational excellence, while maintaining sufficient
                  controls, and assessing and mitigating operational risks.
                </li>
              </ul>
            </div>
            <div className="right">
              <p>Tallinn, Estonia</p>
              <p>Nov. 2020 — Sept. 2022</p>
            </div>
          </div>
          <div className="element">
            <div className="left">
              <h3>Nislo Research</h3>
              <p>
                Research & writing services for business/individuals clients.
              </p>
              <h5>Researcher/Analyst</h5>
              <p>
                In this role I used tools/languages such as Excel, Google Sheets
                and Python. My daily tasks include;
              </p>
              <ul>
                <li>
                  Designed and implemented quantitative and qualitative research
                  using tools, metrics, models etc., in line with clients’
                  operational benchmarks and advising clients on driving the
                  adoption of results.
                </li>
                <li>
                  Increased stakeholder engagement by working collaboratively to
                  identify key performance indicators (KPI), and develop
                  measurable goals and statement of work (SOW) to improve
                  research efficiencies.
                </li>
              </ul>
            </div>
            <div className="right">
              <p>Cambridge, UK (Remote)</p>
              <p>Jan. 2018 — Oct. 2020</p>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="container">
        <div className="content">
          <h2>Skills</h2>
          <p>Click to view skills below</p>
          <div className="element">
            <div className="left">
              <div className="text">
                <h3 onClick={handleFrontendClick}>Frontend</h3>
                <div className={`icons ${frontendOpen ? "" : "hidden"}`}>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faHtml5} /> HTML5
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faCss3Alt} /> CSS3
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faJsSquare} /> JavaScript
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faReact} /> React
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faSass} /> Sass
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                  </div>
                </div>
              </div>
              <div className="text">
                <h3 onClick={handleBackendClick}>Backend & Databases</h3>
                <div className={`icons ${backendOpen ? "" : "hidden"}`}>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faNodeJs} /> Node.js
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faJs} /> Express.js
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faDatabase} /> MongoDB
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faDatabase} /> Firebase
                  </div>
                </div>
              </div>
              <div className="text">
                <h3 onClick={handleOthersClick}>Others</h3>
                <div className={`icons ${othersOpen ? "" : "hidden"}`}>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faFigma} /> Figma
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faJira} /> Jira
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faSlack} /> Slack
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faTrello} /> Trello
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faAws} /> AWS
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faNpm} /> NPM
                  </div>
                  <div className="language-tag">
                    <FontAwesomeIcon icon={faLinux} /> Linux
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="hubbies" className="container">
        <div className="content">
          <h2>Meet Me</h2>
          <div className="element">
            <p>
              I love to read books, watch movies and play video games. I also
              enjoy watching football and UFC.
            </p>
            <div className="hubbies">
              <p>
                My Favorite games are FIFA, UFC, NFC, God of War. I rank in the
                top 6% of FIFA FUT players globally and have finished God of War
                twice.
              </p>
              <p>
                My favorite UFC fighters in no particular order are; <br />{" "}
                <a href="https://www.espn.com/mma/fighter/_/id/4285679/israel-adesanya">
                  Isreal Adesanya
                </a>{" "}
                - for his fluidity and skills, <br />{" "}
                <a href="https://www.espn.com/mma/fighter/_/id/3088812/kamaru-usman">
                  Kamoru Usman
                </a>{" "}
                - for his sheer strength, and <br />{" "}
                <a href="https://www.espn.com/mma/fighter/_/id/2611557/khabibnurmagomedov">
                  Khabib Nurmagomedov
                </a>{" "}
                - for his wrestling and strong-will.
              </p>
              <p>
                I am a big fan of{" "}
                <a href="https://www.arsenal.com/">Arsenal FC</a> and never miss
                a live match.
              </p>
              <p>
                I also enjoy music and my favorite instrument is the drum. I
                started playing the drums at the age of 10 and played
                consistently for about 10 years. I don't play as much anymore
                but I still enjoy it.{" "}
                <a href="https://youtu.be/Ta_9kJv4ML0">Here</a> is a collection
                of some amazing beats I love to listen to.
              </p>
              <p>This one is a secret &#128521; ...I can't say no to cake!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
