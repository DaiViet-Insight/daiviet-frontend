import React from "react";
import { useState, useEffect } from "react";
import './SearchBarEvent.css';

const SearchBarEvent = ({ events, onClickAddEvent }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = events.filter(event =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, events]);

    return (
        <div className="searchBarEvent">
            <div className="searchBarEvent__header">
                <h1 className="searchBarEvent__header-heading">Tìm kiếm Sự kiện</h1>
            </div>
            <div className="searchBarEvent__body">
                <div className="searchBarEvent__body-search">
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm Sự kiện"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="searchBarEvent__body-list">
                    <ul className="searchBarEvent__body-list-ul">
                        {
                            searchResults.map((event) => (
                                <li className="searchBarEvent__body-list-li" key={event.id}>
                                    <button 
                                        className="searchBarEvent__body-list-li-btn"
                                        onClick={() => onClickAddEvent(event)}
                                    >{event.name}</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchBarEvent;