import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Container } from "@chakra-ui/react";

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
        <Link to="/CrudProduct">Products</Link>
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
        <Link to="/CrudUsers">Users</Link>
      </Box>
    </Container>
  );
};

export default Admin;
