import React from "react";

// styles
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer-wrap">
      <div className="footer-container">
        <footer className="footer">
          <div className="copyright">
            {" "}
            <strong>2023</strong> | &copy; Onis Emem
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/onis-emem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/oniso20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </footer>
        <div className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
