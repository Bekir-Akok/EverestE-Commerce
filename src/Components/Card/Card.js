import React from 'react'

const Card = ({product}) => {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={product.imgUrl} alt="" />
                </div>
                <div className="card-description">
                    <h5>{product.name}</h5>
                    <p>${product.price}</p>
                </div>
            </div>
        </>
    )
}

export default Card
