import React from "react";
import PropTypes from "prop-types";
import style from "../styles/card.module.scss";
import { truncate } from "../utils/truncate";
import { useNavigate } from "react-router-dom";

function Card( { name, src, id , getDetail } ) {
    const navigate = useNavigate();

    const handleClick = () => {
        getDetail(id);
        navigate(`/detail/${id}`);
    };
    return (
        <div className={style.card} onClick={handleClick}>
            <img  src={src} alt={name} />
            <div className={style.title}>{truncate(name,25)}</div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    getDetail: PropTypes.func.isRequired,
};

export default Card;