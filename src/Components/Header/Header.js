import SearchBar from '../SearchBar/SearchBar';
import "./header.scss";
import everest from "../../assets/LOGO.png";
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

  
const Header = () => {

    const menuData = [
        {categories: "Women" , title: "Women"}, 
        {categories: "Man" , title: "Men"}, 
        {categories: "Bag" , title: "Accessory"}, 
    ]

    let history = useHistory()

    return (
        <div className="header-container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <Link to="/"><img src={everest} alt="" /></Link>
                </div>
                <SearchBar/>
                <div className="header-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {
                            menuData.map((x , i) =>{
                              return <li key={i} onClick={() => history.push(`/categorypage/${x.categories}`)}>{x.title}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
export default Header
