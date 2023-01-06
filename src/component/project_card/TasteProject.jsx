import React from "react";
import { Link } from "react-router-dom";

// styles
import "./ProjectCard.css";

// images
import tasteHome from "../../assets/images/taste-images/taste-home.png";
import allRecipe from "../../assets/images/taste-images/all-recipe.png";
import viewRecipe from "../../assets/images/taste-images/view-recipe.png";

const TasteProject = () => {
  return (
    <div className="project">
      <h1>TasteIT</h1>
      <nav className="mini-nav">
        <a href="#overview">Overview</a>
        <a href="#process">Process</a>
        <a href="#result">Result</a>
        <a className="blink" href="https://github.com/oniso20/taste-it">
          Repo
        </a>
        <a className="blink" href="https://github.com/oniso20/taste-it">
          Live Site
        </a>
      </nav>
      <div className="image-holder">
        <img src={tasteHome} alt="Image of project" />
      </div>
      <div id="overview" className="overview">
        <div className="header">
          <h2>Overview</h2>
        </div>
        <div className="overview-details">
          <h3>Purpose & Goals</h3>
          <p>
            TasteIT is a web application that allows users to browse and
            contribute food recipes from around the world. With TasteIT, users
            can easily discover new and exciting dishes from different countries
            and even share their own creations with the community.
          </p>
          <p>
            The purpose of TasteIT is to provide a platform for food enthusiasts
            to discover and share recipes from around the world. The goal is to
            create a diverse and comprehensive collection of recipes that
            reflects the culinary traditions and diversity of different
            cultures.
          </p>
          <h3>Web Stack</h3>
          <p>
            TasteIT was developed using a number of technologies, including
            React, Node.js, HTML, CSS, and JavaScript. A typical{" "}
            <a href="https://www.mongodb.com/mern-stack">MERN</a> stack. The app
            also utilizes the restcountries API to fetch country flags and
            display them on the recipe pages, allowing users to easily see the
            country of origin for each recipe.
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src={allRecipe} alt="Image of project" />
      </div>
      <div id="process" className="overview">
        <div className="header">
          <h2>Process</h2>
        </div>
        <div className="overview-details">
          <h3>Design</h3>
          <p>
            For the Design process of TasteIT, the team focused on creating an
            intuitive and user-friendly interface for the app. This involved
            defining the layout and design elements, such as colors, fonts, and
            graphics, as well as determining the best way to present the recipe
            information to users.
          </p>
          <h3>Development</h3>
          <p>
            During the Development process, the team implemented the various
            features of the app, including the ability to browse and contribute
            recipes, view full recipe details, search for recipes by country and
            ingredient, and view the country flag for each recipe. They also
            worked on integrating the restcountries API to fetch and display the
            country flags on the recipe pages. Overall, the Design and
            Development process for TasteIT involved careful planning and
            attention to detail, resulting in a well-designed and functional web
            application.
          </p>
        </div>
      </div>
      <div className="image-holder">
        <img src={viewRecipe} alt="Image of project" />
      </div>
      <div id="result" className="overview">
        <div className="header">
          <h2>Result</h2>
        </div>
        <div className="overview-details">
          <h3>Lessons Learnt</h3>
          <p>
            During the development process, I learned how to create and use
            custom fetch hooks and implemented a search feature using useParams,
            useLocation(), queryParams, and URLSearchParams. These skills helped
            to make the app more user-friendly and efficient.
          </p>
          <p>
            Overall, TasteIT is a valuable resource for food lovers and a great
            platform for sharing and discovering new recipes from around the
            globe. The team's hard work and dedication paid off, resulting in an
            app that is sure to be a hit with foodies everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TasteProject;
