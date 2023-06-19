import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { Box } from "@chakra-ui/react";
import { getAllProducts } from "../../redux/actions/actions";

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <Box>
      <Filters />
      <CardContainer />
    </Box>
  );
};

export default Home;
