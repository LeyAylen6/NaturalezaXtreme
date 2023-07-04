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
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartById, getPendingCart } from "../../redux/actions/cartActions";
import { useAuth0 } from "@auth0/auth0-react";
import Rating from "../Rating/Rating";
import { originalColors } from "../../theme/palette";

const Shopping = () => {

  console.log(localStorage.getItem("cart"));
 
  const id = 1;
  const cart = useSelector((state) => state.getPendingCart);
  const cartParsed= JSON.parse(cart)
  
  const allArticles=useSelector((state)=>state.allArticles)
  console.log(cart);
  
  const dispatch = useDispatch();
  useEffect(() => {
    
  }, []);
  return (
    <HStack justifyContent={"center"}>
      <VStack justifyContent={"center"}>
        {cartParsed?.map((article, index) => {
          
         
          
          return (
            <Box key={index}>
                <HStack>

              <Card justifyContent={"center"}  boxShadow={"md"}
      _hover={{ boxShadow: "dark-lg", cursor: "pointer" }}>
                <HStack>
              <Avatar src={article.image} m={2} boxSize={200}/>

                <Heading maxW={200} fontSize={20} pb={10} pt={5}>{article.name}</Heading>
                </HStack>

                
                  {article.commented ? (
                    <Container  bg="green.200">
                      Is commented
                    </Container>
                  ) : (
                    <Button  bg="blue.400">
                      Add comment
                    </Button>
                  )}
                
              </Card>
              <Card pt={10}>
              
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                Your password was encrypted successfully
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Review Info</Th>
                </Tr>
               
              </Thead>
              <Tbody>
                <HStack>
                <Tr>
                  <Td>

                  </Td>
                  <Td>{article.commented}</Td>
                </Tr>

                </HStack>
                <Tr>
                  <Td>Password</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Card>

                </HStack>
            </Box>
          );
        })}
     
        
        
      </VStack>
    </HStack>
  );
};
export default Shopping;
