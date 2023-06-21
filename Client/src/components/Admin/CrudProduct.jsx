import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box, Image, Container } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, getDetail, productdesactivate } from "../../redux/actions/actions";

const CrudProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.articles);
  console.log("products", products);
  const [selectId, setselectId] = useState(null);

  useEffect(() => {
    // Si se selecciona un id, se ejecuta la accion getArticleId
    if (selectId !== null) {
      dispatch(getDetail(selectId));
      setselectId(null); // Se resetea el id
      navigate(`/detail/${selectId}`);
    }
    dispatch(getArticles());
  }, [dispatch, selectId, navigate]);

  const handleClick = (productId) => {
    setselectId(productId);
  };

  const handleDesactivate = (productId) => {
    dispatch(productdesactivate(productId, false));
    window.location.reload();
  };
  const handleEdit = (productId) => {
    dispatch(getDetail(productId));
    console.log("productId", productId);
    navigate(`/editProduct/`);
  };
  // Filtrar los productos que tienen la propiedad "active" en true
  const activeProducts = products.articlesFounded?.filter((product) => product.active === true);

  return (
    <Container maxW="container.xl" centerContent>
      <Paginate articles={products} />
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
            <Link to="/admin">Admin</Link>
          </Button>
          <Button colorScheme="orange" size="lg" variant="solid" m="6">
            <Link to="/crudUsers">User</Link>
          </Button>
          <Button colorScheme="purple" size="lg" variant="solid" m="6">
            <Link to="/productOutOfSale">Out of sale</Link>
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
            {activeProducts?.map((product) => (
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
                  {product.type !== "shoes" // Si el producto no es de tipo "shoes" se muestra el stock de "size"
                    ? Object.entries(product.size).map(([size, count]) => (
                        <Box key={size} fontWeight={"semibold"} color={count === 0 ? "red" : "inherit"}>
                          {size} : {count}
                        </Box>
                      )) // Si el producto es de tipo "shoes" se muestra el stock de "shoeSize"
                    : Object.entries(product.shoeSize).map(([shoeSize, count]) => (
                        <Box key={shoeSize} fontWeight={"semibold"} color={count === 0 ? "red" : "inherit"}>
                          {shoeSize} : {count}
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
                    Desactivate
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
    </Container>
  );
};

export default CrudProduct;
