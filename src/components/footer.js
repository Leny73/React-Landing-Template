import React, { Component } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-137821890-1', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 137921890
  }
});

class Footer extends Component {
  render() {
    return (
     
      <footer>
          <p>Support <br/> lbranzalov95@gmail.com</p>
          <ul>
            <li>
              <ReactGA.OutboundLink
                  eventLabel="Facebook"
                  to="https://www.facebook.com/pages/Milieudefensie-Friends-of-the-Earth-Netherlands/1576444022588128"
                  target="_blank"
                  >
                  <i className="fab fa-facebook-f"></i>                    
                </ReactGA.OutboundLink></li>
            <li>
            <ReactGA.OutboundLink
                  eventLabel="Twitter"
                  to="https://twitter.com/foeint"
                  target="_blank"
                  >
                  <i className="fab fa-twitter"></i>                    
                </ReactGA.OutboundLink></li>
            <li>
            <ReactGA.OutboundLink
                  eventLabel="Facebook"
                  to="https://www.instagram.com/friends_earth/"
                  target="_blank"
                  >
                  <i className="fab fa-instagram"></i>                   
                </ReactGA.OutboundLink></li>
          </ul>
      </footer>
      
    );
  }
}

export default Footer;
