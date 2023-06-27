import { React, useEffect, useState } from "react";
import { Box, Heading, UnorderedList, ListItem, Button, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPayment, setPaymentLink, addToMercadoPago } from "../../redux/actions/actions.js";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../redux/actions/actions";
import { getPendingCart } from "../../redux/actions/cartActions.js";

import { getUsers } from "../../redux/actions/actionsUsers.js";

const Cart = () => {
  const { cartArticles, userId, pendingCart } = useSelector((state) => state);
  // console.log("cartArticles", cartArticles);
  const dispatch = useDispatch();
  const paymentLink = useSelector((state) => state.paymentLink);
  const navigate = useNavigate();
  console.log("userid", userId);
  console.log("pendingCart", pendingCart);

  const [paymentError, setPaymentError] = useState(false);

  useEffect(() => {
    dispatch(getPendingCart(userId.id));
  }, [dispatch, userId.id]);

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // Función para incrementar la cantidad de un producto en el carrito
  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  // Función para decrementar la cantidad de un producto en el carrito
  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  // Función para calcular el total de los productos en el carrito
  const calculateTotal = () => {
    let total = 0;
    cartArticles.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // Función para finalizar la compra
  const handlePayment = async () => {
    try {
      const mercadoPagoItems = cartArticles.map((items) => ({
        name: items.name,
        price: items.price,
        quantity: items.quantity,
        getCartById,
        getUsers,
        size: items.size,
      }));
      dispatch(addToMercadoPago(mercadoPagoItems));
      const result = await dispatch(createPayment(mercadoPagoItems));
      if (result === "success") {
        navigate("/");
      }
    } catch (error) {
      setPaymentError(true);
    }
  };

  return (
    <Box border={"2px"}>
      <Heading>Shopping Cart</Heading>
      <UnorderedList>
        {cartArticles.article?.length === 0 ? (
          <Heading fontSize="14px">No tienes productos en el carrito</Heading>
        ) : (
          cartArticles.article?.map((item) => (
            <ListItem key={item.id} mb={2}>
              <Box border={"1px"} display={"flex"} justifyContent={"space-between"}>
                <Box>
                  <Image src={item.image} alt={item.name} width="100px" />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  {item.name} - Cantidad: {item.quantity}
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center">
                  <p> U$S: {item.price} </p>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button colorScheme="blue" size="sm" ml={2} onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </Button>
                  <Button colorScheme="red" size="sm" ml={2} onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </Button>
                  <Button colorScheme="red" size="sm" ml={2} onClick={() => handleRemoveFromCart(item.id)}>
                    Eliminar
                  </Button>
                </Box>
              </Box>
            </ListItem>
          ))
        )}

        <Box mt={4} color="white" bg="#2C2C2C" display={"flex"} justifyContent={"center"}>
          Total: ${calculateTotal()}
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
      </UnorderedList>
    </Box>
  );
};

export default Cart;
