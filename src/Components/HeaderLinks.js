import React from 'react'
import './HeaderLinks.css'
import {Link} from 'react-router-dom'

const HeaderLinks = () => {
  return (
    <div className='secondHeader'>
        <div className='Logo'></div>
        <div className='secNavs'>
           <Link to='/whoware' className='link1'>WHO WE ARE</Link>
           <Link to='/whatwedo'className='link1' >WHAT WE DO</Link>
           <Link to='/ourimpact' className='link1'>OUR IMPACT</Link>
           <Link to='/publications'className='link1'>PUBLICATIONS</Link>
           <Link to='/' className='link1'>10<sup>th</sup> ANNIVERSARY</Link>
            <a href='https://uwezoradio.com/' target="_blank" rel="noopener noreferrer">
            <button className='radio'> UWEZO RADIO</button></a>
            <a href='https://www.bonterratech.com/product/fundraising-software' target="_blank" rel="noopener noreferrer">
            <button className='donate'>DONATE</button></a>
        </div>

    </div>
  )
}

export default HeaderLinks
