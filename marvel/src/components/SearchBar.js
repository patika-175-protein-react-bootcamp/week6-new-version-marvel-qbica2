import React from "react";
import style from "../styles/searchbar.module.scss";

function SearchBar() {
    return (
        <div className={style.searchBar}>
            <label >Karakter Ara</label>
            <input type="search" placeholder="Aramak istediğiniz karakteri yazınız" />
        </div>
    );
}

export default SearchBar;