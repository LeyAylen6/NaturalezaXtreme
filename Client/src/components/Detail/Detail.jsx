import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import { addFav, removeFav, resState } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, createPayment } from "../../redux/actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Image, Flex, Button, Text, Select } from "@chakra-ui/react";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import SizeOptions from "./utils/SizeOptions";
import Rating from "../Rating/Rating";
import { originalColors } from "../../theme/palette";

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

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userId);

  let myFavorites = useSelector((state) => state.myFavorites);
  const articleDetail = useSelector((state) => state.detail);
  const cartArticles = useSelector((state) => state.cartArticles);
  const paymentLink = useSelector((state) => state.paymentLink);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [productSelections, setProductSelections] = useState(initProductSelections);

  console.log("article detail", articleDetail)
  // console.log("cart articles", cartArticles);
  // console.log("product selections", productSelections);
  // console.log(inStock)

  useEffect(() => {
    dispatch(getDetail(id));
    myFavorites.forEach((fav) => {
      if (fav.id == id) {
        setIsFavorite(true);
      }
    });
    cartArticles.forEach((article) => {
      if (article.id == id) {
        setIsInCart(true);
      }
    });
    return () => {
      dispatch(resState());
    };
  }, []);

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

  //handler de los campos
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
      price: articleDetail.price,
      [property]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToCart(productSelections));
    navigate("/cart");
  };

  //boton agregar al carrito
  const handleAddToCart = (event) => {
    event.preventDefault();
    if (isInCart) {
      setIsInCart(false);
      dispatch(removeFromCart(id));
    } else {
      setIsInCart(true);
      dispatch(addToCart(productSelections));
    }
  };

  console.log({userId: user, articleId: id})
  
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

  const stockComponentConfig = [
    { bg: "#48BB78", content: "Product in stock", hidden: !inStock ? "hidden" : null },
    { bg: "tomato", content: "Product out of stock", hidden: inStock ? "hidden" : null },
  ];
  const StockDisplay = ({ content, ...config }) => {
    return <Box {...config}>{content}</Box>;
  };

  return (
    <Flex align={"center"} mt="50px" direction="column">
      <Flex id="2box container" flexDirection="row" gap="100px">
        <Box>
          <Image mt="20px" boxSize={"300px"} objectFit={"cover"} src={articleDetail.image} alt={articleDetail.name} />
        </Box>
        <Box textAlign="left">
          <Box fontSize="40px" fontWeight="semibold" width="100%">
            {articleDetail.name}
          </Box>
          <Box fontSize="25px" fontWeight="semibold">
            {articleDetail.brand}
          </Box>
          <Box mb={5} mt={2}>
            <Rating rating={articleDetail.rating} color={originalColors.blueRating} size={30} />
          </Box>
          <Box fontSize="40px" fontWeight="semibold">
            ${articleDetail.price}
          </Box>
          <Text>{articleDetail.gender}</Text>
          {/* para las estrellas haría otro componente ReviewBriefing */}
          <p>{articleDetail.color}</p>
          <Box w="500px">
            <form onSubmit={handleSubmit} onChange={handleChange}>
              {articleDetail.type !== "shoes" ? (
                <Select name="size" variant="filled" mt="20px">
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
                  <Button onClick={handleFavorites} flex="1" m="10px">
                    Add to favorites
                  </Button>
                ) : (
                  <Button onClick={handleFavorites} flex="1" m="10px">
                    Remove from favorites
                  </Button>
                )}

                {!isInCart ? (
                  <Button onClick={handleAddToCart} isDisabled={!(productSelections.size || productSelections.shoeSize)} flex="1" m="10px">
                    Add to cart
                  </Button>
                ) : (
                  <Button onClick={handleAddToCart} flex="1" m="10px">
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
        <Comments comments={articleDetail.comments} />
      </Flex>
    </Flex>
  );
};

export default Detail;
