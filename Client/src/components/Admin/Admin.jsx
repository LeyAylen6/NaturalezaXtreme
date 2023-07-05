import { Box, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Stadistics from "./Statistics";

const Admin = () => {
  return (
    <HStack>
      <VStack fontSize={36} pb={200} color={"rgb(102,110,110)"}  pl={20}>
        <Box borderBottom="2px solid rgb(155,155,155,0.2)" pr={2}>
          <Link to="/crudProduct">Products</Link>
        </Box>
        <Box borderBottom="2px solid rgb(155,155,155,0.2)" pr={8} pt={10}>
          <Link to="/crudUsers">Users</Link>
        </Box>
        <Box borderBottom="2px solid rgb(155,155,155,0.2)"pr={8} pt={10}>
          <Link to="/blogEditor">Blog</Link>
        </Box>
      </VStack>
      <Box color={"rgb(102,110,110)"}>
        <Stadistics></Stadistics>
      </Box>
    </HStack>
  );
};

export default Admin;
