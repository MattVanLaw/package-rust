import React from 'react';
import logo from './logo.svg';
import './App.css';
import getFormattedOutdated from './utils/get-formatted-outdated';

function App() {
  const json = require('./outdated.json');

  const modules = getFormattedOutdated(json)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
