import React from "react";
import Card from "./Card";
import style from "../styles/cardlist.module.scss";

function CardList() {
    return (
        <div className={style.cardList}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardList;