import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Loginsingup from "./components/LoginandSignUp/Loginsignup";
function App() {
  return (
    <ChakraProvider>
      <Box>
        <NavBar />
        <Routes>
          <Route path="/login-signup" element={<Loginsingup />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
