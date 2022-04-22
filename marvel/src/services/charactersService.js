/* eslint-disable no-undef */
import axios, { requests } from "../constants/axios";

const API_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const HASH= process.env.REACT_APP_MARVEL_HASH;
const url = `ts=1&apikey=${API_KEY}&hash=${HASH}`;

export const getCharactersByPageNumber = async (page) => {
    const response = await axios.get(requests.characters +`?${url}&offset=${(page-1)*20}`);
    return response.data.data;
};

export const searchCharacters = async (search) => {
    const response = await axios.get(requests.search + `${search}&${url}`);
    return response.data.data;
};

export const getCharactersByID = async (id) => {
    const response = await axios.get(requests.characterDetail + `${id}?${url}`);
    return response.data.data;
};