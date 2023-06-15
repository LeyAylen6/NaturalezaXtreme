import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

const CrudUsers = () => {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(getUsers());
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
      <Table>
        <Thead>
          <TableCaption fontSize={"24px"}>List of users</TableCaption>
          <Tr bg="gray.100" border="1px" borderColor="gray.300" p="6" m="6">
            <Th>Username</Th>
            <Th>Email</Th>

            <Th display={"flex"} justifyContent={"center"}>
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>sebastián</Td>
            <Td>seba@gmail.com</Td>
            <Td>
              <ButtonGroup size="md" variant={"solid"}>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>Vanina</Td>
            <Td>vani@gmail.com</Td>
            <Td>
              <ButtonGroup size="md" variant={"solid"}>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>Franco</Td>
            <Td>fran@gmail.com</Td>
            <Td>
              <ButtonGroup size="md" variant={"solid"}>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>Julieta</Td>
            <Td>juli@gmail.com</Td>
            <Td>
              <ButtonGroup size="md" variant={"solid"}>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Td>
          </Tr>
          <Tr>
            <Td>Nicolás</Td>
            <Td>nico@gmail.com</Td>
            <Td>
              <ButtonGroup size="md" variant={"solid"}>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Td>
          </Tr>
        </Tbody>
        {/* <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>{product.description}</Td>
              <Td>{product.price}</Td>
              <Td>{product.stock}</Td>
            </Tr>
          ))}
        </Tbody> */}
        <Tfoot>
          <Tr>
            <Th>Username</Th>
            <Th>Email</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default CrudUsers;
