import React, { useContext} from "react";
import Card from "./Card";
import style from "../styles/cardlist.module.scss";
import CharacterContext from "../contexts/CharacterContext";

function CardList() {
    const { characterList, getDetail } = useContext(CharacterContext);
    return (
        <div className={style.cardList}>
            {characterList.map((character) => (
                <Card 
                    key={character.id} 
                    name={character.name} 
                    src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`} 
                    id={character.id}
                    getDetail={getDetail}
                />
            ))}
        </div>
    );
}

export default CardList;