import React from 'react';
import './productDetails.scss';

const ProductDetails = ({ product }) => {
    return (
        <>
            <div className="details-container">
                <div className="details-title">
                    <h4>Details</h4>
                </div>
                <div className="details-description">
                    {
                        typeof(product) == 'undefined' ? console.log("product undefined") : (
                            <>
                                <h4>{product[0].title}</h4>
                                <h3>{product[0].subtitle}</h3>
                            </>
                        )
                    }
                    <p>The bestselling combines the eco-conscious warmth of recycled content ThermacoreEco insulation with a functional yet flattering slim fit for a look that pairs well with anything in your closet. Dumping snow to springtime showers are no match for the richly textured waterproof/breathable DRYRIDE two-layer fabrics, which are offered in patterns ranging from classic single-colored to standout tribal. Add in the full laundry list of hidden features, including a permanently removable waist gaiter, handy pockets, and a hidden hem cinch, and you've got a jacket that is always ready for action.</p>
                </div>
                <div className="details-detail">
                    <ul>
                        {
                            typeof(product) == 'undefined' ? null : (
                                product[0].description.map((detail, i) => {
                                    return (
                                        <li key={i}>{detail.details}</li>
                                    )
                                })
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
