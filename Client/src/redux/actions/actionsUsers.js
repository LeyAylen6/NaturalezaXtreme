export const GET_USERS = "GET_USERS";

import axios from "axios";

export const getUsers = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/user");
    const users = apiData.data;
    dispatch({ type: GET_USERS, payload: users });
  };
};
