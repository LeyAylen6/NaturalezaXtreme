import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getDetail, getArticleId } from "../../redux/actions/actions";

const CrudProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts);
  const [selectId, setselectId] = useState(null);

  useEffect(() => {
    // Si se selecciona un id, se ejecuta la accion getArticleId
    if (selectId !== null) {
      dispatch(getDetail(selectId));
      console.log(getDetail(selectId));
      setselectId(null); // Se resetea el id
      navigate(`/detail/${selectId}`);
    }
    dispatch(getAllProducts());
  }, [dispatch, selectId, navigate]);

  const handleClick = (productId) => {
    console.log(productId + "  click");
    setselectId(productId);
  };

  const handleDesactivate = (productId) => {
    console.log(productId + "  click");
    dispatch(getArticleId(productId, false));
    window.location.reload();
  };
  const handleEdit = (productId) => {
    console.log(productId + "  edit");
    navigate(`/editProduct`);
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
          <Link to="/FormProduct">New product</Link>
        </Button>
      </Box>
      <Table>
        <Thead>
          <TableCaption fontSize={"24px"} fontWeight={"semibold"}>
            List of products in store
          </TableCaption>
          <Tr bg="gray.100" border="1px" borderColor="gray.300" p="6" m="6">
            <Th>Id</Th>
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
          {products.allArticles?.map((product) => (
            <Tr key={product.id} border={"2px"} borderColor={"gray.300"}>
              <Td maxWidth={"2px"} fontWeight={"extrabold"}>
                {product.articleID}
              </Td>
              <Td maxWidth="350px" fontSize="12px" fontWeight={"bold"} wordBreak="break-all">
                {product.name}
              </Td>
              <Td>
                <Image src={product.image} alt="product" maxWidth={"100px"} height={"100px"} />
              </Td>

              <Td maxWidth={"10px"}>{product.price}</Td>
              <Td maxWidth={"10px"}>
                {Object.entries(product.size).map(([size, count]) => (
                  <Box key={size} fontWeight={"semibold"} color={count === 0 ? "red" : "inherit"}>
                    {size} : {count}
                  </Box>
                ))}
              </Td>
              <ButtonGroup size="md" variant={"solid"} paddingTop={8} paddingRight={10} display={"flex"} alignItems={"center"}>
                <Button colorScheme="yellow" onClick={() => handleClick(product.id)}>
                  View
                </Button>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    handleEdit(product.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    handleDesactivate(product.id);
                  }}
                >
                  Delete
                </Button>
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
