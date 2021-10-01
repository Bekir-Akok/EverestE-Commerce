import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Redux/Actions/action';
import Slider from "react-slick";
import './homeCategorySlider.scss';
import { useHistory } from 'react-router';

const HomeCategorySlider = props => {

    
    const dispatch = useDispatch();
    const categories = useSelector(state => state.requestReducer.categories)
    const categoriesLoaing = useSelector(state => state.requestReducer.categories)

    let history = useHistory()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

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
        {
            categoriesLoaing ? (
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
            ) : <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
        }

</>
    )
}


export default HomeCategorySlider;
