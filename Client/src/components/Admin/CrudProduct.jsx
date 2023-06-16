import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box, Image } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getArticleId } from "../../redux/actions/actions";

const CrudProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const [selectId, setselectId] = useState(null);
  const [redirectToDetail, setRedirectToDetail] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
    // Si se selecciona un id, se ejecuta la accion getArticleId
    if (selectId) {
      dispatch(getArticleId(selectId));
      setselectId(null); // Se resetea el id
      setRedirectToDetail(true); // Se activa la redirección
    }
  }, [dispatch, selectId]);

  // Si se activa la redirección, se redirige a la ruta /detail
  if (redirectToDetail) return Navigate(`/detail/${selectId}`);

  const handelClick = (selectId) => {
    console.log(selectId);
    setselectId(selectId);
  };

  return (
    <TableContainer
      maxW="container.xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p="6"
      m="6"
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
          <Link to="/FormProduct">New product</Link>
        </Button>
      </Box>
      <Table>
        <Thead>
          <TableCaption fontSize={"24px"}>List of products in store</TableCaption>
          <Tr bg="gray.100" border="1px" borderColor="gray.300" p="6" m="6">
            <Th>Product</Th>
            <Th>Image</Th>

            <Th>price U$s</Th>
            <Th>stock</Th>
            <Th display={"flex"} justifyContent={"center"}>
              Actions
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {products?.map((product) => (
            <Tr key={product.id}>
              <Td maxWidth="350px" fontSize="12px" fontStyle="italic" wordBreak="break-all">
                {product.name}
              </Td>
              <Td maxWidth={"2px"}>
                <Image src={product.image} alt="product" maxWidth={"45px"} height={"45px"} />
              </Td>

              <Td maxWidth={"10px"}>{product.price}</Td>
              <Td maxWidth={"10px"}>{product.stock}</Td>
              <ButtonGroup size="md" variant={"solid"} paddingTop={4}>
                <Button colorScheme="yellow" onClick={() => handelClick(product.id)}>
                  View
                </Button>
                <Button colorScheme="green">Edit</Button>
                <Button colorScheme="red">Delete</Button>
              </ButtonGroup>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Image</Th>
            <Th>Product</Th>

            <Th>Price</Th>
            <Th>Stock</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default CrudProduct;
