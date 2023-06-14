import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Loginsingup from "./components/LoginandSignUp/Loginsignup";
import Admin from "./components/Admin/Admin";
import Detail from "./components/Detail/Detail";
function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Routes>
        <Route path="/login-signup" element={<Loginsingup />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
