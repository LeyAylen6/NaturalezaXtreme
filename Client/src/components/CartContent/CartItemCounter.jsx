import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Button, Box } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
const CartItemCounter = ({ product }) => {
  const { cart, setCart, addCart } = useContext(dataContext);
  const decrese = () => {
    const productRepeat = cart.find((item) => item.id === product.id);
    productRepeat.quantity > 1 &&
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quantity: productRepeat.quantity - 1 } : item)));
  };
  return (
    <Box>
      <Button onClick={decrese}>➖</Button>
      <Button>{product.quantity}</Button>
      <Button onClick={() => addCart(product)}>➕</Button>
    </Box>
  );
};

export default CartItemCounter;
