import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
           <nav>
           <ul className='unorderedList'>
            <li>
                <Link to="/react-Portfolio" style={{ textDecoration: 'none' }}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/About" style={{ textDecoration: 'none' }}>
                    About Me
                </Link>
            </li>
            <li>
                <Link to="/Skills" style={{ textDecoration: 'none' }}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="/Works" style={{ textDecoration: 'none' }}>
                    Works
                </Link>
            </li>
            <li>
                <Link to="/Contact" style={{ textDecoration: 'none' }}>
                    Contact
                </Link>
            </li>
        </ul>
        {/* <ul>
          <li><a />Home</li>
          <li><a />About Me</li>
          <li><a />Skills</li>
          <li><a />Works</li>
          <li><a />Contact</li>
        </ul> */}
      </nav> 
        </div>
    )
}
