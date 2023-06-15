export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const addFav = (character) => {
  return { type: ADD_FAV, payload: character };
};
export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};
export const getAllProducts = (products) => {
  return { type: GET_ALL_PRODUCTS, payload: products };
};
