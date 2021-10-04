import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import "./header.scss";
import everest from "../../assets/LOGO.png";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { IoPersonCircleOutline } from 'react-icons/io5';


const Header = () => {

    const menuData = [
        { categories: "Women", category: "Women" },
        { categories: "Man", category: "Men" },
        { categories: "Bag", category: "Accessories & Bags" },
    ]

    let history = useHistory();
    const [visible, setVisible] = useState(false);
    
    return (
        <div className="header-container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <Link to="/"><img src={everest} alt="" /></Link>
                </div>
                <SearchBar />
                <div className="header-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {
                            menuData.map((x, i) => {
                                return <li style={{ cursor: "pointer" }} key={i} onClick={() => history.push(`/categorypage/${x.categories}`)}>{x.category}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="header-mobile-menu">
                    <span>
                        <RiMenuFill
                            onClick={() => setVisible(!visible)} />
                    </span>
                    {
                        <>
                            <div className="mobile-menu-container"
                                style={visible ? { left: "0" } : { left: "-1000px" }}>
                                <div className="mobile-menu-wrapper">
                                    <div className="head-menu">
                                        <img src={everest} alt=""
                                            onClick={() => setVisible(!visible)} />
                                        <div className="sign-in">
                                            <span>
                                                <IoPersonCircleOutline />
                                                <p>Sign In</p>
                                            </span>
                                            <span className="flag">
                                                <h6>US/EN</h6>
                                            </span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        {
                                            menuData.map((x, i) => {
                                                return (
                                                    <li
                                                        onClick={() => history.push(`/categorypage/${x.categories}`, x)}
                                                        key={i}>
                                                        <a>{x.category}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="mobile-menu-closer"
                                    onClick={() => setVisible(!visible)} >
                                    <span>
                                        <AiOutlineClose />
                                    </span>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
