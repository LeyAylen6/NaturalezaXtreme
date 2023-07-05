export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";
export const GET_CART = "GET_CART";
export const GET_PENDING_CART = "GET_PENDING_CART";
export const MESSAGE = "MESSAGE"

import axios from "axios";
const URL = "http://localhost:3001/";


//se puede borrar?
export const removeFromCart = (id) => {
  return { type: REMOVE_FROM_CART, payload: id };
};

export const emptyCart = (id) => {
  return { type: EMPTY_CART, payload: id };
};

export const getCartById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}shoppingcart/reviews/${id}`);
    const cartById = response.data;
    
    dispatch({
      type: GET_CART,
      payload: cartById,
    });

  } catch (error) {
    
    if (error.response && error.response.data === "There are no products in the cart") {
      dispatch({
        type: GET_CART,
        payload: error.response.data,
      });
    
    } else {
      dispatch({
        type: GET_CART,
        payload: "An error occurred while fetching the cart.",
      });

      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    }
  }
};

export const getPendingCart = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`${URL}shoppingcart?userId=${id}&status=pending`);
      const pendingCart = apiData.data;
      dispatch({ type: GET_PENDING_CART, payload: pendingCart });
    
    } catch(error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    }
  };
};


