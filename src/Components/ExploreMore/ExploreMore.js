import React from 'react';
import { components } from './_exploreMoreData';
import './exploreMore.scss';

const ExploreMore = ({ bigTitle }) => {
    return (
        <>
            <div className="explore-container">
                <h1 id="bigTitle">{bigTitle}</h1>
                <div className="explore-wrapper">
                    {
                        components.map((card, i) => (
                            <div className="explore-card" key={i}>
                                <img src={card.imgUrl} alt="" />
                                <div className="explore-card-content">
                                    <h1>{card.title}</h1>
                                    <p>{card.text}</p>
                                    <button>{card.button}</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default ExploreMore;
