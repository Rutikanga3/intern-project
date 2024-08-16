import React from 'react'
import './HeaderLinks.css'
import {Link} from 'react-router-dom'

const HeaderLinks = () => {
  return (
    <div className='secondHeader'>
        <div className='Logo'></div>
        <div className='secNavs'>
           <Link to='https://uwezoyouth.org' className='link1'>WHO WE ARE</Link>
           <Link to='https://uwezoyouth.org'className='link1' >WHAT WE DO</Link>
           <Link to='https://uwezoyouth.org' className='link1'>OUR IMPACT</Link>
           <Link to='https://uwezoyouth.org'className='link1'>PUBLICATIONS</Link>
           <Link to='/' className='link1'>10<sup>th</sup> ANNIVERSARY</Link>
            <a href='https://www.flickr.com/photos/138034566@N04' target="_blank" rel="noopener noreferrer">
            <button className='radio'> UWEZO GALLERY</button></a>

            <a href='https://www.bonterratech.com/product/fundraising-software' target="_blank" rel="noopener noreferrer">
            <button className='donate'>DONATE</button></a>
        </div>

    </div>
  )
}

export default HeaderLinks
