import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo"><a href="home">Milieudefensie<span> Friends of the Earth Netherlands</span></a></li>
          </ul>
          <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
