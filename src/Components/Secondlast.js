import React from 'react'
import './Secondlast.css'

const Secondlast = () => {
  return (
    <div className='Lastpara'>
       <div className='Logos'></div> 
       <div className='lasttext'>
        <p className='textpara'>For the past decade, our organization has been dedicated to empowering youth and children with disabilities through advocacy, education, mentorship, and professional internships. We believe in the potential of every child and strive to create opportunities for them to thrive. As we celebrate this milestone, we reflect on the countless lives touched and the remarkable progress made. Join us in continuing this journey of empowerment and inclusion. Together, we can build a brighter future for all.</p>
        <div className='button'>
          {/* <button className='radii'> UWEZO RADIO</button> */}
           {/* <button className='donatt'>DONATE</button> */}
           <a href='https://uwezoradio.com/' target="_blank" rel="noopener noreferrer">
          <button className='radii'> UWEZO RADIO</button></a>
          <a href='https://www.bonterratech.com/product/fundraising-software' target="_blank" rel="noopener noreferrer">
           <button className='donatt'>DONATE</button></a>
        </div>
       </div>
      
    </div>
  )
}

export default Secondlast
