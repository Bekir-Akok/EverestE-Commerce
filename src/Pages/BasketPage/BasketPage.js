import React from 'react';
import BasketCards from '../../Components/BasketCards/BasketCards';
import Layout from '../../Layout/Layout';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import { useSelector } from 'react-redux';

const BasketPage = () => {

    const products = useSelector(state => state.requestReducer.products);
    const productsLoading = useSelector(state => state.requestReducer.productsLoading);

    return (

        <Layout>
            <div style={{ overflowX: "hidden" }}>
                <BasketCards />
                <NewArrivals
                    title="Also Bought With"
                    products={products}
                    productsLoading={productsLoading} />
            </div>
        </Layout>
    )
}

export default BasketPage
