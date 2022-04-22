/* eslint-disable no-undef */
import axios from "axios";

export const baseURL= "https://gateway.marvel.com/v1/public";

export default axios.create({baseURL});

export const requests = {
    characters: "/characters",
    search: "/characters?nameStartsWith=",
    characterDetail: "/characters/",
};