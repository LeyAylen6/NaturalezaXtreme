import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Box, Text } from "@chakra-ui/react";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <Box>
      <Text>Total: ${total}</Text>
    </Box>
  );
};

export default CartTotal;
