export const GET_USERS = "GET_USERS";
export const POST_USERS = "POST_USERS";
export const USER_ID = "USER_ID";
export const MESSAGE = "MESSAGE"
import axios from "axios";

export const getUsers = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/user?id=${id}`);
      const users = apiData.data;
      dispatch({ type: GET_USERS, payload: users });
    
    } catch(error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
    }
  };
};

export const createNewAccount = async (signuserData, dispatch) => {
  const response = await axios.post("http://localhost:3001/user", signuserData);

  try {
    const { signUp } = response.data;
    dispatch({ type: POST_USERS, payload: signUp });
  
  } catch (error) {
    const { signUp } = error.response.data;
    dispatch({ type: POST_USERS, payload: signUp });
    
    dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
  }
};

export const getUserId = async (user, dispatch) => {
  //mando todo el user de Auth0 y el back crea un usuario en la base de datos si no existe
  try {
    const apiData = await axios.post(`http://localhost:3001/login`, user);
    const userId = apiData.data;
    localStorage.setItem("userId", JSON.stringify(userId.id));  
    dispatch({ type: USER_ID, payload: userId });
  } catch (error) {
    dispatch({ type: MESSAGE, payload: error?.response?.data || error?.message })
  }
};
