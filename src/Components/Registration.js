import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (!formData.name || !formData.phone || !formData.address || !formData.email) {
      alert('Please fill out all fields');
      return;
    }

    // Send the form data using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email successfully sent!', result.status, result.text);
        alert('Email successfully sent!');
         window.location.href = 'https://www.eventbrite.com/e/995895810177?aff=oddtdtcreator';
      })
      .catch((error) => {
        console.log('Failed to send email. Error:', error);
        alert('Failed to send email. Please try again later.');
      });

    // Clear the form after submission
    setFormData({
      name: '',
      phone: '',
      address: '',
      email: ''
    });
  };

  return (
    <div className='eventregistration'>
      <h4 className='firstheading'>The 10<sup>Th</sup> Year</h4>
      <h4 className='secheading'>Not just an Anniversary but a Festival</h4>
      <div className='backgroundDiv'>
        <div className='form'>
          <div className='rightside'>
            <h3 className='regtitle'>Reserve your seat</h3>
            <p>Secure your seat today to support and empower youth and children with disabilities! Limited spots are available, so act fast to be part of this impactful event. Join us in advocating for their rights and opportunities.</p>
          </div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {/* <div className="line12"></div> */}
            </div>
            <div className="form-group">
              <label>Telephone number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {/* <div className="line12"></div> */}
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {/* <div className="line12"></div> */}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {/* <div className="line12"></div> */}
            </div>
            <a href='https://www.eventbrite.com/e/995895810177?aff=oddtdtcreator' target="_blank" rel="noopener noreferrer"><button type="submit" className='regbutton'>Send</button></a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
