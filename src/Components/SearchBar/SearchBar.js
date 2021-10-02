import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './searchbar.scss';

const SearchBar = () => {
    return (
        <div className="searchbar">
            <input type="search" placeholder="Search" />
            <div className="search-button">
                <span>
                    <BiSearchAlt />
                </span>
            </div>
        </div>
    )
}

export default SearchBar
