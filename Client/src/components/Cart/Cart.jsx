import React, { useState, useEffect } from 'react';
import { Box, Heading, UnorderedList, ListItem, Button} from "@chakra-ui/react";
import style from '../Cart/Cart.module.css';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Cargar el carrito desde el Local Storage al cargar el componente
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  // Guardar el carrito en el Local Storage cuando se actualice
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Función para modificar la cantidad de un producto en el carrito
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Función para calcular el total de los productos en el carrito
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <Box className={style.cart}>
      <Heading as="h2" size="lg" textAlign="left" px={4} p={4} bgGradient="linear(to-r,#16141c,#6c6f78)" color="white" className={style.shopping}>
        Shopping Cart
      </Heading>
      <UnorderedList>
        {cartItems.length === 0 ? (
          <Heading fontSize="14px">No tienes productos en el carrito</Heading>
        ) : (
          cartItems.map((item) => (
            <ListItem key={item.id} mb={2}>
              {item.name} - Cantidad: {item.quantity}
              <Button
                colorScheme="blue"
                size="sm"
                ml={2}
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
              <Button
                colorScheme="red"
                size="sm"
                ml={2}
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <Button
                colorScheme="red"
                size="sm"
                ml={2}
                onClick={() => removeFromCart(item.id)}
                className={style.eliminar}
              >
                Eliminar
              </Button>
            </ListItem>
          ))
        )}
      </UnorderedList>
      <Box
        mt={4}
        className={style.total}
        color="white"
        position="absolute"
        width="392px"
        height="121px"
        left="955px"
        top="291px"
        bg="#2C2C2C"
      >
        Total: ${calculateTotal()}
      </Box>
    </Box>
  );
};

export default Cart;

