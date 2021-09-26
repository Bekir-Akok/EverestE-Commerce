import React from 'react';
import './homeHeroMedia.scss';

const HomeHeroMedia = ({title , button , description , backgroundImage}) => {

    return (
        <div className="hero-media">
            <div className="hero-media-img" style={{backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-media-content">
                     <h1>{title}</h1>
                     <p>{description}</p>
                     <button>{button}</button>
                </div>   
            </div>
        </div>
    )
}

export default HomeHeroMedia
