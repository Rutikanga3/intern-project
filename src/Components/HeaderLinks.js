import React from 'react'
import './HeaderLinks.css'

const HeaderLinks = () => {
  return (
    <div className='secondHeader'>
        <div className='Logo'></div>
        <div className='secNavs'>
            <a href='#whoware'>WHO WE ARE</a>
            <a href='#whatwedo'>WHAT WE DO</a>
            <a href='#ourimpact'>OUR IMPACT </a>
            <a href='#publications'>PUBLICATIONS</a>
            <a href='#annivasary'>10<sup>th</sup> ANNIVASARY</a>
            <button className='radio'> UWEZO RADIO</button>
            <button className='donate'>DONATE</button>
        </div>

    </div>
  )
}

export default HeaderLinks
