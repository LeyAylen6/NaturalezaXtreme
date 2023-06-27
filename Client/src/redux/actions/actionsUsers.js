export const GET_USERS = "GET_USERS";
export const POST_USERS = "POST_USERS";
export const USER_ID = "USER_ID";
import axios from "axios";

export const getUsers = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/user?id=${id}`);
    const users = apiData.data;
    dispatch({ type: GET_USERS, payload: users });
  };
};

export const createNewAccount = async(signuserData, dispatch) => {
  
  const response = await axios.post('http://localhost:3001/user', signuserData)
  
  try {
    const { signUp } = response.data;
    dispatch({ type: POST_USERS, payload: signUp })
    
  } catch(error) {
    const { signUp } = error.response.data;
    dispatch({ type: POST_USERS, payload: signUp})
  }
}

export const getUserId = (user) => {
  return async function (dispatch) {
    const apiData = await axios.post(`http://localhost:3001/login`, user);
    const userId = apiData.data;
    console.log(userId)
    dispatch({ type: GET_USERS, payload: userId });
  };
};