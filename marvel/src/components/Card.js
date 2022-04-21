/* eslint-disable react/prop-types */
import React from "react";
import style from "../styles/card.module.scss";

function Card( { name, src } ) {
    return (
        <div className={style.card}>
            <img  src={src} alt={name} />
            <div className={style.title}>{name}</div>
        </div>
    );
}

export default Card;