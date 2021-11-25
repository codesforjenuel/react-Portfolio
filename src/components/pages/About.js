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
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            <div className='about-shadow'></div>
          </p>

        </div>
      </div>
    )
}
