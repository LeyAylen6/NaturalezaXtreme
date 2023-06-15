import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Button, ButtonGroup } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../redux/actions/actions/getAllProducts";

const CrudProduct = () => {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);

  // useEffect(() => {
  //   // dispatch(getAllProducts());
  // }, [dispatch]);

  return (
    <TableContainer
      maxW="container.xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p="6"
      m="6"
      bg="white"
      rounded="md"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Button colorScheme="blue" size="lg" variant="solid" m="6">
          <Link to="/FormProduct">New product</Link>
        </Button>
      </Box>
      <Table>
        <Thead>
          <TableCaption fontSize={"24px"}>List of products in store</TableCaption>
          <Tr bg="gray.100" border="1px" borderColor="gray.300" p="6" m="6">
            <Th>Image</Th>
            <Th>Product</Th>
            <Th>description</Th>
            <Th>price</Th>
            <Th>stock</Th>
            <Th display={"flex"} justifyContent={"center"}>
              Actions
            </Th>
          </Tr>
        </Thead>
        {/* <Tbody>
          <Tr>
            <Td>
              <Box w="70px" h="45px" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <img src="https://bit.ly/2Z4KKcF" alt="imagen" width="100%" height="100%" />
              </Box>
            </Td>
            <Td>Camisa</Td>
            <Td>Camisa de algodon</Td>
            <Td>1000</Td>
            <Td>10</Td>
            <Td>
              <ButtonGroup size="md" variant={"solid"}>
                <Button colorScheme="yellow">View</Button>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Box w="70px" h="45px" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <img src="https://bit.ly/2Z4KKcF" alt="imagen" width="100%" height="100%" />
              </Box>
            </Td>
            <Td>Zapatilla</Td>
            <Td>Zapatilla trekking</Td>
            <Td>5000</Td>
            <Td>10</Td>
            <Td>
              <ButtonGroup size="md">
                <Button colorScheme="yellow">View</Button>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Box w="70px" h="45px" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <img src="https://bit.ly/2Z4KKcF" alt="imagen" width="100%" height="100%" />
              </Box>
            </Td>
            <Td>Campera</Td>
            <Td>Campera de nieve</Td>
            <Td>10000</Td>
            <Td>10</Td>
            <Td>
              <ButtonGroup size="md" variant={"solid"}>
                <Button colorScheme="yellow">View</Button>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Td>
          </Tr>
        </Tbody> */}
        <Tbody>
          {/* {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.description}</Td>
              <Td>{product.price}</Td>
              <Td>{product.stock}</Td>
            </Tr>
          ))} */}
          <Td>
            <ButtonGroup size="md" variant={"solid"}>
              <Button colorScheme="yellow">View</Button>
              <Button colorScheme="green">Edit</Button>
              <Button colorScheme="red">Delete</Button>
            </ButtonGroup>
          </Td>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Image</Th>
            <Th>Product</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Stock</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default CrudProduct;
