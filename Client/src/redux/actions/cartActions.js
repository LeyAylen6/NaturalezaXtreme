export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (article) => {
	return { type: ADD_TO_CART, payload: article }
};

export const removeFromCart = (id) => {
	return { type: REMOVE_FROM_CART, payload: id }
};

export const clearCart = (id) => {
	return { type: CLEAR_CART, payload: id }
};