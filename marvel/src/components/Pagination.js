import React, { useContext, useState, useEffect } from "react";
import style from "../styles/pagination.module.scss";
import CharacterContext from "../contexts/CharacterContext";

function Pagination() {

    const { page, totalPages, handlePageChange } = useContext(CharacterContext);
    const [pageList, setPageList] = useState([]);

    useEffect(() => {

        let list = [];
        let firstItem;
        let lastItem;
        let addLast = ["...", totalPages];
        let addFirst = [1,"..."];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                list.push(i);
            }
        } else {
            if(page <=4){
                firstItem = 1;
                if(page<4){
                    lastItem = 4;
                }else{
                    lastItem = 5;
                }
            }else if(page >= totalPages - 3){
                if(page > totalPages - 3) {
                    firstItem = totalPages - 3;
                }else{
                    firstItem = page - 1;
                }
                lastItem = totalPages;
            }else{
                firstItem = page - 1;
                lastItem = page + 1;
            }
            for (let i = firstItem; i <= lastItem; i++) {
                list.push(i);
            }

            if(page <=4){
                list = [...list, ...addLast];
            }else if(page >= totalPages - 3){
                list = [...addFirst, ...list];
            }else{
                list = [...addFirst, ...list, ...addLast];
            }
            
        }

        setPageList([...list]);

    }, [page, totalPages]);


    return (
        <footer>
            <div className={style.pagination}>
                {
                    page!=1 && (<button onClick={()=>handlePageChange({type:"prev"})} ><i className="fa-solid fa-xl fa-angle-left"></i></button>)
                }
                {
                    pageList.map((item,i) => (
                        <button className={`${page===item && style.active}`} onClick={()=>handlePageChange({number:item})} key={i} value={item}>{item}</button>
                    ))
                }
                {
                    page!=totalPages && (<button onClick={()=>handlePageChange({type:"next"})} ><i className="fa-solid fa-xl fa-angle-right"></i></button>)
                }
            </div>
        </footer>
    );
}

export default Pagination;