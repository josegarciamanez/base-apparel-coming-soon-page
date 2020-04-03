import React from 'react';
import './App.css';

function App() {

  return (
    <div className="grid-container">
      <div className="left-container">
        <h2>We're coming soon</h2>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <form action="">
          <input type="email" placeholder="Email Address" />
          <input type="submit" />
        </form>
        <footer>
          <p className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://josegarciamanez.github.io" target="_blank" rel="noopener noreferrer">@josegarciamanez</a>.
        </p>
        </footer>
      </div>
      <div className="right-container"></div>
    </div>
  );
}

export default App;
