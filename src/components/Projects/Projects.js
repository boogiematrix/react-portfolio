import React from 'react';
import './Projects.css'
const projectData = [
    {
        title: 'Fitness Tracker',
        repoName: 'workout-tracker',
        deployedName: 'https://blooming-scrubland-28026.herokuapp.com/',
        image: 'https://github.com/boogiematrix/workout-tracker/blob/main/public/images/workout-tracker-screenshot.png?raw=true',
    },
    {
        title: 'Court Finder',
        repoName: 'court-finder',
        deployedName: 'https://quiet-beyond-45478.herokuapp.com/',
        image: 'https://github.com/boogiematrix/court-finder/blob/main/Website.png?raw=true',
    },
    {
        title: 'Gotta Catch A Vibe',
        repoName: 'Gotta-Catch-A-Vibe',
        deployedName: 'https://boogiematrix.github.io/Gotta-Catch-A-Vibe/',
        image: 'https://github.com/boogiematrix/Gotta-Catch-A-Vibe/blob/main/public/images/pokemonHeader.png?raw=true',
    },
    {
        title: 'Budget Tracker',
        repoName: 'pwa-budget-tracker',
        deployedName: 'https://cryptic-temple-61605.herokuapp.com/',
        image: 'https://github.com/boogiematrix/pwa-budget-tracker/blob/main/public/images/budget-tracker-screenshot.png?raw=true',
    },
    {
        title: 'Note Taker',
        repoName: 'note-taker',
        deployedName: 'https://enigmatic-depths-78679.herokuapp.com/',
        image: 'https://github.com/boogiematrix/note-taker/blob/main/public/assets/pictures/notes-screenshot.png?raw=true',
    },
    {
        title: 'Code Quiz',
        repoName: 'code-quiz',
        deployedName: 'https://boogiematrix.github.io/code-quiz/',
        image: 'https://raw.githubusercontent.com/boogiematrix/code-quiz/main/Screen%20Shot%202021-03-05%20at%208.01.48%20PM.png',
    }
];

export function Projects() {
    return projectData.map((project, index) => {
        return (
            <div className='card' key={index}>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} />
                <p><a href={project.deployedName}>Deployed App</a></p>
                <p><a href='https://github.com/boogiematrix/'>GitHub</a></p>
            </div>
        )
    })
}