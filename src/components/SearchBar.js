import React from 'react';
import './SearchBar.css';

export default function SearchBar({ query, setQuery }) { 
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search events..."
            value={query}
            onChange={(e) => {setQuery(e.target.value)}}
        />
    );
}
