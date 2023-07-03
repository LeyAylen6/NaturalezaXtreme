import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Box, Stack, HStack, Img, Menu } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import Logout from "../LogOut/Logout";
import Login from "../LoginandSignUp/Login/Login";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import MenuProfile from "../UserDashboard/MenuProfile/MenuProfile";

const NavBar = () => { 
  const userId = useSelector(state => state.userId)
  const { isAuthenticated, user } = useAuth0();
 
  let admin 
  const userAdmin = () => {
    if (userId.rol === 'admin'){ admin = true } 
    else {
      admin = null;
    }
  } 

  return (
    <Stack
      direction={"row"}
      bgGradient="linear(to-r,#16141c,#6c6f78)"
      spacing={30}
      padding={"10px"}
      alignItems={"center"}
      fontSize={"20px"}
    >
      <Box  pl={5}>
        <Img src={logo} alt="logo" maxHeight={"75px"}></Img>
      </Box>
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

      <HStack spacing={10} ml="auto" pr={5}>
        <Box bg={"transparent"} color={"white"} padding={"20px"}>
          <SearchBar />
        </Box>
        <Box bg={"transparent"} color={"white"}>
          <Link to="/cart">
            <BsCart3 />
          </Link>
        </Box>
        <Box bg={"transparent"} color={"white"} paddingLeft={"10px"}>
          { userAdmin ?
          <Link to="/admin">Admin</Link> : null}
        </Box>
        <Box bg={"transparent"} color={"white"} paddingLeft={"10px"}>
          {isAuthenticated ? <Logout /> : <Login />}
        </Box>

        <Profile />
      
        { isAuthenticated &&  <MenuProfile/>}
      </HStack>
    </Stack>
  );
};

export default NavBar;
