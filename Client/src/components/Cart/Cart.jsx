import { React, useState } from "react";
import { Box, Button, Heading, UnorderedList, ListItem, Image, Container, Divider, Center, background } from "@chakra-ui/react";
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
  const [Count, setConut] = useState({
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
        size: items.size,
      }));
      console.log(fullCart);
      dispatch(addToMercadoPago(mercadoPagoItems));
      const result = await dispatch(createPayment(user));
      saveLocalStorage([]);
      if (result === "success") {
        navigate("/");
        dispatch(updateProduct(Count));
      }
    } catch (error) {
      setPaymentError(true);
    }
  };

  return (
    <Container maxW="container.xl" display={"flex"} height={"container.xl"} flexDir={"column"} pt={120}>
      <Heading margin={10}>- Shopping Cart -</Heading>
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
                w={1100}
                h={150}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box marginRight={"100px"} display={"flex"} alignItems={"center"}>
                    <Image src={item.image} alt={item.name} width="100px" />
                  </Box>

                  <Box display="flex" justifyContent="center" alignItems="center" fontSize={"20px"} fontWeight={"bold"} w={300}>
                    {item.name}
                  </Box>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" fontSize={"18px"}>
                  Size: {item.type === "shoes" ? item.shoeSize : item.size}
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" marginRight={"10px"}>
                  <Button background="red.400" size="sm" ml={2} marginRight={2} onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </Button>

                  <Box display="flex" justifyContent="center" alignItems="center" fontWeight={"bold"} fontSize={"16px"} p={"5px"}>
                    {item.quantity}
                  </Box>

                  <Button background="blue.400" size="sm" ml={2} marginRight={3} onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </Button>

                  <Button background="red" color={originalColors.white} size="sm" ml={2} onClick={() => handleRemoveFromCart(item.id)}>
                    Delete
                  </Button>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" fontWeight={"bold"} fontSize={"18px"} marginRight={"30px"}>
                  <p> U$S {item.price} </p>
                </Box>
              </ListItem>
            ))
          )}

          <Center height="50px">
            <Divider orientation="horizontal" />
          </Center>
        </UnorderedList>

        <Box margin={"40px"} p={"5px"} display={"flex"} flexDir={"column"} justifyContent={"space-evenly"} color={originalColors.darkgrey}>
          <Box
            bg={"white"}
            borderRadius={10}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"3xl"}
            h={130}
            fontWeight={"bold"}
          >
            Total: ${calculateTotal()}
          </Box>

          <Box margin={"5px"}>
            {paymentLink ? (
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                Pay
              </a>
            ) : (
              <Box>
                <Button
                  isDisabled={!user || !fullCart.length}
                  color={originalColors.darkgrey}
                  onClick={handlePayment}
                  w={200}
                  border={"none"}
                  bg={"green.300"}
                  h={50}
                  fontSize={20}
                  marginBottom={"5px"}
                  _hover={{ background: "green.200" }}
                >
                  Make payment
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
