import React from 'react'

export default function Skills() {
    return (
        <div className='skillsDiv'>
        <h1>Skills</h1>

      <div className='logobox'>
        <img src={htmlLogo } className="htmlimg" alt="logo"  />
        <img src={cssLogo } className="cssimg" alt="logo"  />
        <img src={javascriptLogo} className="jsimg" alt="logo"  />
        <img src={nodeLogo} className="nodeimg" alt="logo"  />
        <img src={mysqlLogo} className="mysqlimg" alt="logo"  />
        <img src={reactLogo} className="reactimg" alt="logo" height='140px' width='340px' />
      </div>
      </div>
    )
}
