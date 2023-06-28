import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { Box } from "@chakra-ui/react";
import { getAllFavs, getArticles } from "../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserId } from "../../redux/actions/actionsUsers";
// import { addToCart } from "../../redux/actions/cartActions";

const Home = () => {
  //no me trae el estado actualizado... no se si está pisando el estado
  const userId = useSelector(state => state.userId)
  const dispatch = useDispatch();
  let { user, isAuthenticated } = useAuth0();
  //Pregunto si está autenticado y si lo está, le paso el usuario al back para que me lo agregue a la base de datos

  useEffect(() => {
    dispatch(getArticles());
    if (isAuthenticated) {
      getAllFavs(userId.id, dispatch)
      getUserId(user, dispatch);
      // dispatch(addToCart(userId));
    }
  }, []);

  return (
    <Box>
      <Filters />
      <CardContainer />
    </Box>
  );
};

export default Home;
