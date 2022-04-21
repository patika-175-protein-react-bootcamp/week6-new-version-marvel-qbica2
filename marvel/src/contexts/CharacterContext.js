/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import {getCharactersByPageNumber} from "../services/charactersService";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {

    const [characterList, setCharacterList] = useState([]);
    const [page,setPage] = useState(sessionStorage.getItem("currentPage") || 1);
    const [totalPages,setTotalPages] = useState(sessionStorage.getItem("totalPages") || 10);


    useEffect(() => {
        const getData = async () => {
            const fetchedPages= sessionStorage.getItem(`page:${page}`);
            if(fetchedPages){
                setCharacterList(JSON.parse(fetchedPages));
                setTotalPages(sessionStorage.getItem("totalPages"));
            }else{
                const response = await getCharactersByPageNumber(page);
                setCharacterList(response.results);
                setTotalPages(Math.ceil(response.total/20));
                sessionStorage.setItem(`page:${page}`,JSON.stringify(response.results));
                sessionStorage.setItem("totalPages",Math.ceil(response.total/20));
            }
        };
        getData();
    }, [page]);

    const values={
        characterList,
        setPage,
        page,
        totalPages,
    };

    return (
        <CharacterContext.Provider value={values}> {children} </CharacterContext.Provider>
    );
};

export default CharacterContext;