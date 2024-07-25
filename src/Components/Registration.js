import React from 'react';
import'./Registration.css'

const Registration = () => {
  return (
    <div className='eventregistration'>
      <h4 className='firstheading'>The 10<sup>Th </sup>  Year</h4>
      <h4 className='secheading'>Not just an Anniversary but a Festival</h4>
      <div className='backgroundDiv'>
       <div className='form'>
        <div className='rightside'>
          <h3 className='regtitle'>Reserve your seat</h3>
          <p>Secure your seat today to support and empower youth and children with disabilities! Limited spots are available, so act fast to be part of this impactful event. Join us in advocating for their rights and opportunities.</p>
        </div>
        <div className="form-container">
          <div className="form-group">
             <label>Full name</label>
               <div className="line12"></div>
          </div>
          <div className="form-group">
             <label>Telephone number</label>
              <div className="line12"></div>
          </div>
          <div className="form-group">
             <label>Address</label>
              <div className="line12"></div>
          </div>
          <div className="form-group">
             <label>Email</label>
              <div className="line12"></div>
          </div>
          <button className='regbutton'>Send</button>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Registration
