import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { Box } from "@chakra-ui/react";
import { getArticles } from "../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserId } from "../../redux/actions/actionsUsers";

const Home = () => {

  const userId = useSelector(state => state.userId)
  console.log(userId)
  //no me trae el estado actualizado... no se si está pisando el estado

  const dispatch = useDispatch();
  let { user, isAuthenticated } = useAuth0();
  
  if(isAuthenticated) {
    dispatch(getUserId(user))
  }
  
  useEffect(() => {
    dispatch(getArticles());
    
  }, [dispatch]);

  return (
    <Box>
      <Filters />
      <CardContainer />
    </Box>
  );
};

export default Home;
