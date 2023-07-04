import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Container } from "@chakra-ui/react";
import Stadistics from "./Statistics";
const Admin = () => {
  return (
    <Container>
      <Box
        bg={"transparent"}
        margin={"30px"}
        border={"1px"}
        color={"black"}
        fontSize={"20px"}
        padding={"10px"}
        width={"200px"}
        height={"100px"}
        borderRadius={"10px"}
      >
        <Link to="/crudProduct">Products</Link>
      </Box>
      <Box
        bg={"transparent"}
        margin={"30px"}
        border={"1px"}
        color={"black"}
        fontSize={"20px"}
        padding={"10px"}
        width={"200px"}
        height={"100px"}
        borderRadius={"10px"}
      >
        <Link to="/crudUsers">Users</Link>
      </Box>
      <Box
        bg={"transparent"}
        margin={"30px"}
        border={"1px"}
        color={"black"}
        fontSize={"20px"}
        padding={"10px"}
        width={"200px"}
        height={"100px"}
        borderRadius={"10px"}
      >
        <Link to="/blogEditor">Blog</Link>
      </Box>
      <Box><Stadistics/></Box>
    </Container>
  );
};

export default Admin;
