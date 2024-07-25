import React from 'react'
import './Anniversary.css'

const Annivesary = () => {
  return (
    <div className='anniv'>
     <div className='annivvideo'></div>
     <div className='overlay'>
      <div className='overText'>
        <p className='date'>10<sup>th</sup><br/><span className='redressed'>Annivesary</span></p><br></br>
        <div className='buttons'>
          <a href='https://uwezoradio.com/' target="_blank" rel="noopener noreferrer">
          <button className='radi'> UWEZO RADIO</button></a>
          <a href='https://www.bonterratech.com/product/fundraising-software' target="_blank" rel="noopener noreferrer">
           <button className='donat'>DONATE</button></a>
        </div>
        
      </div>
     </div> 
    </div>
  )
}

export default Annivesary
