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
          <button className='radi'> UWEZO RADIO</button>
           <button className='donat'>DONATE</button>
        </div>
        
      </div>
     </div> 
    </div>
  )
}

export default Annivesary
