import React, { useEffect } from 'react'
import Slider from "react-slick";
import './newArrivals.scss';
import { useHistory } from 'react-router';


const NewArrivals = ({ products, productsLoading, title, backgroundColor , margin}) => {

    let history = useHistory()

    let settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    centerMode: true 
                }
            }
        ]
    };

    return (
        <>
            <div className="new-arrivals-container" 
            style={margin ? {margin: "0",backgroundColor: backgroundColor} : {margin:"100px auto",backgroundColor: backgroundColor} }>
                <h1>{title}</h1>
                {
                    productsLoading ? (
                        <Slider {...settings}>
                            {products.map((product, i) => (
                                <div className="new-arrivals-products"
                                    onClick={() => history.push(`/productpage/${product.id}`, product)}
                                    key={i}
                                >
                                    <div className="new-arrivals-image-wrapper">
                                        <img src={product.imgUrl} alt="" />
                                        <h6>NEW</h6>
                                    </div>
                                    <h4>{product.name}</h4>
                                    <h4>${product.price}</h4>
                                </div>
                            ))}
                        </Slider>
                    )
                        : <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />
                }

            </div>
        </>
    )
}

export default NewArrivals;
