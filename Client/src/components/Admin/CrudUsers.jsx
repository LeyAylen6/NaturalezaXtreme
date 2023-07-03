import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box, Container } from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/actionsUsers";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

const CrudUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [userIdEditar, setUserIdEditar] = useState(null);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const handleEdit = (userId) => {
    setUserIdEditar(userId);
    setMostrarAlerta(true);
  };
  const cerrarAlerta = () => {
    setMostrarAlerta(false);
  };
  const confirmarEdicion = () => {
    //Acá iría un dispatch

    cerrarAlerta();
    navigate(`/editUser/`);
  };
  return (
    <Container maxW="container.xl" centerContent bg={`url()`} backgroundSize={"cover"}>
      <TableContainer maxW="container.xl" m="4" p="4" rounded="md" justifyContent="rigth" alignItems="center">
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
                <Td>
                  <ButtonGroup size="md" variant={"outline"}>
                    <Button colorScheme="green" onClick={handleEdit}>
                      Edit
                    </Button>
                    <Button colorScheme="red">Delete</Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr bg="gray.100" border="1px" borderColor="gray.300" p="6" m="6">
              <Th>Username</Th>
              <Th>Email</Th>
              <Th display={"flex"} justifyContent={"center"}>
                Actions
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <AlertDialog isOpen={mostrarAlerta} leastDestructiveRef={null} onClose={cerrarAlerta}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              confirm edition
            </AlertDialogHeader>
            <AlertDialogBody>Are you sure you want to edit this product?</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={confirmarEdicion}>
                Edit
              </Button>
              <Button onClick={cerrarAlerta} ml={3}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default CrudUsers;
