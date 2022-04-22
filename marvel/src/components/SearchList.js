import React, { useContext, useState, useEffect, useRef }from "react";
import style from "../styles/searchlist.module.scss";
import CharacterContext from "../contexts/CharacterContext";
import useOutsideClick from "../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function SearchList() {
    const { searchList,getDetail } = useContext(CharacterContext);
    const [list, setList] = useState([]);
    const listRef = useRef();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        setList(searchList.slice(0,5));
    }, [searchList]);

    useOutsideClick(listRef, () => {
        setList([]);
    });

    const handleClick = (id) => {
        getDetail(id);
        navigate(`/detail/${id}`);
    };

    return (
        <div className={style.searchList}>
            <div ref={listRef} className={style.list}>
                {
                    list.map(item => (
                        <span onClick={()=>handleClick(item.id)} key={item.id}>
                            {t("searchList.name")} : {item.name}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}

export default SearchList;