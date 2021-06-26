import './App.css';
import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Dan Ryan</h1>
        <nav>
          <ul>
            <li><a href=''>About Me</a></li>
            <li><a href=''>Portfolio</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>Resume</a></li>
          </ul>
        </nav>
      </header>
      <div className="App">
        <Portfolio />
      </div>
      <footer>
        <ul>
          <li><a href='https://www.linkedin.com/in/daniel-tmo-ryan/'>linkedIn</a></li>
          <li><a href='https://github.com/boogiematrix'>Github</a></li>
          <li><a href=''>Other</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
