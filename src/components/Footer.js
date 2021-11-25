import React from 'react'
import github from '../images/github.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import linkedIn from '../images/linkedin.png'


export default function Footer() {
    return (
        <footer>
<div className='linksbox'>

<img src={instagram } className="instagramimg" alt="logo" height='55px' width='55px' />
<img src={github } className="githubimg" alt="logo" height='70px' width='130px' />
<img src={twitter } className="twitterimg" alt="logo" height='50px' width='65px' />
<img src={linkedIn } className="linkedinimg" alt="logo" height='50px' width='50px' />
</div>

</footer>
    )
}
