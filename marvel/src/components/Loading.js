import React from "react";
import style from "../styles/loading.module.scss";

function Loading() {
    return (
        <div className={style.container}>
            <div className={style.loader}>
                <div className={style.ring}></div>
                <div className={style.ring}></div>
                <div className={style.ring}></div>
                <p>Loading...</p>
            </div>
        </div>
    );
}

export default Loading;