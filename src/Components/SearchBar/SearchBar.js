import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './searchbar.scss';

const SearchBar = () => {
    return (
        <>
            <input type="search" placeholder="Search" />
            <div className="search-button">
                <span>
                    <BiSearchAlt />
                </span>
            </div>
        </>
    )
}

export default SearchBar
