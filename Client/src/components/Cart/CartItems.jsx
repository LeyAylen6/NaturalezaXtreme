import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(storedCartItems);
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  console.log(totalQuantity);

  return <Text>{totalQuantity}</Text>;
};

export default CartItems;
