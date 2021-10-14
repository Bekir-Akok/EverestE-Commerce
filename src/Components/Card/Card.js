import React, {useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket, addQuantity } from '../../Redux/Actions/action';
import {addToCardEffect} from '../../helpers/helpers';
import gif from '../../assets/addtocard.gif';
import './card.scss';

const Card = ({ product }) => {

    let history = useHistory();
    const dispatch = useDispatch();
    const cardButton = useRef();
    const cardImg = useRef();

    const combineClickHandler = (product) => {
        dispatch(addToBasket(product));
        dispatch(addQuantity(product));
        addToCardEffect(cardButton ,cardImg );
    }

    return (
        <>
            <div className="card">
                <div className="card-wrapper"
                    onClick={() => history.push(`/productpage/${product.id}`, product)}>
                    <div className="card-img">
                        <img src={product.imgUrl} alt="" />
                    </div>
                    <div className="card-description">
                        <h5>{product.name}</h5>
                        <p>${product.price}</p>
                    </div>
                </div>
                <button type="button"
                    ref={cardButton}
                    onClick={() => combineClickHandler(product)}>
                    ADD TO CART
                </button>
                <img
                    src={gif}
                    alt=""
                    style={{ display: "none" }}
                    ref={cardImg} 
                    id="img"/>
            </div>
        </>
    )
}

export default Card;