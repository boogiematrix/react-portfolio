import React from 'react';
import './Projects.css';
import bball from './images/bball-screenshot.png';
import budget from './images/budget-tracker-screenshot.png';
import notes from './images/notes-screenshot.png';
import pokemon from './images/pokemonHeader.png';
import quiz from './images/quiz-screenshot.png';
import workout from './images/workout-tracker-screenshot.png';
const projectData = [
    {
        title: 'Fitness Tracker',
        repoName: 'workout-tracker',
        deployedName: 'https://blooming-scrubland-28026.herokuapp.com/',
        image: workout,
    },
    {
        title: 'Court Finder',
        repoName: 'court-finder',
        deployedName: 'https://quiet-beyond-45478.herokuapp.com/',
        image: bball,
    },
    {
        title: 'Gotta Catch A Vibe',
        repoName: 'Gotta-Catch-A-Vibe',
        deployedName: 'https://boogiematrix.github.io/Gotta-Catch-A-Vibe/',
        image: pokemon,
    },
    {
        title: 'Budget Tracker',
        repoName: 'pwa-budget-tracker',
        deployedName: 'https://cryptic-temple-61605.herokuapp.com/',
        image: budget,
    },
    {
        title: 'Note Taker',
        repoName: 'note-taker',
        deployedName: 'https://enigmatic-depths-78679.herokuapp.com/',
        image: notes,
    },
    {
        title: 'Code Quiz',
        repoName: 'code-quiz',
        deployedName: 'https://boogiematrix.github.io/code-quiz/',
        image: quiz,
    }
];

export function Projects() {
    return projectData.map((project, index) => {
        return (
            <div className='card' key={index}>
                <h2>{project.title}</h2>
                <div className='cardContent'> 
                    <img src={project.image} alt={project.title} />
                    <div>
                        <p><a href={project.deployedName}>Deployed App</a></p>
                        <p><a href='https://github.com/boogiematrix/'>GitHub</a></p>
                    </div>
                </div>
            </div>
        )
    })
}