import axios from "axios";

export const FILTER_COMBINATED = "FILTER_COMBINATED";
export const MESSAGE = "MESSAGE";
const URL = "https://servidor-naturextreme.onrender.com";
export const filterCombinated = ({ gender, type, color, order }) => {
  return async function (dispatch) {
    try {
      const apiData = await axios(
        `${URL}/articles?${gender ? `gender=${gender}&` : ``}${type ? `type=${type}&` : ``}${color ? `color=${color}&` : ``}${
          order ? `order=${order}` : ``
        }`
      );

      const articleFiltered = apiData.data;
      dispatch({ type: FILTER_COMBINATED, payload: articleFiltered });
    } catch (error) {
      dispatch({ type: MESSAGE, payload: error?.response?.data });
    }
  };
};
