/* eslint-disable no-undef */
import axios from "axios";

export const baseURL= "https://gateway.marvel.com/v1/public";

export default axios.create({baseURL});

const API_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const HASH= process.env.REACT_APP_MARVEL_HASH;

export const requests = {
    characters: `/characters?ts=1&apikey=${API_KEY}&hash=${HASH}`,
    search: `/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&nameStartsWith=`,
};