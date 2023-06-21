import { Box, Button, Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Table, TableCaption, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { updateProduct } from "../../redux/actions/actions";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.detail);

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [form, setForm] = useState({
    id: product.id,
    active: product.active,
    name: product.name,
    description: product.description,
    price: product.price,
    size: product.size,
    shoeSize: product.shoeSize,
  });
  console.log(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAlertOpen(true);
  };

  const handleConfirm = () => {
    dispatch(updateProduct(form));
    setIsAlertOpen(false);
    navigate("/crudProduct");
  };

  const handleCancel = () => {
    setIsAlertOpen(false);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setForm({
      id: product.id,
      active: product.active,
      name: product.name,
      description: product.description,
      price: product.price,
    });
  };

  return (
    <Container border="2px" maxWidth="100%" marginTop={10}>
      <Box display={"flex"} justifyContent={"space-between"} border={"1px"} marginBottom="15px">
        <Button colorScheme="cyan" size="lg" variant="solid" m="6">
          <Link to="/CrudProduct">Back</Link>
        </Button>
        <Button colorScheme="orange" size="lg" variant="solid" m="6">
          <Link to="/crudProduct">Product</Link>
        </Button>
      </Box>
      <Table>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Product</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Th>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder={product.name} name="name" autoComplete="off" value={form.name} onChange={handleChange} />
                <br />
                <FormLabel mb="8px">Description: </FormLabel>
                <Input
                  type="text"
                  placeholder={product.description}
                  size={"md"}
                  name="description"
                  autoComplete="off"
                  value={form.description}
                  onChange={handleChange}
                />

                <FormLabel>Price : </FormLabel>
                <Input
                  type="number"
                  placeholder={product.price}
                  size={"md"}
                  name="price"
                  autoComplete="off"
                  onChange={handleChange}
                  value={form.price}
                />
              </FormControl>
              <Button colorScheme="teal" type="submit" m="6">
                Submit
              </Button>
              <Button colorScheme="teal" type="reset" m="6" onClick={handleReset}>
                Reset
              </Button>
            </form>
          </Th>
        </Tbody>
      </Table>
      {/* AlertDialog para confirmar el envío */}
      <AlertDialog isOpen={isAlertOpen} onClose={handleCancel}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            confirm change
          </AlertDialogHeader>
          <AlertDialogBody>Are you sure you want to submit the form?</AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="teal" onClick={handleConfirm}>
              Confirm
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleCancel}>
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Container>
  );
};

export default EditProduct;
