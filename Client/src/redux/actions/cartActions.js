export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const GET_CART = "GET_CART"; 


export const addToCart = (article) => {
	return { type: ADD_TO_CART, payload: article }
};

export const removeFromCart = (id) => {
	return { type: REMOVE_FROM_CART, payload: id }
};

export const clearCart = (id) => {
	return { type: CLEAR_CART, payload: id }
};

export const getCartById = (id) => async (dispatch) => {
	try {
	  const response = await axios.get(`${URL}/shoppingcart/${id}`);
	  const cartById = response.data;
  
	  dispatch({
		type: GET_CART,
		payload: cartById,
	  });
} catch (error) {
  if (error.response && error.response.data === 'There are no products in the cart') {
	dispatch({
	  type: GET_CART,
	  payload: error.response.data,
	});
  } else {
	dispatch({
	  type: GET_CART,
	  payload: 'An error occurred while fetching the cart.',
	});
  }
}
};