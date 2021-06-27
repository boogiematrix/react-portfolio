import React from 'react';
import './Resume.css'

export function Resume() {
    return (
        <div id="skills">
            <div >
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
            <div><a href='../../public/Resume.pdf' download="resume-dan-ryan">Download Resume</a></div>
        </div>
    )
}