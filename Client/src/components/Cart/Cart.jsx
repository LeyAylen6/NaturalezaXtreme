import { React, useState } from "react";
import { Box, Heading, UnorderedList, ListItem, Button, Image, Container, Divider, Center } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPayment, setPaymentLink, addToMercadoPago } from "../../redux/actions/actions.js";
import { getUsers } from "../../redux/actions/actionsUsers.js";
import { useAuth0 } from "@auth0/auth0-react";
import Stadistics from "../Admin/Statistics.jsx";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paymentLink = useSelector((state) => state.paymentLink);
  const [paymentError, setPaymentError] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);

  const {user} = useAuth0()

  const fullCart = JSON.parse(localStorage.getItem("cart"));
  let modifiedCart = fullCart;

  console.log(fullCart);

  const saveLocalStorage = (modifiedCart) => {
    localStorage.setItem("cart", JSON.stringify(modifiedCart));
    setCartUpdated(!cartUpdated); // Actualiza el estado para forzar el renderizado
  };

  //Elimina el artículo del carrito
  const handleRemoveFromCart = (productId) => {
    modifiedCart = fullCart.filter((article) => article.id !== productId);
    saveLocalStorage(modifiedCart);
  };

  //Aumenta la cantidad de un artículo
  const handleIncreaseQuantity = (productId) => {
    const index = fullCart.findIndex((article) => article.id === productId);
    let increasedQuantity = modifiedCart[index].quantity + 1;
    fullCart[index].quantity = increasedQuantity;
    modifiedCart = fullCart;
    saveLocalStorage(modifiedCart);
  };

  //Disminuye la cantidad de un artículo
  const handleDecreaseQuantity = (productId) => {
    const index = fullCart.findIndex((article) => article.id === productId);
    if(fullCart[index].quantity > 1){let increasedQuantity = modifiedCart[index].quantity - 1;
    fullCart[index].quantity = increasedQuantity;
    modifiedCart = fullCart;
    saveLocalStorage(modifiedCart);}
  };

  // Función para calcular el total de los productos en el carrito
  const calculateTotal = () => {
    let total = 0;
    fullCart?.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // Función para finalizar la compra
  const handlePayment = async () => {
    try {
      const mercadoPagoItems = fullCart?.map((items) => ({
        userId: items.userId, 
        articleId: items.id,
        quantity: items.quantity,
        size: items.size,
      }));
      console.log(fullCart);
      dispatch(addToMercadoPago(mercadoPagoItems));
      const result = await dispatch(createPayment( user));
      saveLocalStorage([]);
      if (result === "success") {
        navigate("/");
      }
    } catch (error) {
      setPaymentError(true);
    }
  };

  return (
    <Container maxW="container.xl">
      <Box>
        <Heading>Shopping Cart</Heading>
        <Center height="50px">
          <Divider orientation="horizontal" />
        </Center>
        <UnorderedList>
          <Center height="50px">
            <Divider orientation="horizontal" />
          </Center>
          {!fullCart?.length ? (
            <Heading fontSize="14px">No tienes productos en el carrito</Heading>
          ) : (
            fullCart?.map((item) => (
              <ListItem key={item.id} mb={2}>
                <Center height="50px">
                  <Divider orientation="horizontal" />
                </Center>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box>
                    <Image src={item.image} alt={item.name} width="100px" />
                  </Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    {item.name} - Cantidad: {item.quantity}
                  </Box>


                <Box display="flex" justifyContent="center" alignItems="center">
                  Talle: {item.type === 'shoes' ? item.shoeSize :item.size}
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center">
                  <p> U$S: {item.price} </p>

                  <Box display="flex" justifyContent="center" alignItems="center">
                    <p> U$S: {item.price} </p>
                  </Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Button colorScheme="red" size="sm" ml={2} onClick={() => handleDecreaseQuantity(item.id)}>
                      -
                    </Button>
                    <Button colorScheme="blue" size="sm" ml={2} onClick={() => handleIncreaseQuantity(item.id)}>
                      +
                    </Button>
                    <Button colorScheme="red" size="sm" ml={2} onClick={() => handleRemoveFromCart(item.id)}>
                      Eliminar
                    </Button>
                  </Box>

                </Box>
              </ListItem>
            ))
          )}
          <Center height="50px">
            <Divider orientation="horizontal" />
          </Center>
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
    </Container>
  );
};

export default Cart;
