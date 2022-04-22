import React from "react";
import PropTypes from "prop-types";
import style from "../styles/card.module.scss";
import { truncate } from "../utils/truncate";

function Card( { name, src } ) {
    return (
        <div className={style.card}>
            <img  src={src} alt={name} />
            <div className={style.title}>{truncate(name,25)}</div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default Card;