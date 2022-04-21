/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import {getCharactersByPageNumber} from "../services/charactersService";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {

    const [characterList, setCharacterList] = useState([]);
    const [page,setPage] = useState(Number(sessionStorage.getItem("currentPage")) || 1);
    const [totalPages,setTotalPages] = useState(sessionStorage.getItem("totalPages") || 10);
    const [pageLoading,setPageLoading] = useState(false);


    useEffect(() => {
        const getData = async () => {
            const fetchedPages= sessionStorage.getItem(`page:${page}`);
            if(fetchedPages){
                setCharacterList(JSON.parse(fetchedPages));
                setTotalPages(sessionStorage.getItem("totalPages"));
            }else{
                setPageLoading(true);
                const response = await getCharactersByPageNumber(page);
                setCharacterList(response.results);
                setTotalPages(Math.ceil(response.total/20));
                sessionStorage.setItem(`page:${page}`,JSON.stringify(response.results));
                sessionStorage.setItem("totalPages",Math.ceil(response.total/20));
            }
            setPageLoading(false);
        };
        getData();
        sessionStorage.setItem("currentPage", page);
        window.scrollTo(0, 700);

    }, [page]);

    const handlePageChange = (value) => {
        if(value.type === "prev"){
            setPage(x=>x-1);
        }else if(value.type === "next"){
            
            setPage(x=>x+1);
        }else{
            setPage(value.number);
        }
    };


    const values={
        characterList,
        setPage,
        page,
        totalPages,
        handlePageChange,
        pageLoading
    };

    return (
        <CharacterContext.Provider value={values}> {children} </CharacterContext.Provider>
    );
};

export default CharacterContext;