export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ARTICLES_BY_QUERY = "GET_ARTICLES_BY_QUERY";
export const FILTER_SEARCHBAR = "FILTERED_SEARCHBAR";
export const GET_DETAIL = "GET_DETAIL";
export const RES_STATE = "RES_STATE";
export const GET_PRODUCT_DESACTIVATE = "GET_PRODUCT_DESACTIVATE";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PAYMENT_LINK = "SET_PAYMENT_LINK";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const GET_ARTICLES = "GET_ARTICLES";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const GET_ARTICLE_ID = "GET_ARTICLE_ID";

import axios from "axios";

export const getArticles = () => {
  return async function (dispatch) {
    var apiData = await axios("http://localhost:3001/articles");
    const page = apiData.data;
    dispatch({ type: GET_ARTICLES, payload: page });
  };
};
export const nextPage = (props) => {
  if (props.next != null) {
    return async function (dispatch) {
      const apiData = await axios(props.next);
      const page = apiData.data;
      dispatch({ type: NEXT_PAGE, payload: page });
    };
  }
};
export const prevPage = (props) => {
  if (props.prev != null) {
    return async function (dispatch) {
      const apiData = await axios(props.prev);
      const page = apiData.data;
      dispatch({ type: PREV_PAGE, payload: page });
    };
  }
};

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
    const json = await axios.get(
      `http://localhost:3001/articlefinder/?id=${id}`
    );

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
// fncion para desactivar o activar un producto
export const productdesactivate = (id, active) => {
  return async function (dispatch) {
    const body = { active };
    const apiData = await axios.put(
      `http://localhost:3001/articles/${id}`,
      body
    );
    const product = apiData.data;
    dispatch({ type: GET_PRODUCT_DESACTIVATE, payload: product });
  };
};

export const updateProduct = (body) => {
  return async function (dispatch) {
    const apiData = await axios.put("http://localhost:3001/articles", body);

    const product = apiData.data;
    dispatch({ type: UPDATE_PRODUCT, payload: product });
  };
};

export const createPayment = (productPrice, productQuantity) => {
  return (dispatch) => {
    axios

      .post("http://localhost:3001/mercadoPago", {
        price: productPrice,
        quantity: productQuantity,
      })

      .then((response) => {
        const paymentLink = response.data.url;
        dispatch(setPaymentLink(paymentLink));
      })
      .catch((error) => {
        console.log("Error al crear el pago:", error);
      });
  };
};

export const setPaymentLink = (paymentLink) => {
  return {
    type: SET_PAYMENT_LINK,

    payload: paymentLink,
  };
};

export const addProduct = (body) => {
  return async function (dispatch) {
    const apiData = await axios.post("http://localhost:3001/articles", body);
    const product = apiData.data;
    dispatch({ type: ADD_PRODUCT, payload: product });
  };
};
