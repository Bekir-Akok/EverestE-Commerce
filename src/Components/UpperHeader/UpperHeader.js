import React, { useEffect, useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import { GrBasket } from 'react-icons/gr';
import { CgLogIn } from 'react-icons/cg';
import { basketLength } from '../../helpers/helpers';
import { useSelector } from 'react-redux';
import './upperHeader.scss';

const UpperHeader = () => {

    const [newBasket, setNewBasket] = useState(0);
    const basket = useSelector(state => state.basketReducer.basket);
    const user = useSelector(state => state.userReducer.user);
    let history = useHistory();

    useEffect(() => {
        basketLength(basket, setNewBasket)
    }, [basket])

    return (
        <div className="upper-header">
            <div className="upper-links">
                <Link to="/">EVEREST</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Sustainability</Link>
            </div>
            <h4>FREE SHIPPING ON ALL ORDERS</h4>
            <div className="upper-basket">
                <div className="upper-sign-in">
                    {
                        user
                            ? <div style={{ cursor: "pointer" }} onClick={() => history.push(`/profilepage/${user.displayName}`)}>
                                <p>Welcome</p>
                                <p>{user.displayName}</p>
                            </div>
                            : <>
                                <Link to="/login">
                                    <span>
                                        <CgLogIn />
                                    </span>
                                    Sign-in
                                </Link>
                            </>
                    }
                </div>
                <Link to="/basket"><GrBasket />{newBasket.length}</Link>
            </div>
        </div>
    )
}

export default UpperHeader
