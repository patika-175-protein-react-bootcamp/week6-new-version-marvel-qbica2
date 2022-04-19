import React from "react";
import style from "../styles/languageselection.module.scss";

function LanguageSelection() {
    return (
        <div className={style.languageSelection}>
            <button>FR</button>
            <button>EN</button>
            <button className={style.active}>TR</button>
        </div>
    );
}

export default LanguageSelection;