import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComponents } from '../../Redux/Actions/action';
import './exploreMore.scss';

const ExploreMore = () => {

    const dispatch = useDispatch();
    const components = useSelector(state => state.requestReducer.components)
    const componentsLoading = useSelector(state => state.requestReducer.componentsLoading)

    useEffect(() => {
        dispatch(getComponents())
    }, [])

    return (
        <>
            {
                componentsLoading ? (
                    <div className="explore-container">
                        <h1>{components.bigTitle}</h1>
                        <div className="explore-wrapper">
                            {
                                components.map((card, i) => (
                                    <>
                                        <div className="explore-card" key={i}>
                                            <img src={card.imgUrl} alt="" />
                                            <div className="explore-card-content">
                                                <h1>{card.title}</h1>
                                                <p>{card.text}</p>
                                                <button>{card.button}</button>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                ) : <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
            }

        </>
    )
}

export default ExploreMore;
