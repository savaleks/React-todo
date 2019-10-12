import React from "react";
import "./search-text.css"

const SearchWord = () => {
    const searchText = 'Type text here';
    return <input 
    className="search-input" 
    placeholder={searchText} />;
}

export default SearchWord;