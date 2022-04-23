import React, {useContext, useState, useEffect} from "react";
import CharacterContext from "../contexts/CharacterContext";
import Loading from "../components/Loading";
import style from "../styles/details.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Details() {
    const {detail, detailLoading} = useContext(CharacterContext);
    const [list,setList] = useState([]);
    const [sortedList,setSortedList] = useState([]);
    const numberInParenthesis = /^.*?\([^\d]*(\d+)[^\d]*\).*$/;

    const navigate = useNavigate();
    const { t } = useTranslation();
    useEffect(() => { 
        if(!detailLoading) {
            setList(detail.comics.items.slice(0,10));
        }
    }, [detail]);

    useEffect(() => {
        if(list.length > 0) {
            setSortedList(list.sort((a,b) => {
                const aNumber = a.name.match(numberInParenthesis);
                const bNumber = b.name.match(numberInParenthesis);
                if(aNumber && bNumber) {
                    return parseInt(aNumber[1]) - parseInt(bNumber[1]);
                }
                return 0;
            }));
        }
    }, [list]);

    return (
        <>
            {
                detailLoading ? <Loading /> : (
                    <div className={style.details}>
                        <div className={style.container}>
                            <img src={`${detail.thumbnail.path}/portrait_incredible.${detail.thumbnail.extension}`} alt={detail.name} />
                            <div className={style.right}>
                                <div className={style.title}>{detail.name}</div>
                                <div className={style.description}>{detail.description}</div>
                                <span>{t("detail.comics")}</span>
                                {
                                    sortedList.map((item) => (
                                        <div className={style.item} key={item.name}>
                                            {item.name}
                                        </div>
                                    ))
                                }
                                <button onClick={()=>navigate("/")}>{t("detail.home")}</button>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </>
    );
}

export default Details;