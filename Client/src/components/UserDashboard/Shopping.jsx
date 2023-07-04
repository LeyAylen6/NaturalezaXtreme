import {
  Container,
  CardBody,
  HStack,
  Progress,
  Divider,
  VStack,
  Avatar,
  Heading,
  TableContainer,
  TableCaption,
  Thead,
  Th,
  Card,
  Table,
  Tr,
  Td,
  Tbody,
  Tfoot,
  Box,
  Button,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartById, getPendingCart } from "../../redux/actions/cartActions";
import { useAuth0 } from "@auth0/auth0-react";
import Rating from "../Rating/Rating";
import { originalColors } from "../../theme/palette";

const Shopping = () => {
  const cart = localStorage.getItem("cart");
  const cartCompleted = useSelector((state) => state.pendingCart);

  const cartParsed = JSON.parse(cart);

  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <Box p={40} height={"container.xl"}>
      <Flex flexWrap="wrap" gap={4}>
        {cartParsed?.map((article, index) => {
          return (
            <Box key={index} pt={5}>
              <Card pt={4} justifyContent={"center"} boxShadow={"md"} _hover={{ boxShadow: "dark-lg", cursor: "pointer" }}>
                <HStack>
                  <Avatar src={article.image} m={2} boxSize={200} />

                  <Heading maxW={200} fontSize={20} pb={10} pt={5}>
                    {article.name}
                  </Heading>
                </HStack>

                {article.commented ? (
                  <Container bg="green.200">Is commented</Container>
                ) : (
                  <Button bg="blue.400" borderRadius={0}>
                    Add comment
                  </Button>
                )}
              </Card>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
export default Shopping;
