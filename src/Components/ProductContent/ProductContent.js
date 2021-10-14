import { useState, useRef } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import { RiStarSFill } from 'react-icons/ri';
import { AiTwotoneHeart } from 'react-icons/ai';
import gif from '../../assets/addtocard.gif'
import ProductDetails from '../ProductDetails/ProductDetails';
import { useDispatch } from 'react-redux';
import { addQuantity, addToBasket } from '../../Redux/Actions/action';
import {addToCardEffect} from '../../helpers/helpers';
import './productContent.scss';


const ProductContent = ({ filterProduct }) => {

    const dispatch = useDispatch();
    const cardButton = useRef();
    const cardImg = useRef();
    const cardText = useRef();

    const combineActions = (pro) => {
        dispatch(addToBasket(pro));
        dispatch(addQuantity(pro));
        addToCardEffect(cardText, cardImg , cardButton);
    }

    const stars = [
        {}, {}, {}, {}, {}
    ]

    const [color, setColor] = useState();
    const colors = [
        { color: "lightblue" }, { color: "bisque" }, { color: "black" }, { color: "grey" }
    ]

    const [size, setSize] = useState();
    const sizes = [
        { size: "XS" }, { size: "S" }, { size: "M" }, { size: "L" }, { size: "XL" }
    ]

    return (
        <>
            {filterProduct &&
                filterProduct.map((pro, i) => {
                    return (
                        <div key={i}>
                            <div className="product-container" >
                                <div className="product-wrapper">
                                    <div className="product-image">
                                        <SRLWrapper>
                                            <img src={pro.imgUrl} alt="" />
                                        </SRLWrapper>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-title">
                                            <h5>{pro.description[0].details}</h5>
                                            <h3>{pro.name}</h3>
                                            <h6>${pro.price}</h6>
                                            <div className="product-stars">
                                                <h6>{stars.map((x, i) => {
                                                    return (
                                                        <RiStarSFill key={i} />
                                                    )
                                                })}</h6>
                                                <h6 style={{ marginLeft: "15px" }}>22 Reviews</h6>
                                            </div>
                                        </div>
                                        <div className="product-stats">
                                            <div className="product-color">
                                                <h6>
                                                    {
                                                        color === undefined ? "Color: Select a color" : `Color: ${color}`
                                                    }

                                                </h6>
                                                <div className="product-buttons">
                                                    {
                                                        colors.map(((color, i) => {
                                                            return (
                                                                <input key={i} type="button" style={{ backgroundColor: color.color }}
                                                                    onClick={() => setColor(color.color)} ></input>
                                                            )
                                                        }))
                                                    }
                                                </div>
                                            </div>
                                            <div className="product-size">
                                                <h6>
                                                    {
                                                        size === undefined ? "Size: Select a size" : `Size: ${size}`
                                                    }
                                                </h6>
                                                {
                                                    sizes.map((size, i) => {
                                                        return (
                                                            <button key={i} onClick={() => setSize(size.size)}>{size.size}</button>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="product-buttons">
                                                <button
                                                    ref={cardButton}
                                                    onClick={() => combineActions(pro)}>
                                                    <span
                                                        ref={cardText}>
                                                        ADD TO CARD
                                                    </span>
                                                    <img
                                                        src={gif}
                                                        alt=""
                                                        style={{ display: "none" }}
                                                        ref={cardImg}
                                                        id="img" />
                                                </button>
                                                <button className="fav-button"><AiTwotoneHeart /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <ProductDetails product={filterProduct} />
        </>
    )
}

export default ProductContent
