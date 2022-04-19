/* eslint-disable react/prop-types */
import React from "react";
import style from "../styles/layout.module.scss";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div className={style.layout}>
            <Header />
            {children}
        </div>
    );
}

export default Layout;