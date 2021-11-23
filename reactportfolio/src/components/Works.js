import React from 'react'

export default function Works() {
    return (
        <div className='worksbox'>
        <h1>Works</h1>
        <div className='carousel-container'>
          <div className='carousel-slider'>
          <img src={esports }id='lastClone' className="esportsimg" alt="website" height='660px' width='980px' />
          <img src={passwordpage } className="passwordimg" alt="website" height='660px' width='980px' />
          <img src={quizpage } className="quizimg" alt="website" height='660px' width='980px' />
          <img src={workpage } className="workimg" alt="website" height='660px' width='980px' />
          <img src={weather } className="weatherimg" alt="website" height='660px' width='980px' />
          <img src={notetaker } className="noteimg" alt="website" height='660px' width='980px' />
          <img src={esports } className="esportsimg" alt="website" height='660px' width='980px' />
          <img src={passwordpage }id='firstClone' className="passwordimg" alt="website" height='660px' width='980px' />
          

          </div>
         </div>
<button id='prevBtn'>Prev</button>
<button id='nextBtn'>Next</button>
      </div>

    )
}
