import React from 'react';

function App() {
  const styleLink = {
    fontSize: 11,
    textAlign: 'center'
  }

  return (
    <div>
      We're coming soon

      Hello fellow shoppers! We're currently building our new fashion store. 
      Add your email below to stay up-to-date with announcements and our launch deals.

      Email Address
      
      <footer>
          <p style={styleLink}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
