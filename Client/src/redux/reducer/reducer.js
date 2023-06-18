import {
	ADD_FAV,
	REMOVE_FAV,
	GET_ALL_PRODUCTS,
	GET_ARTICLES_BY_QUERY,
	FILTER_SEARCHBAR,
	GET_DETAIL,
	RES_STATE,
	GET_ARTICLE_ID,
	SET_PAYMENT_LINK
} from "../actions/actions";

const initialState = {
	myFavorites: [],
	allProducts: [],
	detail: [],
	articleById: {},
	paymentLink: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FILTER_SEARCHBAR:
			const filterArticles = state.allProducts;
			const filterFinish = filterArticles.filter((article) => {
				const name = article.name;
				if (name.includes(action.payload)) return article;
			});
			return {
				...state,
				allProducts: filterFinish,
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
			case 'SET_PAYMENT_LINK':
      return {
        ...state,
        paymentLink: action.payload,
      };

		default:
			return { ...state };
	}
};

export default reducer;
