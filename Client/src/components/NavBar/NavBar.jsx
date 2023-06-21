import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Box, Stack, HStack, Img } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        width="1280px"
        bgGradient="linear(to-r,#16141c,#6c6f78)"
        spacing={30}
        padding={"10px"}
        alignItems={"center"}
        fontSize={"20px"}
      >
        <Img src={logo} alt="logo" maxHeight={"75px"}></Img>
        <Box
          bg={"transparent"}
          marginLeft={"50px"}
          border={"none"}
          color={"white"}
        >
          <Link to="/">Products</Link>
        </Box>
        <Box bg={"transparent"} color={"white"}>
          <Link to="/aboutus">About</Link>
        </Box>
        <Box bg={"transparent"} color={"white"}>
          <Link to="/favorites">Favorite</Link>
        </Box>
       
        <Box bg={"transparent"} color={"white"} padding={"20px"}>
          <SearchBar />
        </Box>
        <Box bg={"transparent"} color={"white"}>
          <Link to="/cart">Cart</Link>
        </Box>
        <HStack spacing={10}>
          <Box bg={"transparent"} color={"white"} paddingLeft={"10px"}>
            <Link to="/admin">Admin</Link>
          </Box>
          <Box bg={"transparent"} color={"white"}>
            <Link to="/login-signup">Login / Sign Up</Link>
          </Box>
          <Box bg={"transparent"} color={"white"}>
            <Link to="/mercadoPago">Mercado Pago</Link> 
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
};

export default NavBar;
