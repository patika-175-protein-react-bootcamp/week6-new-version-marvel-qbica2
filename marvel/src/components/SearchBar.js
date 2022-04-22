import React, { useContext, useRef }from "react";
import style from "../styles/searchbar.module.scss";
import CharacterContext from "../contexts/CharacterContext";
import useOutsideClick from "../hooks/useOutsideClick";
import { useTranslation } from "react-i18next";

function SearchBar() {
    const { searchText, setSearchText } = useContext(CharacterContext);
    const inputRef = useRef();
    const { t } = useTranslation();
    useOutsideClick(inputRef, () => {
        setSearchText("");
    });

    return (
        <div className={style.searchBar}>
            <label >{t("search.label")}</label>
            <input 
                ref={inputRef}
                type="search" 
                placeholder={t("search.placeholder")} 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;