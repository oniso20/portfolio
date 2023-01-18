import React from "react";

// styles
import "./ProjectCard.css";

// images
import home from "../../assets/images/portfolio-images/home.png";
import projects from "../../assets/images/portfolio-images/projects.png";
import resume from "../../assets/images/portfolio-images/resume.png";

const PortfolioProject = () => {
  return (
    <div className="project">
      <h1>Portfolio Project</h1>
      <nav className="mini-nav">
        <a href="#overview">Overview</a>
        <a href="#process">Process</a>
        <a href="#result">Result</a>
        <a className="blink" href="https://github.com/oniso20/portfolio">
          Repo
        </a>
        <a className="blink" href="https://onis-emem.com/">
          Live Site
        </a>
      </nav>
      <div className="image-holder">
        <img src={home} alt="" />
      </div>
      <div id="overview" className="overview">
        <div className="header">
          <h2>Overview</h2>
        </div>
        <div className="overview-details">
          <h3>Purpose & Goals</h3>
          <p>
            The Portfolio Project is a personal website that showcases my
            projects and work experience as a software developer. The site
            includes a selection of my most notable projects, as well as my
            resume and contact information.
          </p>
          <p>
            The purpose of the Portfolio Project is to provide a professional
            online presence for myself and to showcase my skills and experience
            to potential employers or clients. The goal is to create a visually
            appealing and easy-to-use website that effectively communicates my
            capabilities and interests.
          </p>
          <h3>Web Stack</h3>
          <p>
            The Portfolio Project was developed using HTML, CSS, React.js. The
            first version of the front-end is deployed using domain name from
            `namecheap.com`, AWS S3 bucket, Route53, and CloudFront. A second
            version of the client-side was deployed on Netlify -
            <a href="www.onis-emem.com">`www.onis-emem.com`</a> due to SSL
            issues with my original domain from `namecheap.com`.
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src={projects} alt="" />
      </div>
      <div id="process" className="overview">
        <div className="header">
          <h2>Process</h2>
        </div>
        <div className="overview-details">
          <h3>Design</h3>
          <p>
            For the Design process of the Portfolio Project, I focused on
            creating a visually appealing and easy-to-use website that
            effectively communicates my skills and experience. This involved
            defining the layout and design elements, such as colors, fonts, and
            graphics, as well as determining the best way to present my
            projects, resume, and contact information.
          </p>
          <h3>Development</h3>
          <p>
            During the Development process, I implemented the various features
            of the site, including the ability to browse my projects, view my
            resume and contact information, and toggle between dark and light
            mode. I also worked on creating reusable components and custom hooks
            to improve the efficiency and maintainability of the code.
          </p>
          <p>
            Overall, the Design and Development process for the Portfolio
            Project involved careful planning and attention to detail, resulting
            in a well-designed and functional personal website. The project is
            open source and can be found on my GitHub page if you would like to
            take a look and contribute.
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src={resume} alt="" />
      </div>
      <div id="result" className="overview">
        <div className="header">
          <h2>Result</h2>
        </div>
        <div className="overview-details">
          <h3>Lessons Learnt</h3>
          <p>
            The result of the Portfolio Project is a professional and visually
            appealing personal website that effectively showcases my skills and
            experience. The site includes a variety of projects, as well as my
            resume and contact information, making it easy for potential
            employers or clients to learn more about me.
          </p>
          <p>
            One of the key lessons I learned during the development of the
            Portfolio Project was the importance of reusable components and
            custom hooks in maintaining efficient and maintainable code. I also
            gained experience in deploying the frontend of a website using a
            variety of tools and platforms.
          </p>
          <p>
            Overall, the Portfolio Project is a valuable resource for myself and
            serves as a great example of my skills and capabilities. I encourage
            other developers to visit the source code and use it as a reference
            or inspiration for their own projects.
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

export default PortfolioProject;
