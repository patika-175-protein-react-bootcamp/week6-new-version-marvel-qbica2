import React from "react";
import style from "../styles/navigation.module.scss";
import SearchBar from "./SearchBar";
import LanguageSelection from "./LanguageSelection";

function Navigation() {
    return (
        <div className={style.nav}>
            <SearchBar />
            <LanguageSelection />
        </div>
    );
}

export default Navigation;