import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { ChakraProvider } from "@chakra-ui/react";

const Home = () => {
  return (
    <ChakraProvider>
      <Filters />
      <CardContainer />
    </ChakraProvider>
  );
};

export default Home;
