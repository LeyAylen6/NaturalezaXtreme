import {
	UPDATE_PRODUCT,
	ADD_FAV,
	REMOVE_FAV,
	GET_ALL_PRODUCTS,
	GET_ARTICLES_BY_QUERY,
	FILTER_SEARCHBAR,
	GET_DETAIL,
	RES_STATE,
	GET_PRODUCT_DESACTIVATE,
	SET_PAYMENT_LINK,
	ADD_PRODUCT,
	GET_ARTICLE_ID,
	GET_ARTICLES,
	NEXT_PAGE,
	PREV_PAGE,
	SIGN_UP,
	INCREASE_QUANTITY,
	DECREASE_QUANTITY
} from "../actions/actions";
import { GET_USERS } from "../actions/actionsUsers";
import { POST_USERS } from "../actions/actionsUsers";
import { FILTER_COMBINATED } from "../actions/actionFilters";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
	GET_CART,
} from "../actions/cartActions";

const initialState = {
	users: [],
	myFavorites: [],
	allProducts: [],
	detail: [],
	articleById: {},
	paymentLink: null,
	signUp: true,
	articles: [],
	cartArticles: [],
	cart: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FILTER_COMBINATED:
			return {
				...state,
				articles: action.payload,
			};
		case FILTER_SEARCHBAR:
			return {
				...state,
				articles: action.payload,
			};
		case GET_ARTICLES_BY_QUERY:
			return {
				...state,
				allProducts: action.payload,
			};
		case GET_ALL_PRODUCTS:
			return {
				...state,
				allProducts: action.payload,
			};
		case ADD_FAV:
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
			};
		case GET_USERS:
			return {
				...state,
				users: action.payload,
			};
		case UPDATE_PRODUCT:
			return {
				...state,
				articleById: action.payload,
			};

		case REMOVE_FAV:
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(product) => product.id != action.payload
				),
			};
		case GET_PRODUCT_DESACTIVATE:
			return {
				...state,
			};
		case GET_ARTICLES:
			return {
				...state,
				articles: action.payload,
			};
		case NEXT_PAGE:
			return {
				...state,
				articles: action.payload,
			};
		case PREV_PAGE:
			return {
				...state,
				articles: action.payload,
			};

		case REMOVE_FAV:
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(product) => product.id != action.payload
				),
			};
		case GET_ARTICLE_ID:
			return {
				articleById: action.payload,
			};
		case GET_DETAIL:
			return {
				...state,
				detail: action.payload,
			};
		case RES_STATE:
			return {
				...state,
				detail: [],
			};

		case SET_PAYMENT_LINK:
			return {
				...state,
				paymentLink: action.payload,
			};

		case ADD_PRODUCT:
			return {
				...state,
			};
		case POST_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SIGN_UP:
			return {
				...state,
				signUp: action.payload,
			};
		case ADD_TO_CART:
			return {
				...state,
				cartArticles: [...state.cartArticles, action.payload],
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				cartArticles: [
					...state.cartArticles.filter(
						(article) => article.id != action.payload
					),
				],
			};
		case CLEAR_CART:
			return {
				...state,
				cartArticles: [],
			};

			case INCREASE_QUANTITY:
				return {
				  ...state,
				  cartArticles: state.cartArticles.map((item) => {
					if (item.id === action.payload) {
					  return {
						...item,
						quantity: item.quantity + 1
					  };
					}
					return item;
				  })
				};
			  case DECREASE_QUANTITY:
				return {
				  ...state,
				  cartArticles: state.cartArticles.map((item) => {
					if (item.id === action.payload && item.quantity > 1) {
					  return {
						...item,
						quantity: item.quantity - 1
					  };
					}
					return item;
				  })
				};
				case GET_CART: 
				return {
					...state,
					cart: action.payload
				}

		default:
			return { ...state };
	}
};

export default reducer;
