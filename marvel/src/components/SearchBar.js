import React, { useContext, useRef }from "react";
import style from "../styles/searchbar.module.scss";
import CharacterContext from "../contexts/CharacterContext";
import useOutsideClick from "../hooks/useOutsideClick";

function SearchBar() {
    const { searchText, setSearchText } = useContext(CharacterContext);
    const inputRef = useRef();
    
    useOutsideClick(inputRef, () => {
        setSearchText("");
    });

    return (
        <div className={style.searchBar}>
            <label >Karakter Ara</label>
            <input 
                ref={inputRef}
                type="search" 
                placeholder="Aramak istediğiniz karakteri yazınız" 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;