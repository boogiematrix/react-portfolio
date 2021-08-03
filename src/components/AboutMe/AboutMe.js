import React from 'react';
import './AboutMe.css'
import portrait from './portrait.jpeg'
export function AboutMe() {
    return (
        <div id="summary">
            <p>
                Hi I'm Dan! I'm full-stack web developer
                    on a voyage across the cyber seas.
                        As a lifelong lover of logic and language puzzles, I was lucky to discover
                        that programming for the web is a fountain of deductive opportunities with which to challenge myself.
                        It's invigorating to first lay eyes upon an objective and immediately begin plotting
                        the steps needed for an efficient resolution, only it's so much more exciting with
                        coding because, for one, the outcomes are real, and because the solutions grow and develop
                        before our eyes. I studied Spanish art and literature for four years at Carleton College
                        and I'm currently working towards a certificate in full stack web development from
                        the University of Minnesota. Feel free to contact me if you like my work!
            </p>
            <img src={portrait} alt='This is me' />
            <div id="skills">
                <h3>Skills:</h3>
                <ul>
                    <li>Javascript</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>ES6~plus</li>
                    <li>Node</li>
                    <li>TDD</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>Handlebars</li>
                    <li>Sequelize</li>
                </ul>
                <h3>Languages:</h3>
                <ul>
                    <li>English</li>
                    <li>Spanish</li>
                </ul>
            </div>
        </div>
    )
}