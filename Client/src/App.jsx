<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Box, ChakraProvider, Text } from "@chakra-ui/react";
=======
import { Box, ChakraProvider } from "@chakra-ui/react";
>>>>>>> 4ad61c339322e7841ecd4cb6073e0acbd045c05c
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Loginsingup from "./components/LoginandSignUp/Loginsignup";
import Favorites from "./components/Favorites/Favorites";
import Admin from "./components/Admin/Admin";
import Detail from "./components/Detail/Detail";
import CrudProduct from "./components/Admin/CrudProduct";
import CrudUsers from "./components/Admin/CrudUsers";
import FormProduct from "./components/Admin/FormProduct";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Box>
          <NavBar />
          <Routes>
            <Route path="/login-signup" element={<Loginsingup />} />
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/crudProduct" element={<CrudProduct />} />
          <Route path="/crudUsers" element={<CrudUsers />} />
          <Route path="/formProduct" element={<FormProduct />} />
          </Routes>
        </Box>
      </Provider>
    </ChakraProvider>
     
  );
}

export default App;
