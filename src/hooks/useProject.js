import { useState } from 'react';
// import an image

import factImage from '../assets/images/factchecker.jpeg';

export const useProject = () => {
    const [featuredProjects, setFeaturedProjects] = useState([
        { name: 'FactChecker Game', description: 'A Wordle spin-off that asks users to solve a daily fact based challenge. Users must then pick the top five answers and have six chances to make their guesses.', image: factImage },
        { name: 'Spinder', description: 'As part of a team of three, we built a social media app that matches people based on their music tastes and moods.', image: 'https://via.placeholder.com/300x200' },
        { name: 'TasteIT', description: 'This project is simple and introduced me to various concepts I rely on when working on React projects and simple CRUD operations', image: 'https://via.placeholder.com/300x200' },
        { name: 'NASA Launch Control', description: 'NASA planet explorer mission control dashboard for scheduling rocket launches, aborting rocket launches, checking habitable planets in space. This project was my first introduction to Node.js and backend development', image: 'https://via.placeholder.com/300x200' },
    ]);

    const [learningProjects, setLearningProjects] = useState([
        { name: 'Speed Game', description: 'Speed game is replica of the early 1990\'s speed game played by kids. The player has to hit the on-light quickly before the light goes off. It gets faster with each passing round. This version is is themed \"Catch me if you can\", the player is a police officer trying to catch a bank rubber and recover stolen funds.', image: 'https://via.placeholder.com/300x200', demo: 'https://oniso20.github.io/the-speed-game/', github: 'https://github.com/oniso20/the-speed-game', tech: 'React,JavaScript,CSS3,HTML5,Github' },
        { name: 'Pokedex', description: 'A Pokemon site with search functionality based on the Pokemon name and generation', image: 'https://via.placeholder.com/300x200', demo: 'https://public.bc.fi/s2200729/pokemon/', github: 'https://github.com/oniso20/pokemon', tech: 'VanillaJS,HTML5,CSS3,Github' },
        { name: 'Background Color Generator', description: 'A linear background generator which provides control buttons to visualize the background colors and displays the css code. Built during my classes at the Business College Helsinki', image: 'https://via.placeholder.com/300x200', demo: 'https://public.bc.fi/s2200729/bg-generator/', github: 'https://github.com/oniso20/coding_with_margit/tree/main/week_5/bg-generator', tech: 'VanillaJS,HTML5,CSS3,Github' },
        { name: 'Styles Conference', description: 'This was my first introduction to web development from previous experience with just Python. I was able to attempt reproducing the exercise in Shay Howe\'s Learn to Code with HTML and CSS book', image: 'https://via.placeholder.com/300x200', demo: 'https://onis-styles-conference-website.glitch.me/index.html', github: 'https://glitch.com/edit/#!/onis-styles-conference-website?path=script.js%3A1%3A0', tech: 'HTML5,CSS3' },
    ]);

    const [personalProjects, setPersonalProjects] = useState([
        { name: 'ISS Tracker', description: 'I hope to visit a different planet one day and in this project I built a very basic web application for tracking the international space satellite as it goes around the world.', image: 'https://via.placeholder.com/300x200', demo: 'https://oniso20.github.io/IntSpaceSatelliteTracker/', github: 'https://github.com/oniso20/IntSpaceSatelliteTracker', tech: 'JavaScript,HTML5,CSS3,Github' },
        { name: 'Movie Site', description: 'I enjoy movie nights with my family and built a web app to view recent movies, their overview and rating using data from the TMDB API.', image: 'https://via.placeholder.com/300x200', demo: 'https://oniso20.github.io/movieboard/', github: 'https://github.com/oniso20/movieboard', tech: 'JavaScript,HTML5,CSS3,Github' },
    ]);

    return {
        featuredProjects,
        learningProjects,
        personalProjects
    };
};

