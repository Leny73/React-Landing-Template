import React, { Component } from 'react';
import Nav from "./nav";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-137821890-1', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 137921890
  }
});


class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Do you want to be< br/>a friend of the Earth?</h1>
            <div>
              <p>At Friends of the Earth Netherlands we focus on sustainability. Simple changes in our everyday lives could help perserve the environment and multiple eco-systems.</p>
              <div>
                <ReactGA.OutboundLink
                  eventLabel="CTA"
                  to="https://en.wikipedia.org/wiki/Friends_of_the_Earth"
                  target="_blank"
                  >
                    <div className = "contact">Learn More</div>
                </ReactGA.OutboundLink>
              </div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
