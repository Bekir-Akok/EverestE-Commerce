import React from 'react'
import { categories } from './_homeCategorySliderData';
import Slider from "react-slick";
import { useHistory } from 'react-router';
import './homeCategorySlider.scss';

const HomeCategorySlider = () => {

    let history = useHistory()

    let settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {
                    categories.map((category, i) => (
                        <div className="home-category-slider" key={i} onClick={() => history.push(`/categorypage/${category.categories}`)}>
                            <img src={category.imgUrl} alt="" />
                            <div className="home-category-slider-content">
                                <h1>{category.name}</h1>
                                <button>
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}


export default HomeCategorySlider;
