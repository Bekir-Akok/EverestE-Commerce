import React from 'react';
import {Link} from 'react-router-dom';
import './loginFooter.scss';

const LoginFooter = () => {
    return (
        <div className="login-footer">
            <p>
                © 2021 Everest E-commerce
            </p>
            <ul>
                <li><Link to="/"> Terms & Conditions</Link></li>
                <li><Link to="/">Privacy</Link></li>
                <li><Link to="/">User Content Terms</Link></li>
                <li><Link to="/">Site Map</Link></li> 
            </ul>
        </div>
    )
}

export default LoginFooter
