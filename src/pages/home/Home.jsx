// create a home page component for a developer portfolio website with featured projects and a contact me session. Assume that Nav and Footer are already imported
import React from "react";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import FeaturedProjects from "../../components/featuredProjects/FeaturedProjects";

// style
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default Home;
