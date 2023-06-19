import React, { useEffect, useState } from "react";
import { addFav, removeFav, resState } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, createPayment } from "../../redux/actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import MercadoPago from "../MercadoPago/Mercadopago";

const Detail = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  let myFavorites = useSelector((state) => state.myFavorites);
  const articleDetail = useSelector((state) => state.detail);
  const paymentLink = useSelector((state) => state.paymentLink);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetail(id));
    myFavorites.forEach((fav) => {
      if (fav.id == id) {
        setIsFavorite(true);
      }
    });
    return () => {
      dispatch(resState(resState));
    };

  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // verificar datos completados
    // agregar producto al carrito
    // navegar al carrito
    navigate("/cart");
    console.log("go to cart");
  };

  const handleDispatchToPay = (event) => {
     event.preventDefault();
     dispatch(createPayment(productPrice, productQuantity))
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log("add to cart");
  };

  const handleFavorites = (event) => {
    event.preventDefault();
    console.log(isFavorite);
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(removeFav(id));
      console.log("remove favorite");
    } else {
      setIsFavorite(true);
      dispatch(addFav(articleDetail));
      console.log("add favorite");
    }
  };

  useEffect(() => {
    console.log("check is favorite");
    // myFavorites.forEach((fav) => {
    // 	if (fav.id == id) {
    // 		setIsFavorite(true);
    // 	}
    // });
  }, []);

  let sizeOptions = null;

  if (articleDetail.size && typeof articleDetail.size === "object") {
    sizeOptions = Object.entries(articleDetail.size).map(([key, value]) => (
      <option key={key} value={key}>
        {key} ({value})
      </option>
    ));
  }
  return (
    <section id="container">
      <Box maxWidth={"150px"}>
        <Image boxSize={"100px"} objectFit={"cover"} marginTop={"30px"} src={articleDetail.image} alt="" />
      </Box>
      <h1>{articleDetail.name}</h1>
      <h2>{articleDetail.gender}</h2>
      <h2>{articleDetail.brand}</h2>

      {/* para las estrellas haría otro componente ReviewBriefing */}

      <p>${articleDetail.price}</p>
      <p>{articleDetail.color}</p>
      <p>{articleDetail.type}</p>
      <form onSubmit={handleSubmit}>
        <label>Size</label>
        <select>{sizeOptions}</select>
        {articleDetail.stock ? <p>Product in stock</p> : <p>Product out of stock</p>}

        <label>Quantity</label>
        <input type="number" id="quantity" name="quantity" min="1" max={articleDetail.stock}></input>

        <MercadoPago productPrice={productPrice} productQuantity={productQuantity} />

        <button onClick={handleAddToCart}>Add to cart</button>
        {!isFavorite ? (
          <button onClick={handleFavorites}>Add to favorites</button>
        ) : (
          <button onClick={handleFavorites}>Remove from favorites</button>
        )}
        
           {paymentLink ? (
        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          Comprar ahora
        </a>
      ) : (
        <button onClick={handleDispatchToPay}>Comprar</button>
      )}

      </form>
    </section>
  );
};

export default Detail;
