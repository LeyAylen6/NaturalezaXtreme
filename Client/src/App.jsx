import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Loginsingup from "./components/LoginandSignUp/Loginsignup";
import Favorites from "./components/Favorites/Favorites";
import Admin from "./components/Admin/Admin";
function App() {
  return (
    <ChakraProvider>
      <Box>
        <NavBar />
        <Routes>
          <Route path="/login-signup" element={<Loginsingup />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
