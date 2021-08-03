import React from 'react';
import './Resume.css'
import resumePdf from './Resume.pdf';

export function Resume() {
    return (
        <div>
            <h3><a href={resumePdf} download="resume-dan-ryan">Download Resume</a></h3>
        </div>
    )
}