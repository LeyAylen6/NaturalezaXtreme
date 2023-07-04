import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Box, Stack, HStack, Img, Button, useColorMode, Flex } from "@chakra-ui/react";
import logo from "../../assets/logo_nodemailer.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Profile/Profile";
import Logout from "../LogOut/Logout";
import Login from "../LoginandSignUp/Login/Login";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import MenuProfile from "../UserDashboard/MenuProfile/MenuProfile";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
  const userId = useSelector((state) => state.userId);
  const { isAuthenticated, user } = useAuth0();
  const { colorMode, toggleColorMode } = useColorMode();

  let admin;
  const userAdmin = () => {
    if (userId.rol === "admin") {
      admin = true;
    } else {
      admin = null;
    }
  };

  return (
    <Stack
      direction={"row"}
      bgGradient="linear(to-r,rgba(0,0,0,0.7),rgba(0,0,0,0.7))"
      // bg={colorMode === "light" ? "" : "gray.300"}
      spacing={30}
      padding={"10px"}
      alignItems={"center"}
      fontSize={"20px"}
      position={"fixed"}
      zIndex={"100"}
      width={"100%"}
    >
      <Box pl={5}>
        <Img src={logo} alt="logo" maxHeight={"75px"} width={350} borderRadius={10}></Img>
      </Box>
      <Box bg={"transparent"} marginLeft={"50px"} border={"none"} color={"white"}>
        <Link to="/">Products</Link>
      </Box>
      <Box bg={"transparent"} color={"white"}>
        <Link to="/aboutus">About</Link>
      </Box>
      <Box bg={"transparent"} color={"white"}>
        <Link to="/blog">Blog</Link>
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
          {userAdmin()}
          {admin !== null ? <Link to="/admin">Admin</Link> : null}
        </Box>

        {/* <Box display="flex" h={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <Button aria-label="Toggle Color Mode" onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </Box> */}

        <Box display={"flex"} justifyContent={"rigth"}>
          <Button size={"sm"} bg={"darkgray"} borderRadius={"10px"} onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </Box>

        <Box bg={"transparent"} color={"white"} paddingLeft={"10px"}>
          {isAuthenticated ? <Logout /> : <Login />}
        </Box>

        <Profile />

        {isAuthenticated && <MenuProfile />}
      </HStack>
    </Stack>
  );
};

export default NavBar;
