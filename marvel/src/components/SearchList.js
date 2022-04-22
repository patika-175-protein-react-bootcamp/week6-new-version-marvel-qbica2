import React, { useContext, useState, useEffect, useRef }from "react";
import style from "../styles/searchlist.module.scss";
import CharacterContext from "../contexts/CharacterContext";
import useOutsideClick from "../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";


function SearchList() {
    const { searchList,getDetail } = useContext(CharacterContext);
    const [list, setList] = useState([]);
    const listRef = useRef();
    const navigate = useNavigate();

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
                        Karakter Adı : {item.name}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}

export default SearchList;