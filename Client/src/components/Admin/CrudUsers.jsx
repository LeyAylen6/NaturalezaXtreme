import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box, Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
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
    <Container maxW="container.xl" centerContent bg={`url()`} backgroundSize={"cover"} pt={40} height={"container.xl"}>
      <TableContainer maxW="container.xl" rounded="md" justifyContent="rigth" alignItems="center">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Button as={Link} to="/admin" colorScheme="cyan" size="lg" variant="solid" m="6">
            Back
          </Button>
          <Button as={Link} to="/crudProduct" colorScheme="orange" size="lg" variant="solid" m="6">
            Product
          </Button>
          <Button as={Link} to="/FormProduct" colorScheme="blue" size="lg" variant="solid" m="6">
            New user
          </Button>
        </Box>
        <Table>
          <Thead>
            <TableCaption fontSize={"24px"} >List of users</TableCaption>
            <Tr bg="gray.100" border="1px" borderColor="gray.300" p="6" m="6">
              <Th>Username</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((user) => (
              <Tr key={user.id}>
                <Td
                  maxWidth="400px"
                  fontSize="18px"
                  fontWeight={"bold"}
                  wordBreak="break-all"
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  textOverflow={"ellipsis"}
                >
                  {user.name}
                </Td>
                <Td
                  maxWidth="400px"
                  fontSize="18px"
                  fontWeight={"bold"}
                  wordBreak="break-all"
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  textOverflow={"ellipsis"}
                >
                  {user.email}
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr bg="gray.100" border="1px" borderColor="gray.300" p="6" m="6">
              <Th>Username</Th>
              <Th>Email</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CrudUsers;
