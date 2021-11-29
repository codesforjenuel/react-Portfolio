import React from 'react'
import github from '../images/github.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import linkedIn from '../images/linkedin.png'
import Youtube from '../images/youtube.png'

export default function Footer() {
    return (
        <footer>
<div className='linksbox'>

<a href='https://www.instagram.com/codesforjenuel/' target='https://www.instagram.com/codesforjenuel/'><img src={instagram } className="instagramimg" alt="logo" height='55px' width='55px' /></a>
<a href='https://github.com/codesforjenuel' target='https://github.com/codesforjenuel'><img src={github } className="githubimg" alt="logo" height='70px' width='130px' /></a>
<a href='https://twitter.com/codesforjenuel' target='https://twitter.com/codesforjenuel'><img src={twitter } className="twitterimg" alt="logo" height='50px' width='65px' /></a>
<a href='https://www.linkedin.com/in/codesforjenuel/' target='https://www.linkedin.com/in/codesforjenuel/'><img src={linkedIn } className="linkedinimg" alt="logo" height='50px' width='50px' /></a>
<a href='https://www.youtube.com/user/gsusgazetto' target='https://www.youtube.com/user/gsusgazetto'><img src={Youtube } className="youtubeimg" alt="logo" height='50px' width='70px' /></a>
</div>

</footer>
    )
}
