/* eslint-disable react/prop-types */
import React from "react";
import style from "../styles/layout.module.scss";
import Header from "./Header";
import Navigation from "./Navigation";
import SearchList from "./SearchList";

function Layout({ children }) {
    return (
        <div className={style.layout}>
            <Header />
            <Navigation />
            <SearchList />
            {children}
        </div>
    );
}

export default Layout;