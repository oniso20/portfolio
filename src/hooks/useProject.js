import { useState } from 'react';

export const useProject = () => {
    const [featuredProjects, setFeaturedProjects] = useState([
        { name: 'Project 1', description: 'This is project 1', image: 'https://via.placeholder.com/300x200' },
        { name: 'Project 2', description: 'This is project 1', image: 'https://via.placeholder.com/300x200' },
        { name: 'Project 3', description: 'This is project 1', image: 'https://via.placeholder.com/300x200' },
        { name: 'Project 4', description: 'This is project 1', image: 'https://via.placeholder.com/300x200' },
    ]);

    const [learningProjects, setLearningProjects] = useState([
        { name: 'project 1', description: 'This is project 1', image: 'https://via.placeholder.com/300x200', demo: 'https://via.placeholder.com/300x200', github: 'https://via.placeholder.com/300x200', tech: 'React, Node, Express, MongoDB' },
        { name: 'project 2', description: 'This is project 1', image: 'https://via.placeholder.com/300x200', demo: 'https://via.placeholder.com/300x200', github: 'https://via.placeholder.com/300x200', tech: 'React, Node, Express, MongoDB' },
        { name: 'project 3', description: 'This is project 1', image: 'https://via.placeholder.com/300x200', demo: 'https://via.placeholder.com/300x200', github: 'https://via.placeholder.com/300x200', tech: 'React, Node, Express, MongoDB' },
        { name: 'project 4', description: 'This is project 1', image: 'https://via.placeholder.com/300x200', demo: 'https://via.placeholder.com/300x200', github: 'https://via.placeholder.com/300x200', tech: 'React, Node, Express, MongoDB' },
    ]);

    const [personalProjects, setPersonalProjects] = useState([
        { name: 'project 1', description: 'This is project 1', image: 'https://via.placeholder.com/300x200', demo: 'https://via.placeholder.com/300x200', github: 'https://via.placeholder.com/300x200', tech: 'React, Node, Express, MongoDB' },
        { name: 'project 2', description: 'This is project 1', image: 'https://via.placeholder.com/300x200', demo: 'https://via.placeholder.com/300x200', github: 'https://via.placeholder.com/300x200', tech: 'React, Node, Express, MongoDB' },
        { name: 'project 3', description: 'This is project 1', image: 'https://via.placeholder.com/300x200', demo: 'https://via.placeholder.com/300x200', github: 'https://via.placeholder.com/300x200', tech: 'React, Node, Express, MongoDB' },
        { name: 'project 4', description: 'This is project 1', image: 'https://via.placeholder.com/300x200', demo: 'https://via.placeholder.com/300x200', github: 'https://via.placeholder.com/300x200', tech: 'React, Node, Express, MongoDB' },
    ]);

    return {
        featuredProjects,
        learningProjects,
        personalProjects
    };
};

