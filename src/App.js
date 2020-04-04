import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.svg';
import iconerror from './images/icon-error.svg';

class App extends Component {
  state = {
    regEx: /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim,
    email: '',
    error: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.email);
    if (this.state.email === '' || !this.state.regEx.test(this.state.email)) {
      this.setState({
        error: true,
      });
    } else {
      this.forceUpdate();
      this.setState({
        error: false,
        email: '',
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  render() {
    return (
      <div className='grid-container'>
        <div className='left-container'>
          <img className='logo' src={logo} alt='Logo' />
          <h2>
            We're <span>coming soon</span>
          </h2>
          <div className='texto-container'>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <form onSubmit={this.handleSubmit} noValidate>
            <input
              type='email'
              placeholder='Email Address'
              onChange={this.handleChange}
              value={this.state.email}
            />
            <button type='submit'>></button>
            {this.state.error && (
              <div className='error'>
                <img className='iconerror' src={iconerror} alt='Icon Error' />
                Please, provide a valid Email
              </div>
            )}
          </form>

          <footer>
            <p className='attribution'>
              Challenge by{' '}
              <a
                href='https://www.frontendmentor.io?ref=challenge'
                target='_blank'
                rel='noopener noreferrer'>
                Frontend Mentor
              </a>
              . Coded by{' '}
              <a
                href='https://josegarciamanez.github.io'
                target='_blank'
                rel='noopener noreferrer'>
                @josegarciamanez
              </a>
              .
            </p>
          </footer>
        </div>
        <div className='right-container'></div>
      </div>
    );
  }
}

export default App;
