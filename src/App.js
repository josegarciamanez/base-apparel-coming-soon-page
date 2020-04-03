import React from 'react';
import './App.css';
import logo from './images/logo.svg';

function App() {

  return (
    <div className="grid-container">
      <div className="left-container">
        <img className="logo" src={logo} alt="Logo" />
        <h2>We're <span>coming soon</span></h2>
        <div className="texto-container">
          <p>
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
        </div>
        <form>
          <input type="email" placeholder="Email Address" />
          <button>&#8688;</button>
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
