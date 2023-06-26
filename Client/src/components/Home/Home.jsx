import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { Box } from "@chakra-ui/react";
import { getArticles } from "../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

  let {user} = useAuth0();
  console.log(user)

  const dispatch = useDispatch();
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
