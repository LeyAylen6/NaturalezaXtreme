import {
  Box,
  Button,
  ButtonGroup,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Container,
  TableCaption,
  TableContainer,
  Divider,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getArticles, getDetail, productdesactivate } from "../../redux/actions/actions";
import Paginate from "../Paginate/Paginate";
const ProductOutOfSale = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.articles);
  const [selectId, setselectId] = useState(null);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [productoIdEditar, setProductoIdEditar] = useState(null);

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
    dispatch(productdesactivate(productId, true));

    window.location.reload();
  };
  const handleEdit = (productId) => {
    setProductoIdEditar(productId);
    setMostrarAlerta(true);
  };

  const cerrarAlerta = () => {
    setMostrarAlerta(false);
  };
  const confirmarEdicion = () => {
    dispatch(getDetail(productoIdEditar));
    console.log("productId", productoIdEditar);
    cerrarAlerta();
    navigate(`/editProduct/`);
  };

  // Filtrar los productos que tienen la propiedad "active" en true
  const desactiveProducts = products.articlesFounded?.filter((product) => product.active === false);
  console.log("desactiveProducts", desactiveProducts);

  return (
    <Container maxW="container.xl" centerContent rounded="md" justifyContent="rigth" alignItems="center" pt={40}>
      <TableContainer maxW="container.xl" p="4" rounded="md" justifyContent="rigth" alignItems="center">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Button as={Link} to="/admin" colorScheme="cyan" size="lg" variant="solid" borderRadius={"15px"} m="6">
            Admin
          </Button>
          <Button as={Link} to="/crudUsers" colorScheme="orange" size="lg" variant="solid" m="6" borderRadius={"15px"}>
            User
          </Button>
          <Button as={Link} to="/crudProduct" colorScheme="whatsapp" size="lg" variant="solid" m="6" borderRadius={"15px"}>
            Product
          </Button>
          <Button as={Link} to="/FormProduct" colorScheme="blue" size="lg" variant="solid" m="6" borderRadius={"15px"}>
            New product
          </Button>
        </Box>
        <Table>
          <Thead>
            <TableCaption fontSize={"24px"} fontWeight={"semibold"}>
              List of products out of sale
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
            {desactiveProducts?.map((product) => (
              <Tr key={product.id} border={"2px"} borderColor={"gray.300"}>
                <Td
                  maxWidth="400px"
                  fontSize="18px"
                  fontWeight={"bold"}
                  wordBreak="break-all"
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  textOverflow={"ellipsis"}
                >
                  {product.name}
                </Td>
                <Td maxWidth={"2px"} fontWeight={"extrabold"}>
                  {product.articleID}
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
                <ButtonGroup size="md" variant={"outline"} paddingTop={8} paddingRight={10} display={"flex"} alignItems={"center"}>
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
                    activate
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
      <Divider orientation="horizontal" border={"1px"} />
      {/* <Paginate articles={products} /> */}
    </Container>
  );
};

export default ProductOutOfSale;
