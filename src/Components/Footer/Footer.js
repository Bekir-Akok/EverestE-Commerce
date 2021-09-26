import React from 'react';
import './footer.scss';
import everest from '../../assets/LOGO.png';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {TiSocialTwitterCircular ,TiSocialYoutubeCircular ,TiSocialInstagram ,TiSocialPinterestCircular} from 'react-icons/ti';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <ul>
                    <li><a href="/"><img src={everest} alt="" /></a></li>
                    <li><p><b>US/EN</b></p></li>
                    <li><p>© 2021 Everest Snowboards</p></li>
                </ul>
                <ul>
                    <li><a href="https://www.linkedin.com/in/Bekir-Akok/" target="_blank" rel="noreferrer"><span><RiFacebookCircleLine/></span></a></li>
                    <li><a href="https://www.linkedin.com/in/Bekir-Akok/" target="_blank" rel="noreferrer"><span><TiSocialTwitterCircular/></span></a></li>
                    <li><a href="https://www.linkedin.com/in/Bekir-Akok/" target="_blank" rel="noreferrer"><span><TiSocialYoutubeCircular/></span></a></li>
                    <li><a href="https://www.linkedin.com/in/Bekir-Akok/" target="_blank" rel="noreferrer"><span><TiSocialInstagram/></span></a></li>
                    <li><a href="https://www.linkedin.com/in/Bekir-Akok/" target="_blank" rel="noreferrer"><span><TiSocialPinterestCircular/></span></a></li>
                </ul>
                <ul>
                    <li><a href="/">Terms & Conditions</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">User Content Terms</a></li>
                    <li><a href="/">Site Map</a></li>
                </ul>
            </div>
        </>
    )
}

export default Footer
