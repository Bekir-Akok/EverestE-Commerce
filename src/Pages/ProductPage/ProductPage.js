import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/action';
import { SRLWrapper } from "simple-react-lightbox";
import Layout from '../../Layout/Layout';
import './productPage.scss'

const ProductPage = () => {

    const { product } = useParams();
    const state = useSelector(state => state.requestReducer.products);
    const dispatch = useDispatch();
    const [filterProduct, setFilterProduct] = useState();

    /*all products >>> single product*/
    const filteredProducts = () => {
        const result = state.filter((pro) => {
            return (
                pro.id
                    .indexOf(product) !== -1
            );
        });
        setFilterProduct(result)
    };

    useEffect(() => {
        dispatch(getProducts);
        filteredProducts();
    }, [product])

    return (
        <>
            <Layout>
                {filterProduct &&
                    filterProduct.map((pro, i) => {
                        return (
                            <div key={i}>
                                <div className="product-container" >
                                    <div className="product-wrapper">
                                        <div className="product-image">
                                            <SRLWrapper>
                                                <img src={pro.imgUrl} alt="" />
                                            </SRLWrapper>
                                        </div>
                                        <div className="product-title">
                                            <h5>{pro.description[0].details}</h5>
                                            <h1>{pro.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Layout>
        </>
    )
}

export default ProductPage
