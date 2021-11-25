import React from 'react'
import htmlLogo from '../../images/html.png'
import cssLogo from '../../images/css.png'
import javascriptLogo from '../../images/javascript.png'
import nodeLogo from '../../images/nodejs.png'
import mysqlLogo from '../../images/mysql.png'
import reactLogo from '../../images/react.png'
export default function Skills() {
    return (
        <div className='skillsDiv'>
        <h1 className='skillsname'>Skills</h1>
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
