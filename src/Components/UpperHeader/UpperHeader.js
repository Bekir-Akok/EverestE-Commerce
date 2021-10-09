import React, { useEffect , useState } from 'react';
import {Link} from 'react-router-dom';
import {GrBasket} from 'react-icons/gr';
import {CgLogIn} from 'react-icons/cg';
import { basketLength } from '../../helpers/helpers';
import { useSelector } from 'react-redux';
import './upperHeader.scss';

const UpperHeader = () => {

    const [newBasket , setNewBasket] = useState(0);
    const basket = useSelector(state => state.basketReducer.basket);

    useEffect(() => {
        basketLength(basket , setNewBasket)
    },[basket])


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
                    <Link><span><CgLogIn/></span>Sign-in</Link>
                </div>
                <Link to="/basket"><GrBasket/>{newBasket.length}</Link>
            </div>
        </div>
    )
}

export default UpperHeader
