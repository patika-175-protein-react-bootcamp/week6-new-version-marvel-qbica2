import React from "react";
import style from "../styles/header.module.scss";

function Header() {
    return (
        <header>
            <div className={style.marvel}>
                <img src="image2.png" alt="logo" />
            </div>
        </header>
    );
}

export default Header;