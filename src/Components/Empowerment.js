import React, { useState } from 'react';
import './Empowerment.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import profile from './assets/profile.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';

const YearCard = ({ year, imgSrc, text, paragraph }) => (
  <div className="year-card">
    <img src={imgSrc} alt={`${text} ${year}`} />
    <div className="year-text">
      <p className='titlecol'>{text}</p>
      <p className='coloyear'>{year}</p>
      {paragraph && <p className='year-paragraph'>{paragraph}</p>}
    </div>
  </div>
);

const Empowerment = () => {
  // Define state for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Data for the cards, grouped by pages
  const pages = [
    [
      { year: 2014, imgSrc: profile, text: "Foundation Established", paragraph: "Uwezo Youth Empowerment was founded, aiming to uplift young people through education and skill development." },
      { year: 2015, imgSrc: image2, text: "First Major Project Launched", paragraph: "The organization launched its first major project focusing on community development and youth engagement." },
      { year: 2016, imgSrc: image1, text: "Community Outreach Initiatives", paragraph: "Initiatives were rolled out to increase outreach and support to underserved communities." },
      { year: 2017, imgSrc: image4, text: "Expansion and Growth", paragraph: "The organization expanded its programs and reached more communities across the region." },
    ],
    [
      { year: 2018, imgSrc: image5, text: "Empowering the Youth", paragraph: "Focused efforts on empowering youth through training programs and leadership opportunities." },
      { year: 2019, imgSrc: image9, text: "Recognition and Awards", paragraph: "Received several awards and recognition for its impact and contributions to youth development." },
      { year: 2020, imgSrc: image8, text: "Adapting to New Challenges", paragraph: "Adapted programs to address new challenges and continue supporting youth during unprecedented times." },
      { year: 2021, imgSrc: image7, text: "Sustained Impact", paragraph: "Maintained and strengthened its impact, continuing to support and empower youth effectively." }
     
    ],
    [
      { year: 2022, imgSrc: image5, text: "Empowering the Youth", paragraph: "Focused efforts on empowering youth through training programs and leadership opportunities." },
      { year: 2023, imgSrc: image9, text: "Recognition and Awards", paragraph: "Received several awards and recognition for its impact and contributions to youth development." },
      { year: 2024, imgSrc: image8, text: "Adapting to New Challenges", paragraph: "Adapted programs to address new challenges and continue supporting youth during unprecedented times." },
   
    ]
  ];

  // Function to handle pagination click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='empcards'>
      <h3>IMPACT AND EMPOWERMENT</h3>
      <h2 className='emphead'>OVER 10 YEARS</h2>
      <div className="year-grid">
        {pages[currentPage - 1]?.map((card, index) => (
          <YearCard
            key={index}
            year={card.year}
            imgSrc={card.imgSrc}
            text={card.text}
            paragraph={card.paragraph}
          />
        ))}
      </div>
      <div className="pagination">
        {pages.map((_, index) => (
          <span
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Empowerment;
