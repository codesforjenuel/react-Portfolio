import React from 'react'

export default function Header() {
    return (
        <header className="header">
        <div className='banner'>
          <img src={cube} className="cube" alt="logo" height='400px' width='300px' />
          <img src={namebanner} className='Name-Banner' alt='name logo' width='1000px' height='300px' />

        </div>
      </header>
    )
}
