import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/action';
import Layout from '../../Layout/Layout';
import ProductContent from '../../Components/ProductContent/ProductContent';

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
                <ProductContent filterProduct={filterProduct}/>
            </Layout>
        </>
    )
}

export default ProductPage
