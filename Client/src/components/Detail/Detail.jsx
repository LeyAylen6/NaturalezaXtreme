import React, { useEffect, useState } from "react";
import { Box, Image, Flex, Button, Text, Select } from "@chakra-ui/react";
import { originalColors } from "../../theme/palette";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav, resState, getDetail } from "../../redux/actions/actions";
import SizeOptions from "./utils/SizeOptions";
import Rating from "../Rating/Rating";
import Comments from "../Comments/Comments";
import { setPaymentLink } from "../../redux/actions/actions";

//Interface para cargar el estado local prouctSelections
const initProductSelections = {
  id: "",
  articleID: "",
  color: "",
  image: "",
  name: "",
  quantity: 1,
  price: 0,
  size: "",
  shoeSize: "",
};

//Se guarda el carrito local
const cartLocal = [];

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Trae user Id y el carrito del localStorage
  const user = JSON.parse(localStorage.getItem("userId"));
  //  const storageCart = JSON.parse(localStorage.getItem("cart")) //Se usaría si hay una vista de payments

  //Suscripcion a estados globales
  let myFavorites = useSelector((state) => state.myFavorites);
  const articleDetail = useSelector((state) => state.detail);
  //const paymentLink = useSelector((state) => state.paymentLink);

  //Estados locales
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [productSelections, setProductSelections] = useState(initProductSelections);

  //Al renderizar
  useEffect(() => {
    //trae el detalle del artículo
    dispatch(getDetail(id));
    //verifica si está en estado global favoritos //Se puede manejar favoritos con localStorage?
    myFavorites.forEach((fav) => {
      if (fav.id == id) {
        setIsFavorite(true);
      }
    });
  }, []);

  //Muestra los talles de prendas o calzados según corresponda
  useEffect(() => {
    if (articleDetail.type === "shoes") {
      for (const size in articleDetail.shoeSize) {
        if (articleDetail.shoeSize.hasOwnProperty(size)) {
          if (articleDetail.shoeSize[size] !== 0) {
            setInStock(true);
            break;
          }
        }
      }
    } else {
      for (const size in articleDetail.size) {
        if (articleDetail.size.hasOwnProperty(size)) {
          if (articleDetail.size[size] !== 0) {
            setInStock(true);
            break;
          }
        }
      }
    }
  }, [articleDetail]);

  //Guarda las selecciones en el estado local productSelections
  const handleChange = (event) => {
    const { name: property, value } = event.target;
    setProductSelections({
      userId: user,
      id: articleDetail.id,
      articleID: articleDetail.articleID,
      color: articleDetail.color,
      image: articleDetail.image,
      name: articleDetail.name,
      quantity: 1,
      type: articleDetail.type,
      price: articleDetail.price,
      [property]: value,
    });
  };

  //Guarda el carrito en localStorage
  const saveLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cartLocal));
  };

  //Agrega el artículo al carrito estado global
  const handleAddToCart = (event) => {
    event.preventDefault();
    if (isInCart) {
      setIsInCart(false);
      cartLocal.pop();
      saveLocalStorage();
    } else {
      setIsInCart(true);
      cartLocal.push(productSelections);
      saveLocalStorage();
    }
    dispatch(setPaymentLink(''))
  };

  //Botón buyNow
  const handleSubmit = (event) => {
    event.preventDefault();
    //Usar función que genera link de MP que Agus está armando para el carrito
    backHome();
  };

  //boton agregar a favoritos
  const handleFavorites = (event) => {
    event.preventDefault();
    if (isFavorite) {
      setIsFavorite(false);
      removeFav({ userId: user.id, articleId: id }, dispatch);
    } else {
      setIsFavorite(true);
      addFav({ userId: user.id, articleId: id }, dispatch);
    }
  };

  //Muestra si el producto está en stock o no
  const stockComponentConfig = [
    { bg: "#48BB78", content: "Product in stock", hidden: !inStock ? "hidden" : null },
    { bg: "tomato", content: "Product out of stock", hidden: inStock ? "hidden" : null },
  ];
  const StockDisplay = ({ content, ...config }) => {
    return <Box {...config}>{content}</Box>;
  };

  //Limpia el estado de detail con botón back to home y en buyNow
  const cleanDetailState = () => {
    dispatch(resState());
  };

  return (
    <Flex align={"center"} mt="50px" direction="column">
      <Button as={Link} to="/" colorScheme="gray" mt="10px" onClick={cleanDetailState} marginBottom={"20px"} border={"1px"}>
        Back to Home
      </Button>
      <Flex id="2box container" flexDirection="row" gap="100px" bg={"gray.400"} p={"20px"} borderRadius={"8px"}>
        <Box>
          <Image mt="20px" boxSize={"300px"} objectFit={"cover"} src={articleDetail.image} alt={articleDetail.name} borderRadius={"12px"} />
        </Box>
        <Box textAlign="left">
          <Box fontSize="40px" fontWeight="semibold" width="100%">
            {articleDetail.name}
          </Box>
          <Box fontSize="25px" fontWeight="semibold">
            {articleDetail.brand}
          </Box>
          <Box mb={5} mt={2}>
            <Rating rating={articleDetail.rating} color={"yellow"} size={30} />
          </Box>
          <Box fontSize="40px" fontWeight="semibold">
            U$S {articleDetail.price}
          </Box>
          <Text>{articleDetail.gender}</Text>
          {/* para las estrellas haría otro componente ReviewBriefing */}
          <p>{articleDetail.color}</p>
          <Box w="500px">
            <form onSubmit={handleSubmit} onChange={handleChange}>
              {articleDetail.type !== "shoes" ? (
                <Select name="size" variant="filled" mt="20px" border={"1px"} borderColor={"black"}>
                  <option value="">Choose a size</option>
                  <SizeOptions detailObject={articleDetail} />
                </Select>
              ) : (
                <Select name="shoeSize" variant="filled">
                  <option value="">Choose a size</option>
                  <SizeOptions detailObject={articleDetail} />
                </Select>
              )}
              <Box>
                {stockComponentConfig.map((config, index) => (
                  <StockDisplay {...config} key={`config${index}`} />
                ))}
              </Box>
              <Flex id="buttons" direction="row" alignItems="stretch" gap="10px">
                {!isFavorite ? (
                  <Button onClick={handleFavorites} flex="1" m="10px" border={"1px"} borderColor={"black"}>
                    Add to favorites
                  </Button>
                ) : (
                  <Button onClick={handleFavorites} flex="1" m="10px" border={"1px"} borderColor={"black"}>
                    Remove from favorites
                  </Button>
                )}

                {!isInCart ? (
                  <Button
                    onClick={handleAddToCart}
                    isDisabled={!(productSelections.size || productSelections.shoeSize)}
                    flex="1"
                    m="10px"
                    border={"1px"}
                    borderColor={"black"}
                  >
                    Add to cart
                  </Button>
                ) : (
                  <Button onClick={handleAddToCart} flex="1" m="10px" border={"1px"} borderColor={"black"}>
                    Remove from Cart
                  </Button>
                )}
              </Flex>
              <Button
                isDisabled={!(productSelections.size || productSelections.shoeSize)}
                type="submit"
                flex="none"
                width="100%"
                colorScheme="blackAlpha"
                bgColor="black"
                mt="10px"
              >
                Buy Now
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
      <Comments comments={articleDetail.comments} />
    </Flex>
  );
};

export default Detail;
