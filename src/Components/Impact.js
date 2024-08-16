import React, { useState } from 'react';
import './Impact.css';
import Group32 from './assets/Group 32.png'; 
import proim from './assets/image10.jpg';
import image11 from './assets/image11.jpg';
import imagpr from './assets/profile.jpg';

const Impact = () => {
  const [content, setContent] = useState({
    paragraph: "Over the past 10 years, I've had the incredible privilege of being part of an organization that has changed lives. Our focus on supporting kids and youth with disabilities has been more than just a mission; it's been a calling. I've seen children take their first steps, both literally and figuratively, as they've grown and flourished in our programs. Each success story, no matter how small, has been a testament to the resilience and spirit of these amazing individuals. As we celebrate this milestone, I am filled with gratitude for the opportunity to be a part of their journey, and I look forward to many more years of making a difference together.",
    image: proim,
  });

  const handleClick1 = () => {
    setContent({
      paragraph: "Over the past decade, I've had the immense honor of contributing to an organization dedicated to transforming lives. Our commitment to supporting children and youth with disabilities has been more than just a mission; it has been a calling. I've witnessed these incredible individuals take their first steps, both physically and metaphorically, as they have grown and thrived within our programs. Every achievement, no matter how minor, has showcased the extraordinary resilience and spirit of these young people. As we celebrate this significant milestone, I am filled with deep gratitude for the chance to be part of their journey, and I eagerly anticipate many more years of making a meaningful impact together.",
      image: proim,
    });
  };

  const handleClick2 = () => {
    setContent({
      paragraph: "For the past ten years, I have been deeply privileged to be part of an organization that is dedicated to transforming lives. Our unwavering commitment to supporting children and youth with disabilities has been more than just a mission; it has been a heartfelt calling. I have seen these remarkable individuals take their first steps, both literally and figuratively, and flourish in our programs. Each accomplishment, no matter how small, has highlighted their incredible resilience and spirit. As we celebrate this milestone, I am profoundly grateful for the opportunity to be part of their journey, and I look forward to many more years of making a positive difference together.",
      image: image11,
    });
  };

  const handleClick3 = () => {
    setContent({
      paragraph: "Over the past 10 years, I've had the incredible privilege of being part of an organization that has changed lives. Our focus on supporting kids and youth with disabilities has been more than just a mission it has been a calling. I've seen children take their first steps, both literally and figuratively, as they've grown and flourished in our programs. Each success story, no matter how small, has been a testament to the resilience and spirit of these amazing individuals. As we celebrate this milestone, I am filled with gratitude for the opportunity to be a part of their journey, and I look forward to many more years of making a difference together.",
      image: imagpr,
    });
  };

  return (
    <div className='impactStories'>
      <img className="profile-imag" src={Group32} alt="Profile" />
      <h2><span className='frstpart'>Impact</span> <span className='secpart'>Stories</span></h2>
      <div className='stories'>
        <p id='sp' className='storpara'>{content.paragraph}</p>
        <div className='profileImage'>
          <img className="profile-image" src={content.image} alt="Profile" />
        </div>
      </div>
      <img className="profile-img" src={Group32} alt="Profile" /> 
      <div className='slidebtn'>
        <svg id='bt1' className='slidebtn1' onClick={handleClick1} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
          <path d="M363.5 148.5C334.8 119.8 296.6 104 256 104c-40.6 0-78.8 15.8-107.5 44.5C119.8 177.2 104 215.4 104 256s15.8 78.8 44.5 107.5C177.2 392.2 215.4 408 256 408c40.6 0 78.8-15.8 107.5-44.5C392.2 334.8 408 296.6 408 256s-15.8-78.8-44.5-107.5z"></path>
        </svg>
        <svg id='bt2' className='slidebtn2' onClick={handleClick2} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
          <path d="M363.5 148.5C334.8 119.8 296.6 104 256 104c-40.6 0-78.8 15.8-107.5 44.5C119.8 177.2 104 215.4 104 256s15.8 78.8 44.5 107.5C177.2 392.2 215.4 408 256 408c40.6 0 78.8-15.8 107.5-44.5C392.2 334.8 408 296.6 408 256s-15.8-78.8-44.5-107.5z"></path>
        </svg>
        <svg id='bt3' className='slidebtn3' onClick={handleClick3} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
          <path d="M363.5 148.5C334.8 119.8 296.6 104 256 104c-40.6 0-78.8 15.8-107.5 44.5C119.8 177.2 104 215.4 104 256s15.8 78.8 44.5 107.5C177.2 392.2 215.4 408 256 408c40.6 0 78.8-15.8 107.5-44.5C392.2 334.8 408 296.6 408 256s-15.8-78.8-44.5-107.5z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Impact;
