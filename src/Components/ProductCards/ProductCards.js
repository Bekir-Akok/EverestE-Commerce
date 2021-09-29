import Card from '../Card/Card';
import './productCard.scss'

const ProductCards = ({ products }) => {
    return (
        <div className="card-container">
            <div className="card-title">
                {
                    products.length <= 0 ? null : (
                        <>
                            <h3>{products[0].title}</h3>
                            <p>{products[0].subtitle}</p>
                        </>
                    )
                }   
            </div>
            <div className="card-wrapper">
                {
                    products.map((product, i) => {
                        return (
                            <Card product={product} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductCards
