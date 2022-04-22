import React, { useState, useEffect } from "react";
import i18n from "../i18next";
import style from "../styles/languageselection.module.scss";

function LanguageSelection() {
    const [language, setLanguage] = useState(sessionStorage.getItem("lang") || "en");
    const languages = ["fr", "en", "tr"];
    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        sessionStorage.setItem("lang", lang);
        setLanguage(lang);
    };
    useEffect(() => {
        const lang = sessionStorage.getItem("lang");
        if (lang) {
            i18n.changeLanguage(lang);
        }
    });

    return (
        <div className={style.languageSelection}>
            {
                languages.map(lang => (
                    <button key={lang} className={`${language===lang && style.active}`} onClick={()=>changeLang(lang)}>{lang.toUpperCase()}</button>
                ))
            }
        </div>
    );
}

export default LanguageSelection;