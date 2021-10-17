import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Subtotal from '../Subtotal/Subtotal';
import './orderBox.scss';

const OrderBox = () => {

    const user = useSelector(state => state.userReducer.user);
    const orders = useSelector(state => state.orderReducer.order);
    const [orderHistory, setOrderHistory] = useState();

    const comporeUser = () => {
        const newArr = []
        orders.map(order => {
            return (
                order.user.uid === user.uid
                    ? newArr.push(order.orders)
                    : null
            )
        })
        setOrderHistory(newArr)
    };

    useEffect(() => {
        comporeUser()
    }, [user])

    return (
        <div className="info-container">
            <h3>Hi {user.displayName}</h3>
            <div className="info-box">
                <div className="info-title">
                    <h4>ORDER HISTORY</h4>
                </div>
                <div className="info-user">
                    <div className="order-product">
                        {
                            orderHistory &&
                            orderHistory.map((order, i) => {
                                return (
                                    <div key={i}>
                                        <p>Order {i + 1}</p>
                                        {order.map((product, i) => {
                                            return (
                                                <>
                                                    <div className="order-product-container" key={i}>
                                                        <img src={product.imgUrl} alt="" />
                                                        <div className="order-product-p">
                                                            <p>{product.name}</p>
                                                            <p>{product.quantity}</p>
                                                            <p>$ {product.price}</p>
                                                            <p>$ {(product.price * product.quantity).toFixed(2)}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                        < div className="order-subtotal" key={i} >
                                            <Subtotal title="Subtotal" basket={order} />
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OrderBox
