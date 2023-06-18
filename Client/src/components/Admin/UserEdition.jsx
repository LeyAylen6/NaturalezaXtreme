import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Input, Button, Box, TableContainer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserEdition = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    // Agrega más objetos de datos según tus necesidades
  ]);

  // Función para manejar los cambios en los campos de entrada
  const handleInputChange = (event, id, field) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: event.target.value };
      }
      return item;
    });
    setData(newData);
  };

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
          <Link to="/crudUsers">User</Link>
        </Button>
        <Button colorScheme="blue" size="lg" variant="solid" m="6">
          <Link to="/CrudProduct">Product</Link>
        </Button>
      </Box>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Age</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>
                <Input value={item.name} onChange={(event) => handleInputChange(event, item.id, "name")} />
              </Td>
              <Td>
                <Input value={item.age} onChange={(event) => handleInputChange(event, item.id, "age")} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserEdition;
