import { React, useState } from "react";
import {
  Box,
  Button,
  Heading,
  UnorderedList,
  ListItem,
  Image,
  Container,
  Divider,
  Center,
  background,
  Text,
  Flex,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogHeader,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPayment, setPaymentLink, addToMercadoPago } from "../../redux/actions/actions.js";
import { getUsers } from "../../redux/actions/actionsUsers.js";
import { useAuth0 } from "@auth0/auth0-react";
import Stadistics from "../Admin/Statistics.jsx";
import { originalColors } from "../../theme/palette.js";
import { updateProduct } from "../../redux/actions/actions.js";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paymentLink = useSelector((state) => state.paymentLink);
  const article = useSelector((state) => state.detail);
  const [paymentError, setPaymentError] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [count, setConut] = useState({
    id: article.id,
    countSales: article.countSales + 1,
    active: article.active,
  });
  const [showAlert, setShowAlert] = useState(false);

  const { user } = useAuth0();

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

  const clearCartItems = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCartUpdated([]); // Actualiza el estado para forzar el renderizado
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
    if (fullCart[index].quantity > 1) {
      let increasedQuantity = modifiedCart[index].quantity - 1;
      fullCart[index].quantity = increasedQuantity;
      modifiedCart = fullCart;
      saveLocalStorage(modifiedCart);
    }
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
        size: items.size || items.shoeSize,
      }));
      console.log(fullCart);
      dispatch(addToMercadoPago(mercadoPagoItems));
      const result = await dispatch(createPayment(user));
      saveLocalStorage([]);
      if (result === "success") {
        navigate("/");
        dispatch(updateProduct(count));
      }
    } catch (error) {
      setPaymentError(true);
    }
  };
  const handlePay = () => {
    setShowAlert(true);
    handlePayment();
  };
  const cerrarAlerta = () => {
    setShowAlert(false);
  };
  const confirmarEdicion = () => {
    cerrarAlerta();
    clearCartItems();

    window.open(paymentLink);
  };

  return (
    <Container maxW="container.xl" display={"flex"} height={"container.xl"} alignItems={"center"} flexDir={"column"} pt={120}>
      <Heading color={"white"} fontSize={25} mb={5} bgColor={originalColors.darkgrey} w={"100vw"} p={5}>
        Shopping Cart
      </Heading>
      <Box display={"flex"}>
        <UnorderedList>
          {!fullCart?.length ? (
            <Heading fontSize="18px">No tienes productos en el carrito</Heading>
          ) : (
            fullCart?.map((item) => (
              <ListItem
                key={item.id}
                mb={2}
                display={"flex"}
                justifyContent={"space-evenly"}
                color={originalColors.darkgrey}
                bg={originalColors.white}
                borderRadius={15}
                gap={10}
                h={150}
                m={5}
                p={10}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <Image src={item.image} alt={item.name} h={"28"} />
                  </Box>

                  <Box display="flex" alignItems="center" fontSize={"20px"} fontWeight={"bold"} w={300}>
                    {item.name}
                  </Box>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" fontSize={"18px"}>
                  <Text fontWeight={"bold"} mr={2}>
                    Size
                  </Text>
                  <Text>{item.type === "shoes" ? item.shoeSize : item.size}</Text>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button background="red.400" size="sm" ml={2} onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </Button>

                  <Box display="flex" justifyContent="center" alignItems="center" fontWeight={"bold"} fontSize={"16px"} p={"5px"}>
                    {item.quantity}
                  </Box>

                  <Button background="blue.400" size="sm" onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </Button>

                  <Button background="red" color={originalColors.white} size="sm" ml={2} onClick={() => handleRemoveFromCart(item.id)}>
                    <DeleteIcon color={"white"} />
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" fontWeight={"bold"} fontSize={"18px"} w={20}>
                  <p> U$S {item.price} </p>
                </Box>
              </ListItem>
            ))
          )}

          <Center height="50px">
            <Divider orientation="horizontal" />
          </Center>
        </UnorderedList>

        <Box m={5} w={400}>
          <Flex
            bg={originalColors.darkgrey}
            p={5}
            direction={"column"}
            alignItems={"start"}
            color={originalColors.white}
            borderRadius={10}
            fontSize={"3xl"}
            mb={3}
          >
            <Text fontSize={18} fontWeight={"bold"}>
              Order overview
            </Text>
            <Text fontSize={18}>Total: ${calculateTotal()}</Text>
          </Flex>

          <Box>
            <Flex justifyContent={"end"}>
              <Button
                isDisabled={!user || !fullCart.length}
                color={originalColors.darkgrey}
                onClick={handlePay}
                w={200}
                ml={3}
                border={"none"}
                bg={"green.300"}
                h={"12"}
                fontSize={18}
                _hover={{ background: "green.200" }}
              >
                Proceed to payment
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <AlertDialog isOpen={showAlert} leastDestructiveRef={null} onClose={cerrarAlerta}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              confirm payment
            </AlertDialogHeader>
            <AlertDialogBody>Are you sure you want to pay?</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="green" onClick={confirmarEdicion}>
                Pay
              </Button>
              <Button onClick={cerrarAlerta} ml={3}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default Cart;



/* import { React, useState } from "react";
import { Box, Button, Heading, UnorderedList, ListItem, Image, Container, Divider, Center, background, Text, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPayment, setPaymentLink, addToMercadoPago } from "../../redux/actions/actions.js";
import { getUsers } from "../../redux/actions/actionsUsers.js";
import { useAuth0 } from "@auth0/auth0-react";
import Stadistics from "../Admin/Statistics.jsx";
import { originalColors } from "../../theme/palette.js";
import { updateProduct } from "../../redux/actions/actions.js";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paymentLink = useSelector((state) => state.paymentLink);
  const article = useSelector((state) => state.detail);
  const [paymentError, setPaymentError] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [count, setConut] = useState({
    id: article.id,
    countSales: article.countSales + 1,
    active: article.active,
  });
  const { user } = useAuth0();

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

  const clearCartItems = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCartUpdated([]); // Actualiza el estado para forzar el renderizado
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
    if (fullCart[index].quantity > 1) {
      let increasedQuantity = modifiedCart[index].quantity - 1;
      fullCart[index].quantity = increasedQuantity;
      modifiedCart = fullCart;
      saveLocalStorage(modifiedCart);
    }
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
        size: items.size || items.shoeSize,
      }));
      console.log(fullCart);
      dispatch(addToMercadoPago(mercadoPagoItems));
      const result = await dispatch(createPayment(user));
      //saveLocalStorage([]);
      if (result === "success") {
        navigate("/");
        dispatch(updateProduct(count));
      }
    } catch (error) {
      setPaymentError(true);
    }
  };

  return (
    <Container maxW="container.xl" display={"flex"} height={"container.xl"} alignItems={"center"} flexDir={"column"} pt={120}>
      <Heading color={"white"} fontSize={25} mb={5} bgColor={originalColors.darkgrey} w={"100vw"} p={5}>
        Shopping Cart
      </Heading>
      <Box display={"flex"}>
        <UnorderedList>
          {!fullCart?.length ? (
            <Heading fontSize="18px">No tienes productos en el carrito</Heading>
          ) : (
            fullCart?.map((item) => (
              <ListItem
                key={item.id}
                mb={2}
                display={"flex"}
                justifyContent={"space-evenly"}
                color={originalColors.darkgrey}
                bg={originalColors.white}
                borderRadius={15}
                gap={10}
                h={150}
                m={5}
                p={10}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <Image src={item.image} alt={item.name} h={"28"} />
                  </Box>

                  <Box display="flex" alignItems="center" fontSize={"20px"} fontWeight={"bold"} w={300}>
                    {item.name}
                  </Box>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" fontSize={"18px"}>
                  <Text fontWeight={"bold"} mr={2}>
                    Size
                  </Text>
                  <Text>{item.type === "shoes" ? item.shoeSize : item.size}</Text>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button background="red.400" size="sm" ml={2} onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </Button>

                  <Box display="flex" justifyContent="center" alignItems="center" fontWeight={"bold"} fontSize={"16px"} p={"5px"}>
                    {item.quantity}
                  </Box>

                  <Button background="blue.400" size="sm" onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </Button>

                  <Button background="red" color={originalColors.white} size="sm" ml={2} onClick={() => handleRemoveFromCart(item.id)}>
                    <DeleteIcon color={"white"} />
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" fontWeight={"bold"} fontSize={"18px"} w={20}>
                  <p> U$S {item.price} </p>
                </Box>
              </ListItem>
            ))
          )}

          <Center height="50px">
            <Divider orientation="horizontal" />
          </Center>
        </UnorderedList>

        <Box m={5} w={400}>
          <Flex
            bg={originalColors.darkgrey}
            p={5}
            direction={"column"}
            alignItems={"start"}
            color={originalColors.white}
            borderRadius={10}
            fontSize={"3xl"}
            mb={3}
          >
            <Text fontSize={18} fontWeight={"bold"}>
              Order overview
            </Text>
            <Text fontSize={18}>Total: ${calculateTotal()}</Text>
          </Flex>

          <Box>
            {paymentLink ? (
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                Pay
              </a>
            ) : (
              <Flex justifyContent={"end"}>
                <Button
                  isDisabled={!user || !fullCart.length}
                  color={originalColors.darkgrey}
                  onClick={clearCartItems}
                  border={"none"}
                  bg={"red.500"}
                  h={"12"}
                  fontSize={18}
                  _hover={{ background: "red.600" }}
                >
                  <DeleteIcon color={"white"} />
                </Button>
                <Button
                  isDisabled={!user || !fullCart.length}
                  color={originalColors.darkgrey}
                  onClick={handlePayment}
                  w={200}
                  ml={3}
                  border={"none"}
                  bg={"green.300"}
                  h={"12"}
                  fontSize={18}
                  _hover={{ background: "green.200" }}
                >
                  Proceed to payment
                </Button>
              </Flex>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart; */
