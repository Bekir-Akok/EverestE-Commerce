import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { basketLength } from '../../helpers/helpers';
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { removeFromBasket, addQuantity, subQuantity, emptyBasket } from '../../Redux/Actions/action';
import { getProducts } from '../../Redux/Actions/action';
import { useHistory } from 'react-router';
import Checkout from '../Checkout/Checkout';
import './basketCards.scss';

const BasketCards = () => {

    const baskets = useSelector(state => state.basketReducer.basket);
    const dispatch = useDispatch();
    let history = useHistory();
    const [basket, setBasket] = useState([])

    useEffect(() => {
        basketLength(baskets, setBasket)
        dispatch(getProducts())
    }, [baskets])

    return (
        <div className="basket-flex">
            <div className="basket-card-container">
                <p>Shopping Card</p>
                {
                    basket.length <= 0
                        ? <h5>Shopping card is empty...</h5>
                        : basket.map((product, i) => {
                            return (
                                <div className="basket-products-container" key={i}>
                                    <div className="basket-products-img">
                                        <img src={product.imgUrl} alt=""
                                            onClick={() => history.push(`/productpage/${product.id}`, product)} />
                                    </div>
                                    <div className="basket-products-right">
                                        <div className="basket-products-description">
                                            <h3
                                                onClick={() => history.push(`/productpage/${product.id}`, product)}>
                                                {product.name}
                                            </h3>
                                            <h4>Color: Mulled Berry / True Black / Potent Pink</h4>
                                            <h4>Size: S</h4>
                                            <h5>$ {product.price}</h5>
                                        </div>
                                        <div className="basket-products-quantity">
                                            <div className="quantity-arrows">
                                                <span id="minus">
                                                    <AiOutlineMinus
                                                        onClick={() => dispatch(subQuantity(product))} />
                                                </span>
                                                <p>{product.quantity}</p>
                                                <span id="plus">
                                                    <AiOutlinePlus
                                                        onClick={() => dispatch(addQuantity(product))} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="basket-products-price">
                                            $ {(product.price * product.quantity).toFixed(2)}

                                        </div>
                                    </div>
                                    <div className="basket-remove-item">
                                        <AiOutlineClose
                                            onClick={() => dispatch(removeFromBasket(product))} />
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
            <Checkout basket={basket} />
        </div>

    )
}

export default BasketCards
