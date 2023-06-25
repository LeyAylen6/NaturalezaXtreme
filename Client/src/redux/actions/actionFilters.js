import axios from "axios";

export const FILTER_COMBINATED = "FILTER_COMBINATED";

export const filterCombinated = ({ gender, type, color,order }) => {
  return async function (dispatch) {
    const apiData = await axios(
      `http://localhost:3001/articles?gender=${gender}&type=${type}&color=${color}&order=${order}`
    );

    const articleFiltered = apiData.data;
    dispatch({ type: FILTER_COMBINATED, payload: articleFiltered });
  };
};
