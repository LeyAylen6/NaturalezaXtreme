export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_DETAIL = 'GET_DETAIL';
export const RES_STATE = 'RES_STATE'   
export const GET_ARTICLE_ID = "GET_ARTICLE_ID";

import axios from "axios";

export const addFav = (article) => {
  return { type: ADD_FAV, payload: article };
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

export function getDetail(id){
  return async function(dispatch){
      const json = await axios.get('http://localhost:3001/articles/' + id);
      return dispatch({
          type: GET_DETAIL,
          payload: json.data,
      })
  }
}  
export function resState(){
  return {
      type: RES_STATE,
  }
}


export const getArticleId = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/articles/${id}`);
    const product = apiData.data;
    dispatch({ type: GET_ARTICLE_ID, payload: product });
  };
};

