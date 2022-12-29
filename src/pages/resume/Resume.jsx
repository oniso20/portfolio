import React from "react";

// styles
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <nav className="mini-nav">
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="https://github.com/oniso20">
          Download a copy from Google Docs
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

          <div className="element">
            <div className="left">
              <h3>University of Southern Denmark</h3>
              <p>Life Cycle Engineering</p>
            </div>
            <div className="right">
              <p>Odense, Denmark</p>
              <p>Aug, 2019 - Sep, 2020</p>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="container">
        <div className="content">
          <h2>Skills</h2>
          <div className="element">
            <div className="left">
              <div className="text">
                <h3>Frontend</h3>
                <div className="icons">Icons</div>
              </div>
              <div className="text">
                <h3>Backend & Databases</h3>
                <div className="icons">Icons</div>
              </div>
              <div className="text">
                <h3>Others</h3>
                <div className="icons">Icons</div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
