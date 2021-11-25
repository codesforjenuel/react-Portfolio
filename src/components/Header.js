import React from 'react'
import cube from '../images/cube.gif'
import namebanner from '../images/jesusperea.png'


export default function Header() {
    return (
        <header className="header">
        <div className='banner'>
          <img src={cube} className="cube" alt="logo" height='300px' width='200px' />
          <img src={namebanner} className='Name-Banner' alt='name logo' width='900px' height='250px' />

        </div>
      </header>
    )
}
