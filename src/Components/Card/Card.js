import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket, addQuantity } from '../../Redux/Actions/action';
import './card.scss';

const Card = ({ product }) => {

    let history = useHistory();
    const dispatch = useDispatch();

    const combineClickHandler = (product) => {
        dispatch(addToBasket(product))
        dispatch(addQuantity(product))
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
                    onClick={() => combineClickHandler(product)}>
                    ADD TO CART
                </button>
            </div>
        </>
    )
}

export default Card;