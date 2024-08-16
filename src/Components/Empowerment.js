import React from 'react'
import './Empowerment.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
// import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import profile from './assets/profile.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';


const YearCard = ({ year, imgSrc, text }) => (
  <div className="year-card">
    <img src={imgSrc} alt={`${text} ${year}`} />
   
    <div className="year-text">
      <p className='titlecol'>{text}</p>
      <p className='coloyear'>{year}</p>
    </div>
  </div>
);

const Empowerment = () => {
  return (
    <div className='empcards'>
        <h3>IMPACT AND EMPOWERMENT</h3>
        <h2 className='emphead'>OVER 10 YEARS</h2>
        <div className="year-grid">
           
             <YearCard year={2014} imgSrc= {profile} text="Foundation Established"/>
             <YearCard year={2015} imgSrc= {image2} text="First Major Project Launched"/>
             <YearCard year={2016} imgSrc= {image1} text="Community Outreach Initiatives" />
             <YearCard year={2017} imgSrc= {image4} text="Expansion and Growth" />
             <YearCard year={2018} imgSrc= {image5}  text="Empowering the Youth"/>
             <YearCard year={2019} imgSrc= {image9} text="Recognition and Awards" />
             <YearCard year={2020} imgSrc= {image8} text="Adapting to New Challenges"/>
             <YearCard year={2021} imgSrc= {image7} text="Sustained Impact"/>
       </div>
    <div className="pagination">
       <span>1</span>
      <span>2</span>
     <span>3</span>
    </div>

    </div>
  )
}

export default Empowerment
