import React, { useContext, useState, useEffect, useRef }from "react";
import style from "../styles/searchlist.module.scss";
import CharacterContext from "../contexts/CharacterContext";
import useOutsideClick from "../hooks/useOutsideClick";

function SearchList() {
    const { searchList } = useContext(CharacterContext);
    const [list, setList] = useState([]);
    const listRef = useRef();

    useEffect(() => {
        setList(searchList.slice(0,5));
    }, [searchList]);

    useOutsideClick(listRef, () => {
        setList([]);
    });
    return (
        <div className={style.searchList}>
            <div ref={listRef} className={style.list}>
                {
                    list.map(item => (
                        <span key={item.id}>
                        Karakter Adı : {item.name}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}

export default SearchList;