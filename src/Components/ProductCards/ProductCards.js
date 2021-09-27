import React from 'react';
import Card from '../Card/Card';
import './productCard.scss'

const ProductCards = ({ products }) => {

    return (
        <>
            <div className="card-container">
                <div className="card-wrapper">
                    {
                        products.map((product, i) => {
                            return (
                                <Card product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductCards
