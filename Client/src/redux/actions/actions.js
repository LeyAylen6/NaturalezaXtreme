export const GET_ALL_FAVS = "GET_ALL_FAVS";
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
export const SIGN_UP = "SIGN_UP";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_TO_MERCADO_PAGO = "ADD_TO_MERCADO_PAGO";

export const GET_ARTICLES = "GET_ARTICLES";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const GET_ARTICLE_ID = "GET_ARTICLE_ID";

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";

export const MESSAGE = "MESSAGE"
export const CLEAR_MESSAGE = "CLEAR_MESSAGE"

import axios from "axios";

//const URL ='https://2129-201-190-150-125.ngrok-free.app'; (no lo borren plis)
const URL = "http://localhost:3001/";

export const getArticles = () => {
  return async function (dispatch) {
    
    try {
      var apiData = await axios(`${URL}articles`);
      const page = apiData.data;
      dispatch({ type: GET_ARTICLES, payload: page });
      
    } catch(error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    }
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

export const getAllFavs = async(id, dispatch) => {
  try {
    const { data } = await axios.get(`${URL}fav/${id}`);
    dispatch({ type: GET_ALL_FAVS , payload: data.articles });
  
  } catch(error) {
    dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
  }
};

export const addFav = async(userAndArticleId, dispatch) => {
  try {
    const { data } = await axios.post(`${URL}fav`, userAndArticleId);
    dispatch({ type: ADD_FAV, payload: data });

  } catch(error) {
    dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
  }
};

export const removeFav = async(userAndArticleId, dispatch) => {
  try {
    await axios.delete(`${URL}fav`, {data: userAndArticleId});
    dispatch({ type: REMOVE_FAV, payload: userAndArticleId.articleId });
  
  } catch(error) {
    dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
  }
};

export const getAllProducts = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`${URL}articles`);
      const products = apiData.data;
      dispatch({ type: GET_ALL_PRODUCTS, payload: products });
      
    } catch(error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    }
  };
};

export const getArticlesByQuery = (name) => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${URL}articles`);
      const payload = response.data;
      
      return dispatch({
        type: GET_ARTICLES_BY_QUERY,
        payload,
      });
    };

  } catch(error) {
    dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
  } 
};

export const filterSearchBar = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}articles?${name ? `name=${name}` : ``}`);
      const payload = response.data;
      return dispatch({
        type: FILTER_SEARCHBAR,
        payload,
      });
      
    } catch (error) {
      return dispatch({
        type: FILTER_SEARCHBAR,
        payload: { articlesFounded: [] },
      });
    }
  };
};

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${URL}articlefinder/?id=${id}`);

      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    
    } catch(error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    } 
  };
}

export function resState() {
  return {
    type: RES_STATE,
  };
}

export const productdesactivate = (id, active) => {
  try {
    return async function (dispatch) {
      const body = { active };
      const apiData = await axios.put(`${URL}articles/${id}`, body);
      const product = apiData.data;
      dispatch({ type: GET_PRODUCT_DESACTIVATE, payload: product });
      dispatch({ type: MESSAGE, payload: 'The product was deactivated. You can look for it in the "Out to sale" section' })
    };
  } catch(error) {
    dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
  }
};

export const updateProduct = (body) => {
  try {
    return async function (dispatch) {
      const apiData = await axios.put(`${URL}articles`, body);
  
      const product = apiData.data;
      dispatch({ type: UPDATE_PRODUCT, payload: product });
      dispatch({ type: MESSAGE, payload: 'Successfully updated!' })
    };
  } catch(error) {
    dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
  }
};

export const addToMercadoPago = (items) => {
  return (dispatch, getState) => {
    try {
      const { users, cart } = getState(); // Obtener userId y cartId desde el estado global de Redux

      const itemsWithAdditionalData = items.map((item) => ({
        ...item,
        users: users,
        cart: cart,
      }));
  
      dispatch({
        type: "ADD_TO_MERCADO_PAGO",
        payload: itemsWithAdditionalData,
      });
    } catch(error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    }
  };
};

export const createPayment = (items, email) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(`${URL}login`, { email })
      //const { userId, cart } = getState(); // Obtener userId y cartId desde el estado global de Redux
      //const { cartArticles } = getState(); // Obtener los artículos del carrito del estado global
  
      const requestData = {
        userId:data.id
      };

      axios
        .post(`${URL}mercadoPago`, requestData)
        .then((response) => {
          const paymentLink = response.data.url;
          dispatch(setPaymentLink(paymentLink));
        })
        .catch((error) => {
          console.log("Error al crear el pago:", error);
        });
        
    } catch(error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    }
  }
};

export const setPaymentLink = (paymentLink) => {
  return {
    type: SET_PAYMENT_LINK,

    payload: paymentLink,
  };
};

export const addProduct = (body) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.post(`${URL}articles`, body);
      const product = apiData.data;
      dispatch({ type: ADD_PRODUCT, payload: product });
      dispatch({ type: MESSAGE, payload: 'Successfully created!' })
    
    } catch (error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    }
  };
};

export const redirectSignUp = (dispatch) => {
  dispatch({ type: SIGN_UP, payload: false });
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const updateQuantity = (productId, newQuantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      productId,
      newQuantity,
    },
  };
};

export const increaseQuantity = (productId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: productId,
  };
};

export const clearMessage = (dispatch) => {
  dispatch({ type: CLEAR_MESSAGE });
};
