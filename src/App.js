import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import GTM from 'react-tag-manager';

export const AppContainer = () => (
  <div>
    <GTM 
      gtm={{
        id: 'GTM-NLVSPBC',
        auth: '',      // Optional
        preview: '',   // Optional 
      }} 
      settings={{
        sendPageView: true,     // default false
        pageView: {             // default null
          event: 'pageview',    // default
          data : {},            // default
          
          settings: { 
            locationProp: 'pathname', // default
            sendAs      : 'url',      // default
          },
        }
      }}>
    	...
    </GTM>
  </div>
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };

    // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
    ReactGA.initialize('UA-137921890-1');
    // This just needs to be called once since we have no routes in this case.
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
