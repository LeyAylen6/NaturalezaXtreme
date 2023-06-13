import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "./NavBar.module.css";
import { Box, Stack, HStack } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        width="1280px"
        bgGradient="linear(to-r,#16141c,#6c6f78)"
        spacing={100}
        padding={"10px"}
        alignItems={"center"}
        fontSize={"20px"}
      >
        <Box
          bg={"transparent"}
          marginLeft={"10px"}
          border={"none"}
          color={"white"}
        >
          <Link to="/">Products</Link>
        </Box>
        <Box bg={"transparent"} color={"white"}>
          <Link to="/aboutus">About</Link>
        </Box>
        <Box bg={"transparent"} color={"white"}>
          <Link to="/favorite">Favorite</Link>
        </Box>
        <Box bg={"transparent"} color={"white"}>
          <Link to="/cart">Cart</Link>
        </Box>
        <Box bg={"transparent"} color={"white"}>
          <SearchBar />
        </Box>
        <HStack>
          <Box bg={"transparent"} color={"white"}>
            <Link to="/login">Login</Link>
          </Box>
          <Box bg={"transparent"} color={"white"}>
            <Link to="/signUp">Sign Up</Link>
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
};

export default NavBar;
