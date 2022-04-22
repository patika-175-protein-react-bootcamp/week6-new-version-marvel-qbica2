/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import {getCharactersByPageNumber, searchCharacters, getCharactersByID } from "../services/charactersService";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {

    const [characterList, setCharacterList] = useState([]);
    const [page,setPage] = useState(Number(sessionStorage.getItem("currentPage")) || 1);
    const [totalPages,setTotalPages] = useState(sessionStorage.getItem("totalPages") || 10);
    const [pageLoading,setPageLoading] = useState(false);
    const [searchText,setSearchText] = useState("");
    const [searchList,setSearchList] = useState([]);
    const [detail,setDetail] = useState(JSON.parse(sessionStorage.getItem(`detail:${sessionStorage.getItem("currentDetail")}`)) ||{});
    const [detailLoading,setDetailLoading] = useState(false);



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

    useEffect(() => {
        const search = async () => {
            if(searchText.length > 0){
                const res = await searchCharacters(searchText);
                setSearchList(res.results);
            }else{
                setSearchList([]);
            }
        };
        search();
    },[searchText]);

    const handlePageChange = (value) => {
        if(value.type === "prev"){
            setPage(x=>x-1);
        }else if(value.type === "next"){
            
            setPage(x=>x+1);
        }else{
            setPage(value.number);
        }
    };

    const getDetail= async (id) =>{
        const characterDetail = sessionStorage.getItem(`detail:${id}`);
        if(characterDetail){
            setDetail(JSON.parse(characterDetail));
        }else{
            setDetailLoading(true);
            const res = await getCharactersByID(id);
            setDetail(res.results[0]);
            sessionStorage.setItem(`detail:${id}`,JSON.stringify(res.results[0]));
           
            setDetailLoading(false);
        }
        sessionStorage.setItem("currentDetail", id);
    };


    const values={
        characterList,
        setPage,
        page,
        totalPages,
        handlePageChange,
        pageLoading,
        searchText,
        setSearchText,
        searchList,
        getDetail,
        detail,
        detailLoading
    };

    return (
        <CharacterContext.Provider value={values}> {children} </CharacterContext.Provider>
    );
};

export default CharacterContext;