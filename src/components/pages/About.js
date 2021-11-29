import React from 'react'
import portrait from '../../images/me.jpg'
export default function About() {
    return (
        <div className="about">
        <div>
          <img src={portrait} className="portrait" alt="logo" height='390px' width='332px' />
        </div>
        <div>
          <p className='aboutMe'>
            <h3>About Me</h3><br />
            Hello, my name is Jesus, I am a 29 year old web developer who just finished the UCI full stack web developer bootcamp on December 2021. During my junior year in high school, my interest in computers started as I tried to fix a broken screen in a laptop I had during that time, having success grew a motivation inside me to try out hardware on the computer tech field. As years passed by new interest in me were born, not only on the hardware side of computer tech but also on the software side of this field, learning basics on photoshop, after effects, sony vegas pro, video production, and music production to the point that I created a youtube channel that so far has 301 subscribers with over 89,000 views. Computer tech without a doubt has been one of my biggest hobbies but the one above all has always been to learn new things and in early 2021, my passion for coding was born, as I searched through the web and tried a few html, css and javascript apps I immediately feel in love with coding, my passion was so big that I signed into the bootcamp and also succeeded in it.

            <div className='about-shadow'></div>
          </p>

        </div>
      </div>
    )
}
