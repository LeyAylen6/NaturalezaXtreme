import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Filters />
      <CardContainer />
    </Box>
  );
};

export default Home;
