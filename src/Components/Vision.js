import React from 'react';
import './Vision.css';
import image1 from './assets/image1.jpg';

const Card = ({ image, title, description }) => (
  <div className="card">
    <div className="card-image" style={{ backgroundImage: `url(${image1})` }}></div>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Vision = () => {
  return (
    <section className="vision-focus-area">
      <h2>Our Vision and Focus Area</h2>
      <div className="cards">
        <Card 
          image={image1} 
          title="Uwezo Vision for this journey" 
          description="A society in which children and youth with disabilities are empowered to live independent, fully engaged, meaningful, and dignified lives."
        />
        <Card 
          image={image1} 
          title="Youth Empowerment though some activities" 
          description="Nurturing the abilities of children with disabilities by providing specialized educational support and ensuring their rights are upheld."
        />
        <Card 
          image={image1} 
          title="Child Empowerment though some activities" 
          description="Fostering growth and self-reliance among youth with disabilities through targeted mentorship and professional internship opportunities."
        />
      </div>
    </section>
  );
}

export default Vision;
