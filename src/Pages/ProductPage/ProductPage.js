import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Actions/action';
import Layout from '../../Layout/Layout';
import ProductContent from '../../Components/ProductContent/ProductContent';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';

const ProductPage = () => {

    const { product } = useParams();
    let location = useLocation()
    const state = useSelector(state => state.requestReducer.products);
    const dispatch = useDispatch();
    const [filterProduct, setFilterProduct] = useState();
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const myStyle ={
        width: "100%" ,
        height: "100%",
        backgroundColor: "#f5f5f5",
    }

    /*sorting similar products*/
    const filterSimilarProducts = async () => {
        const similarPro = await state.filter((pro) => {
            return (
                pro.categories
                    .toLocaleLowerCase()
                    .indexOf(location.state.categories.toLocaleLowerCase()) !== -1
            );
        });

        setSimilarProducts(similarPro);
        setLoading(true);

        /*all products >>> single product*/
        const result = similarPro.filter((pro) => {
            return (
                pro.id
                    .indexOf(product) !== -1
            );
        });
        setFilterProduct(result)
    };

    useEffect(() => {
        dispatch(getProducts);
        filterSimilarProducts();
    }, [product])

    return (
        <>
            <Layout>
                <ProductContent filterProduct={filterProduct} />
                <div style={myStyle}>
                    <NewArrivals
                        title="Others Like This"
                        products={similarProducts}
                        productsLoading={loading}
                        margin />
                    <NewArrivals
                        title="Also Bought With"
                        products={state}
                        productsLoading={loading}
                        margin />
                </div>
            </Layout>
        </>
    )
}

export default ProductPage
