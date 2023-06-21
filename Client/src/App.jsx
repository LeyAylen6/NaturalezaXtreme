import { Box, ChakraProvider } from "@chakra-ui/react";
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
import EditProduct from "./components/Admin/EditProduct";
import Cart from "./components/Cart/Cart";
import ProductOutOfSale from "./components/Admin/ProductOutOfSale";
import UserEdition from "./components/Admin/UserEdition";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import MercadoPago from "./components/MercadoPago/Mercadopago";
import Signup2 from "./components/LoginandSignUp/Signup2";
function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Box>
          <NavBar />
          <Routes>
            <Route path="/login-signup" element={<Loginsingup />} />
            <Route path="/signup" element={<Signup2/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/crudProduct" element={<CrudProduct />} />
            <Route path="/crudUsers" element={<CrudUsers />} />
            <Route path="/formProduct" element={<FormProduct />} />
            <Route path="/editProduct" element={<EditProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userEdition" element={<UserEdition />} />
            <Route path="/mercadoPago" element={<MercadoPago />} />
            <Route path="/productOutOfSale" element={<ProductOutOfSale />} />
          </Routes>
        </Box>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
