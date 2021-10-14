import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import { Link } from 'react-router-dom';
import './checkout.scss';

const Checkout = ({ basket }) => {
    return (
        <>
            {
                basket.length <= 0
                    ? null
                    : (
                        <div className="checkout-contaier">
                            <button type="submit">
                                SECURE CHECKOUT
                            </button>
                            <div className="checkout-detail">
                                <h6>ORDER SUMMARY</h6>
                                <Subtotal
                                    title="Subtotal"
                                    basket={basket} />
                                <div className="checkout-shipping">
                                    <p>* Shipping Standard</p>
                                    <p style={{ color: "#91362a" }}>FREE</p>
                                </div>
                                <div className="checkout-tax">
                                    <p>* Tax</p>
                                    <p>$0.00</p>
                                </div>
                                <div className="checkout-total">
                                    <Subtotal
                                        title="ORDER TOTAL"
                                        basket={basket} />
                                    <p>* Shipping and tax are calculated after the shipping step is completed.</p>
                                    <div className="links">
                                        <Link to="/">EASY RETURNS</Link>
                                        <Link to="/">SHIPPING INFORMATION</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Checkout
