import React from 'react'
import './Empowerment.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';


const YearCard = ({ year, imgSrc }) => (
  <div className="year-card">
    <img src={imgSrc} alt={`The beginning ${year}`} />
   
    <div className="year-text">
      <p className='titlecol'>The beginning</p>
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
           
             <YearCard year={2014} imgSrc= {image1}/>
             <YearCard year={2015} imgSrc= {image2}/>
             <YearCard year={2016} imgSrc= {image1}/>
             <YearCard year={2017} imgSrc= {image4}/>
             <YearCard year={2018} imgSrc= {image5}/>
             <YearCard year={2019} imgSrc= {image1}/>
             <YearCard year={2020} imgSrc= {image2}/>
             <YearCard year={2021} imgSrc= {image5}/>
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
