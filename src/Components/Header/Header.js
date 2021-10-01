import SearchBar from '../SearchBar/SearchBar';
import "./header.scss";
import everest from "../../assets/LOGO.png";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () => {

    const menuData = [
        { categories: "Women", category: "Women" },
        { categories: "Man", category: "Men" },
        { categories: "Bag", category: "Accessories & Bags" },
    ]

    let history = useHistory()

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
            </div>
        </div>
    )
}

export default Header
