import React, { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import './subtotal.scss';

const Subtotal = ({ title, basket }) => {

    const [basketTotal, setBasketTotal] = useState();

    const getBasketTotal = () => {
        const totalPrice = basket?.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setBasketTotal(totalPrice)
    };

    useEffect(() => {
        getBasketTotal();
    }, [basket])

    return (
        <div className="subtotal-container">
            <h5>{title}</h5>
            <CurrencyFormat
                renderText={(value) => (
                    <p>
                        <strong>{value}</strong>
                    </p>
                )}
                decimalScale={2}
                value={basketTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} />
        </div>
    )
}

export default Subtotal
