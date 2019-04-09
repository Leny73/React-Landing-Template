import React, { Component } from 'react';
import Form from "./form";



class Main extends Component {

  

  render() {
    return (
      <main>
       
     
        <section className="intro" id="about">
            <h2>About Us</h2>
            <div>
             <p>Milieudefensie (Friends of the Earth Netherlands) is a successful Dutch environmental organization. People from all over the Netherlands work together with Milieudefensie to create a fairer and more sustainable country. We have a significant influence on governing bodies and businesses in the decisions they make.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><p className="service-title">Energy</p></p>
                <p>Imagine the energy that we use is 100% sustainable, safe and fair – using wind, solar and geothermal energy sources. And maybe even the most important detail: without any energy waste. No more pollution produced by the extraction and consumption of oil coal, gas and wood. No more environmental destruction in distant locations or close to home. In other words, a sustainable Netherlands and a clean world.</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><p className="service-title">Food</p></p>
                <p>Imagine eating only sustainably produced food. Food for which farmers have been paid a fair price. Food that has been grown without pesticides. Food that hasn’t been unnecessarily transported all over the world. And a food production system that takes people, animals and our earth into account.</p>
                </div>
                <div className="service-three">
                <p className="service-icon"><p className="service-title">Forests</p></p>
                <p>Imagine you're in the middle of a rainforest, surrounded by the sounds of birds and animals. – and NO chainsaws. The people you meet here live off of what the forest offers them. This is how it was for centuries – and how it should remain. But the rainforests are quickly disappearing: 169 trees are cut down every second, most to make way for palm oil plantations.</p>
                </div>
                <div className="service-one">
                <p className="service-icon"><p className="service-title">Economy</p></p>
                <p>Imagine an economy that contributes to a fair and sustainable world, rather than pollution and serious inequality, an economy in which people and the environment are central, rather than money and growth. An economy in which there is enough for everyone. </p>
                </div>
                <div className="service-two">
                <p className="service-icon"><p className="service-title">Traffic</p></p>
                <p>Imagine our children playing on safe streets. Imagine doing your grocery shopping by bike. And imagine an easy commute to work via clean public transportation or shared electric cars. This is the kind of sustainable city we are aiming for. And we want to do it together. Once we choose for more sustainable transportation, better air quality will follow. That’s good news for everyone who breathes.</p>
                </div>
                <div className="service-three">
                <p className="service-icon"><p className="service-title">Transition</p></p>
                <p>Climate change is the greatest single challenge that humanity currently faces. In order to bring climate change to a halt some major changes are going to be necessary. Our agriculture, how we move around, how we heat our homes – everything is going to necessarily change. We will only be able to accomplish this if everyone participates and is able to participate.</p>
                </div>
              </div>
          </div>
        <section id="mission">
            <h2>Our Mission</h2>
            <div>
              <p>Milieudefensie (Friends of the Earth Netherlands) has been working toward a fair and sustainable world since 1971. </p>
              <p>Imagine a less wasteful world, a world in which we share the earth’s riches equally with one another, and with future generations. A world that doesn’t exhaust its natural resources. A world that is clean, healthy, sustainable and fair. This is the world that Milieudefensie (Friends of the Earth Netherlands) envisions for the future.</p>
              <p>These changes can only happen if lots of people are prepared to work together. That’s why Milieudefensie is striving to build a strong movement run by people committed to  a fair and sustainable Netherlands. We do this not only at home, but also abroad, as a member of Friends of the Earth International. United we are stronger.
 
 Volunteers play a major role in all of our campaigns. They are the main reason we have achieved so much already. One example is their contribution to our successful campaign on the air quality in our cities.
 
 Our youth organization, the JMA, encourages younger people up to the age of 28 to get involved in Milieudefensie campaigns. </p>
              </div>
        </section>


        <section id="contact">
            <h2>Contact Us</h2>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;
