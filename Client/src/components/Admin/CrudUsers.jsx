import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box } from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/actionsUsers";

const CrudUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <TableContainer
      maxW="container.xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      m="4"
      bg="green.50"
      rounded="md"
      justifyContent="rigth"
      alignItems="center"
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Button colorScheme="cyan" size="lg" variant="solid" m="6">
          <Link to="/admin">Back</Link>
        </Button>
        <Button colorScheme="orange" size="lg" variant="solid" m="6">
          <Link to="/crudProduct">Product</Link>
        </Button>
        <Button colorScheme="blue" size="lg" variant="solid" m="6">
          <Link to="/FormProduct">New user</Link>
        </Button>
      </Box>
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
          {users?.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <ButtonGroup size="md" variant={"solid"}>
                  <Button colorScheme="green">Edit</Button>
                  <Button colorScheme="red">Delete</Button>
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
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
