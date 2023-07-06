import {
  UPDATE_PRODUCT,
  GET_ALL_FAVS,
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
  // INCREASE_QUANTITY,
  // DECREASE_QUANTITY,
  CLEAR_MESSAGE,
  MESSAGE,
  GET_COUNT_ARTICLES,
  GET_POSTS,
  GET_CATEGORIES,
  GET_PURCHASED,
} from "../actions/actions";

import { GET_USERS, POST_USERS, USER_ID } from "../actions/actionsUsers";
import { FILTER_COMBINATED } from "../actions/actionFilters";
import { GET_CART, GET_PENDING_CART } from "../actions/cartActions";

const initialState = {
  users: [],
  userId: {},
  myFavorites: [],
  allProducts: [],
  detail: {},
  articleById: {},
  paymentLink: null,
  signUp: true,
  articles: [],
  cart: [],
  pendingCart: [],
  purchasedArticles: [],
  page: 1,
  message: "",
  articleCount: [],
  posts: [],
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ID:
      return {
        ...state,
        userId: action.payload,
      };

    case FILTER_COMBINATED:
      return {
        ...state,
        articles: action.payload,
        page: 1,
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

    case GET_ALL_FAVS:
      return {
        ...state,
        myFavorites: action.payload,
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
        myFavorites: state.myFavorites.filter((product) => product.id != action.payload),
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
        page: state.page + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        articles: action.payload,
        page: state.page - 1,
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
        allProducts: [...state.allProducts, action.payload],
      };

    case GET_PURCHASED:
      return {
        ...state,
        purchasedArticles: action.payload,
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

    // case ADD_TO_CART:
    //   return {
    //     ...state,
    //     cartArticles: [...state.cartArticles, action.payload],
    //   };

    // case REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cartArticles: [...state.cartArticles.filter((article) => article.id != action.payload)],
    //   };

    // case EMPTY_CART:
    //   return {
    //     ...state,
    //     cartArticles: [],
    //   };

    // case INCREASE_QUANTITY:
    //   return {
    //     ...state,
    //     cartArticles: state.cartArticles.map((item) => {
    //       if (item.id === action.payload) {
    //         return {
    //           ...item,
    //           quantity: item.quantity + 1,
    //         };
    //       }
    //       return item;
    //     }),
    //   };

    // case DECREASE_QUANTITY:
    //   return {
    //     ...state,
    //     cartArticles: state.cartArticles.map((item) => {
    //       if (item.id === action.payload && item.quantity > 1) {
    //         return {
    //           ...item,
    //           quantity: item.quantity - 1,
    //         };
    //       }
    //       return item;
    //     }),
    //   };

    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case GET_PENDING_CART:
      return {
        ...state,
        pendingCart: action.payload,
      };

    case MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    case GET_COUNT_ARTICLES:
      return {
        ...state,
        articleCount: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
