import React, { forwardRef, useImperativeHandle } from "react";
import { useState, useRef } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ inputPlaceholder, data }, ref) => {
    const dataRef = useRef(null);

    useImperativeHandle(ref, () => 
        {
            return { 
                setData: (value) => {
                    dataRef.current = value;
                    data = value;
                    handleSetSearchBarValue("");
                }
        }
    });

    const [dataFilter, setDataFilter] = useState(data);
    const [isShow, setIsShow] = useState(false);
    const [searchBarValue, setSearchBarValue] = useState("");
    const inputRef = useRef(null);

    const handleSetSearchBarValue = (value) => {
        setSearchBarValue(value);
        if (value === "") {
            setDataFilter(data);
        } else {
            const temp = data.filter((item) => {
                return item.toLowerCase().includes(value.toLowerCase());
            });
            setDataFilter(temp);
        }
    }

    window.addEventListener("click", (event) => {
        if (event.target.id !== "searchBarValue") {
            setIsShow(false);
        }
    });

    return (
        <div className="searchBar">
            <label htmlFor="searchBarValue" className="searchBar__label">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-search-label__icon" />
            </label>
            <input 
                ref={inputRef}
                type="text" 
                id="searchBarValue" 
                name="searchBarValue" 
                value={searchBarValue}
                placeholder={inputPlaceholder}
                className="searchBar__input"
                onFocus={() => setIsShow(true)}
                //onBlur={() => setIsShow(false)}
                onChange={(event) => {handleSetSearchBarValue(event.target.value)}}
            />
            { 
                isShow && dataFilter && dataFilter.length > 0 && (
                    <div 
                        className="searchBar__result"
                    >
                        {dataFilter.map((value, key) => {
                            return (
                                <div 
                                    className="searchBar__result-item" 
                                    key={key}
                                    onClick={() => {
                                        handleSetSearchBarValue(value);
                                        setIsShow(false);
                                    }}
                                >
                                    {value}
                                </div>
                            );
                        })}
                    </div>
                )
            }
        </div>
    );
}

export default forwardRef(SearchBar);