import React from 'react';
import './Header.css'
import headerLogo from '../../img/headerLogo.png'

const Header = () => {
    return(
        <div className="mainHeader">
            <div className="header">
                <img src={headerLogo} alt="problem" ></img>
                <h1><span>Meme - Generator</span></h1>
                {/* <img src={headerLogo} alt="problem" ></img> */}
            </div>
            <div className="quote">
            <p>"Who controls the memes, controls the Universe" -  <a href="https://twitter.com/elonmusk">Elon Musk</a></p>
            </div>
        </div>
    )
}

export default Header;