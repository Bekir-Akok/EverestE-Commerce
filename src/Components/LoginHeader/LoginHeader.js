import React from 'react';
import everest from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';
import './loginHeader.scss';

const LoginHeader = () => {
    return (
        <Link to="/">
            <div className="login-header">
                <img src={everest} alt="" />
            </div>
        </Link>
    )
}

export default LoginHeader
