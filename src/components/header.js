import React, { Component } from 'react';
import Nav from "./nav";
import { Click } from 'react-tag-manager'

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
                <Click
      	            event={'click'}
      	              data={{
      	                event: 'click',
      	                }}>
      	              <button>CLICK ME</button>
      	        </Click>
              </div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
