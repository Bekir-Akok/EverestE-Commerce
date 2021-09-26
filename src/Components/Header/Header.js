import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import "./header.scss";
import logo from "../../assets/LOGO.png";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <SearchBar/>
                <div className="header-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/woman" >Woman</Link></li>
                        <li><Link>Man</Link></li>
                        <li><Link>Kids</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
