export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
import axios from "axios";

export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};
export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};
export const getAllProducts = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/articles");
    const products = apiData.data;
    dispatch({ type: GET_ALL_PRODUCTS, payload: products });
  };
};
