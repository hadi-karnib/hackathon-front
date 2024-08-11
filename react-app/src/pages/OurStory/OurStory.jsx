import React from 'react';
import './ourstory.css'
function OurStory() {
  return(
    <>
    <div className="first-part">
      <div className="main-text">
        <p id='main-text'>Predict with Confidence, <br />Launch with Success!</p>
        <p id='second-text'>Our tool helps you predict app installations,<br />giving you the insights you need to plan  <br />smart and launch successfully. Simple, easy, <br /> and effective - know what to expect from <br /> your app.</p>
      </div>
    </div>
    <div className="services-part">
      <div className="services"><p>Our Services</p></div>
      <div className="services-img">
        <div id='guidance'></div>
        <div id='evaluation'></div>
        <div id='mobile-coding'></div>
      </div>
      <div className="services-text">
        <div>
          <p>App Store</p>
          <p>Optimization Advices</p>
        </div>
        <div>
          <p>Predicting the number</p>
          <p>of installations</p>
        </div>
        <div>
          <p>Provide clear and</p>
          <p>accessible results</p>
        </div>
      </div>
    </div>
    <div className="our-story-section">
      <div className="our-story-text">
        <p id='our-story-title'>Our Story</p>
        <p id='our-story-text'>At AppSight, our journey began with a simple yet powerful idea: to transform the way mobile apps achieve success. Fueled by a passion for innovation and a deep understanding of data, we set out to harness the power of AI to provide developers and entrepreneurs with predictive insights that drive real results.</p>
      </div>
    </div>
    <div className="our-mission">
      <div className="our-mission-section">
        <div className="left-section"></div>
        <div className="right-section">
          <p id='mission-title'>Our Mission</p>
          <p>Our mission is to empower you with the tools to navigate the competitive app landscape confidently. Whether you’re looking to forecast potential success before launching or analyze real-world performance after a trial, our advanced models offer unparalleled accuracy and actionable insights.</p>
        </div>
      </div>
      <div className="why-us-section">
        <p id='why-us-header'>Why Us?</p>
        <p id='why-us-text'>At AppSight, we blend advanced AI with deep app expertise to offer precise predictions and actionable insights. Our models help you strategize effectively before launch or refine your approach with real-world data post-trial. With our commitment to cutting-edge technology and tailored solutions, you can trust us to drive your app’s success with accuracy and reliability.</p>
      </div>
    </div>
    </>
  );
}

export default OurStory;
