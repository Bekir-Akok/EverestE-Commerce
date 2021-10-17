import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { BsPhone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import './account.scss';

const Account = () => {

    let history = useHistory();
    const user = useSelector(state => state.userReducer.user)

    const combineEvent = () => {
        auth.signOut();
        history.push('/')
    }

    return (
        <div className="account-container">
            <h3>My Account</h3>
            <ul>
                <li onClick={() => history.push(`/profilepage/${user.displayName}`)}><Link to="">Info & Preferences</Link></li>
                <li><Link to="/orders">Order History</Link></li>
                <li id="signout" onClick={() => combineEvent()}>SIGN OUT</li>
            </ul>
            <ol>
                <p>Need Help ?</p>
                <li>
                    <span>
                        <BsPhone />
                    </span>
                    Call: (531) 255-1997
                </li>
                <li>
                    <span>
                        <IoLocationOutline />
                    </span>
                    Find a Store
                </li>
                <li>
                    <span>
                        <AiOutlineMail />
                    </span>
                    Email Us
                </li>
            </ol>
        </div>
    )
}

export default Account
