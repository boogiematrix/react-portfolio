import React from 'react';
import './Projects.css';
import bball from './images/bball-screenshot.png';
import budget from './images/budget-tracker-screenshot.png';
import notes from './images/notes-screenshot.png';
import pokemon from './images/pokemonHeader.png';
//import quiz from './images/quiz-screenshot.png';
import workout from './images/workout-tracker-screenshot.png';
import books from './images/googlebooks-screenshot.png'
const projectData = [
    {
        title: 'Book Search',
        repoName: 'book-search',
        deployedName: 'https://boiling-basin-57000.herokuapp.com/',
        image: books,
        description: "This is a Google Books API search engine. It was refactored from a fully functioning RESTful API into one built with Apollo Server and GraphQL. The app was based on the MERN stack model with a React front end, MongoDB database, and Node.js/Express.js server and API. In addition to being able to search for books, if signed in, the user can save the books that catch their eye. Later, the user can delete those books once they've been read."
    },
    {
        title: 'Fitness Tracker',
        repoName: 'workout-tracker',
        deployedName: 'https://blooming-scrubland-28026.herokuapp.com/',
        image: workout,
        description: "This is basically a workout specific note-taking app. It keeps track of weight lifted and workout duration, and displays the data graphically, allowing you to quickly see any changes in your regimen. Using MongoDB, the workout stats are stored in a non-relational data collection. The ODM used for this project is Mongoose. It's deployed to Heroku with MongoDB Atlas"
    },
    {
        title: 'Court Finder',
        repoName: 'court-finder',
        deployedName: 'https://quiet-beyond-45478.herokuapp.com/',
        image: bball,
        description: 'A pick-up basketball networking app. This is an exercise in implementing the MVC framework. It uses sequelize, handlebars, and express.'
    },
    {
        title: 'Gotta Catch A Vibe',
        repoName: 'Gotta-Catch-A-Vibe',
        deployedName: 'https://boogiematrix.github.io/Gotta-Catch-A-Vibe/',
        image: pokemon,
        description: 'Provides data on weather-based status boosts for Pokemon Go. Weather data comes from the openWeather API. Pokemon data comes from the Pokemon Go API, and the PokeAPI. We also used Tailwind for styling.'
    },
    {
        title: 'Budget Tracker',
        repoName: 'pwa-budget-tracker',
        deployedName: 'https://cryptic-temple-61605.herokuapp.com/',
        image: budget,
        description: "This is a budget tracking application that allows for offline access and functionality.The user can add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. This is an exercise in implementing offline functionality. It uses the browser's indexDB while offline, and MongoDB while online."
    },
    {
        title: 'Note Taker',
        repoName: 'note-taker',
        deployedName: 'https://enigmatic-depths-78679.herokuapp.com/',
        image: notes,
        description: "This is a note taking application that can be used to write and save notes. This application uses an Express.js back end and saves to and retrieves data from a JSON file. Write your note title and text then click the save icon in the upper right to save your note. You can retrieve the note by clicking on the title's text in the left column, or delete it by clicking the trash can icon associated with each note."
    },
    // {
    //     title: 'Code Quiz',
    //     repoName: 'code-quiz',
    //     deployedName: 'https://boogiematrix.github.io/code-quiz/',
    //     image: quiz,
    //     description: 'A simple quiz demonstrating DOM manipulation'
    // },
];

export function Projects() {
    return projectData.map((project, index) => {
        return (
            <div className='card' key={index}>
                <h2>{project.title}</h2>
                <div className='cardContent'> 
                    <div className='imageWrapper'>
                        <img src={project.image} alt={project.title} />
                        <p>{project.description}</p>
                    </div>
                    <div className='links'>
                        <p><a href={project.deployedName}>Deployed App</a></p>
                        <p><a href={`https://github.com/boogiematrix/${project.repoName}`}>GitHub</a></p>
                    </div>
                </div>
            </div>
        )
    })
}