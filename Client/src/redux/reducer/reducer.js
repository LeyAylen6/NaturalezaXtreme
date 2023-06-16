import {
  ADD_FAV,
  REMOVE_FAV,
  GET_ALL_PRODUCTS,
  GET_ARTICLES_BY_QUERY,
  FILTER_SEARCHBAR,
} from "../actions/actions";

const initialState = {
  myFavorites: [],
  allProducts: [],
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
          (product) => product.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};
export default reducer;
