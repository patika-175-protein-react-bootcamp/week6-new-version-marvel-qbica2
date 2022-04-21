/* eslint-disable no-unused-vars */
import axios, { requests } from "../constants/axios";

export const getCharactersByPageNumber = async (page) => {
    const response = await axios.get(requests.characters + `&offset=${(page-1)*20}`);
    return response.data.data;
};
