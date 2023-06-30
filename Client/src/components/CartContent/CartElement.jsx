import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPayment, setPaymentLink, addToMercadoPago } from "../../../src/redux/actions/actions.js";
import { getPendingCart, getCartById } from "../../redux/actions/cartActions.js";

import { getUsers } from "../../redux/actions/actionsUsers.js";
import { useAuth0 } from "@auth0/auth0-react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const CartElement = () => {
  let { user } = useAuth0();
  const { cart, deleteProduct } = useContext(dataContext);
  const dispatch = useDispatch();
  const paymentLink = useSelector((state) => state.paymentLink);
  console.log(paymentLink);
  const navigate = useNavigate();
  const [paymentError, setPaymentError] = useState(false);
  const [cartArticles, setCartArticles] = useState([]);

  // const deleteProduct = (id) => {
  //   const foundId = cart.find((item) => item.id === id);

  //   const newCart = cart.filter((item) => {
  //     return item !== foundId;
  //   });

  //   setCart(newCart);
  // };
  // Función para finalizar la compra
  const handlePayment = async () => {
    // console.log(cart);
    try {
      const mercadoPagoItems = cart.map((items) => ({
        name: items.name,
        price: items.price,
        quantity: items.quantity,
        getCartById,
        getUsers,
        size: items.size,
      }));
      console.log(mercadoPagoItems);
      // savelocalStorage();
      //Hasta acá la info viene bien, revisar en adelante
      // dispatch(addToMercadoPago(mercadoPagoItems));
      const result = await dispatch(createPayment(mercadoPagoItems, user.email));
      if (result === "success") {
        navigate("/");
      }
    } catch (error) {
      setPaymentError(true);
      console.log("estoy en el error");
    }
  };
  return (
    <Box>
      <Text fontSize={"48px"}>Shopping Cart</Text>
      <Box>
        {cart?.map((product) => (
          <Box border={"1px"} key={product.id}>
            <Image src={product.image} alt={product.name} width={"125px"} marginLeft={"25px"} />
            <Text>{product.name}</Text>
            <CartItemCounter product={product} />
            <Text>${product.price * product.quantity}</Text>
            <Text onClick={() => deleteProduct(product.id)}>❌</Text>
          </Box>
        ))}
      </Box>
      <Box>
        {paymentLink ? (
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            Pagar
          </a>
        ) : (
          <Box>
            <Button onClick={handlePayment}>Realizar pago</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartElement;
