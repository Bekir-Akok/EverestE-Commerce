import React from 'react';
import Slider from "react-slick";
import './homeSlider.scss';

const HomeSlider = ({ slider, slider_1,
    subtitle, subtitle_1,
    title, title_1,
    description, description_1,
    button, button_1, button_2,
    color, background, buttonColor }) => {

    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        adaptiveHeight: true
    };

    return (
        <>
            <Slider {...settings}>
                {
                    slider === undefined ? null : (
                        <div className="slider-wrapper">
                        <img src={slider} alt="" />
                        <div className="slider-content">
                            <h5>{subtitle}</h5>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <div className="slider-wrapper-buttons">
                                <button>{button}</button>
                                <button>{button_1}</button>
                            </div>
                        </div>
                    </div>
                    )
                }
                
                {
                    slider_1 === undefined ? null : (
                        <div className="slider-wrapper">
                            <img src={slider_1} alt="" />
                            <div className="slider-content-1" style={{color: color}}>
                                <h5>{subtitle_1}</h5>
                                <h1>{title_1}</h1>
                                <p>{description_1}</p>
                                <div className="slider-wrapper-buttons-1">
                                    <button style={{color: buttonColor , backgroundColor: background ,}}>{button_2}</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </Slider>
        </>
    )
}

export default HomeSlider
