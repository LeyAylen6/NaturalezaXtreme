export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ARTICLES_BY_QUERY = "GET_ARTICLES_BY_QUERY";
export const FILTER_SEARCHBAR = "FILTERED_SEARCHBAR";
export const GET_DETAIL = "GET_DETAIL";
export const RES_STATE = "RES_STATE";
export const GET_ARTICLE_ID = "GET_ARTICLE_ID";
export const SET_PAYMENT_LINK = 'SET_PAYMENT_LINK';
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
export const getArticlesByQuery = (name) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/articles`);
    const payload = response.data;
    return dispatch({
      type: GET_ARTICLES_BY_QUERY,
      payload,
    });
  };
};
export const filterSearchBar = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: FILTER_SEARCHBAR,
      payload,
    });
  };
};

export function getDetail(id) {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/articles/" + id);
    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  };
}
export function resState() {
  return {
    type: RES_STATE,
  };
}

export const getArticleId = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/articles/${id}`);
    const product = apiData.data;
    dispatch({ type: GET_ARTICLE_ID, payload: product });
  };
};

// Acción para crear el pago en Mercado Pago
export const createPayment = (productPrice, productQuantity) => {
  return (dispatch) => {
    // Realiza la solicitud al backend para crear el pago
    axios
      .post('/api/createPayment', { price: productPrice, quantity: productQuantity })
      .then((response) => {
        // Se obtiene el link de pago desde la respuesta del backend
        const paymentLink = response.data.paymentLink;
        // Actualiza el estado de la aplicación con el link de pago
        dispatch(setPaymentLink(paymentLink));
      })
      .catch((error) => {
        // Manejo de errores
        console.log('Error al crear el pago:', error);
      });
  };
};
// Acción para actualizar el estado de la aplicación con el link de pago
export const setPaymentLink = (paymentLink) => {
  return {
    type: 'SET_PAYMENT_LINK',
    payload: paymentLink,
  };
};
