import React from 'react';
import BasketCards from '../../Components/BasketCards/BasketCards';
import Layout from '../../Layout/Layout';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import {useSelector} from 'react-redux';


const BasketPage = () => {

    const products = useSelector(state => state.requestReducer.products);
    const productsLoading = useSelector(state => state.requestReducer.productsLoading);

    return (
        <Layout>
            <BasketCards/>
            <NewArrivals
                title="Best Sellers"
                products={products}
                productsLoading={productsLoading} />
        </Layout>
    )
}

export default BasketPage
