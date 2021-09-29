import React from 'react';
import { useHistory } from 'react-router-dom';
import './card.scss';

const Card = ({product}) => {

    let history = useHistory()

    return (
        <>
            <div className="card" onClick={() => history.push(`/productpage/${product.id}`)}>
                <div className="card-img">
                    <img src={product.imgUrl} alt="" />
                </div>
                <div className="card-description">
                    <h5>{product.name}</h5>
                    <p>${product.price}</p>
                </div>
                <button type="button">ADD TO CART</button>
            </div>
        </>
    )
}

export default Card;