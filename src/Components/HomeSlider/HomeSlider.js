import React from 'react';
import Slider from "react-slick";
import './homeSlider.scss';

const HomeSlider = () => {

    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };


    return (
        <>
            <Slider {...settings}>
                <div className="slider-wrapper">
                    <img src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw61643835/S22/S22-AK/21SS-AK-InsetHero-BG.jpg" alt=""/>
                    <div className="slider-content">
                        <h5>[ak]® Spring Collection</h5>
                        <h1>Non-Stop Performance</h1>
                        <p>For [ak], there is no off-season. Push your limits year-round with highly technical gear that outperforms in any terrain or condition.</p>
                        <div className="slider-wrapper-buttons">
                            <button>Explore[AK]</button>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="slider-wrapper">
                    <img src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw687d44e0/S22/S22-Spring-New-Arrivals/21SS-Spring-NewArrivals-Mens-InsetHero-BG-2x.jpg?sw=1600&amp;sfrm=jpg&amp;q=100" alt=""/>
                    <div className="slider-content-1">
                        <h5>Fresh Gear</h5>
                        <h1>New Arrivals</h1>
                        <p>Ditch the heavy layers and get ready for spring with breathable layers and waterproof gear.</p>
                        <div className="slider-wrapper-buttons-1">
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default HomeSlider
