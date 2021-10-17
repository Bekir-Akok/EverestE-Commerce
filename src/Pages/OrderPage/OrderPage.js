import React from 'react';
import Layout from '../../Layout/Layout';
import Account from '../../Components/Account/Account';
import OrderBox from '../../Components/OrderBox/OrderBox';

const OrderPage = () => {
    return (
        <Layout>
            <div className="profile-page">
                <Account/>
                <OrderBox/>
            </div>
        </Layout>
    )
}

export default OrderPage
