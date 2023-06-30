import CartElement from "./CartElement";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Box, Text } from "@chakra-ui/react";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  //condicional para el carrito si esta vacio con ternario

  return (
    <>
      {cart.length > 0 ? (
        <Box>
          <CartElement />
          <CartTotal />
        </Box>
      ) : (
        <Text>Tu carrito esta vacio</Text>
      )}
    </>
  );
};

export default CartContent;
