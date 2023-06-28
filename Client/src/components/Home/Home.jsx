import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { Box } from "@chakra-ui/react";
import { getArticles } from "../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserId } from "../../redux/actions/actionsUsers";
// import { addToCart } from "../../redux/actions/cartActions";

const Home = () => {
  //no me trae el estado actualizado... no se si está pisando el estado

  const dispatch = useDispatch();
  let { user, isAuthenticated } = useAuth0();
  console.log(user);
  //Pregunto si está autenticado y si lo está, le paso el usuario al back para que me lo agregue a la base de datos

  if (isAuthenticated) {
    dispatch(getUserId(user));
    // dispatch(addToCart(userId));
  }

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <Box>
      <Filters />
      <CardContainer />
    </Box>
  );
};

export default Home;
