export const GET_USERS = "GET_USERS";
export const POST_USERS = "POST_USERS";
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
