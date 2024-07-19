import React from 'react'
import './Impact.css'
import profile from './assets/profile.jpg'
import Group32 from './assets/Group 32.png'

const Impact = () => {
  return (
    <div className='impactStories'>
      <img className="profile-imag" src={Group32} alt="Profile" />
      <h2><span className='frstpart'>Impact</span> <span className='secpart'>Stories</span></h2>
      <div className='stories'>
        <p className='storpara'>Over the past 10 years, I've had the incredible privilege of being part of an organization that has changed lives. Our focus on supporting kids and youth with disabilities has been more than just a mission; it's been a calling. I've seen children take their first steps, both literally and figuratively, as they've grown and flourished in our programs. Each success story, no matter how small, has been a testament to the resilience and spirit of these amazing individuals. As we celebrate this milestone, I am filled with gratitude for the opportunity to be a part of their journey, and I look forward to many more years of making a difference together.</p>
        <div className='profileImage'>
            <img className="profile-image" src={profile} alt="Profile" />

        </div>
      </div>
      <img className="profile-img" src={Group32} alt="Profile" />
    </div>
  )
}

export default Impact
