import { originalColors } from "../../theme/palette";
import { addFav, removeFav, resState, getDetail, createPayment, addToMercadoPago } from "../../redux/actions/actions";
import SizeOptions from "./utils/SizeOptions";
import Rating from "../Rating/Rating";
import Comments from "../Comments/Comments";
import { setPaymentLink } from "../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react"
import { Box, Image, Flex, Button, Text, Select, HStack, VStack } from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"
import { useNavigate, useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import upCase from "../../utils/upCase"

const login = 'https://dev-p2xqhkfp7nv8gdru.us.auth0.com/u/login?state=hKFo2SBrNDdRcDFoeERVdTllU3RnYnNGZlNmdGI4aWxPTUdMb6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFhHMlhEVGFQR1UtZ25UNUZ3dE9sNS1WU3dCODdBbjhzo2NpZNkgNGNHTXVOYkxwQ1kzdnpMWHF2V3hHaFhoREV3bmN0cHU'

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
}

const Detail = () => {
  const paymentLink = useSelector((state) => state.paymentLink);
  //Se guarda el carrito local
  const cartLocal = JSON.parse(localStorage.getItem("cart")) || [];
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const aut = useAuth0();

	//Trae user Id y el carrito del localStorage
	const user = JSON.parse(localStorage.getItem("userId"))
	//  const storageCart = JSON.parse(localStorage.getItem("cart")) //Se usaría si hay una vista de payments

	//Suscripcion a estados globales
	let myFavorites = useSelector(state => state.myFavorites)
	const articleDetail = useSelector(state => state.detail)
	//const paymentLink = useSelector((state) => state.paymentLink);

	//Estados locales
	const [isFavorite, setIsFavorite] = useState(false)
	const [isInCart, setIsInCart] = useState(false)
	const [inStock, setInStock] = useState(false)
	const [productSelections, setProductSelections] = useState(initProductSelections)

	//Al renderizar
	useEffect(() => {
		//trae el detalle del artículo
		dispatch(getDetail(id))
		//verifica si está en estado global favoritos //Se puede manejar favoritos con localStorage?
		myFavorites.forEach(fav => {
			if (fav.id == id) {
				setIsFavorite(true)
			}
		})

		return () => dispatch(resState())
	}, [])

	//Muestra los talles de prendas o calzados según corresponda
	useEffect(() => {
		if (articleDetail.type === "shoes") {
			for (const size in articleDetail.shoeSize) {
				if (articleDetail.shoeSize.hasOwnProperty(size)) {
					if (articleDetail.shoeSize[size] !== 0) {
						setInStock(true)
						break
					}
				}
			}
		} else {
			for (const size in articleDetail.size) {
				if (articleDetail.size.hasOwnProperty(size)) {
					if (articleDetail.size[size] !== 0) {
						setInStock(true)
						break
					}
				}
			}
		}
	}, [articleDetail])

	//Guarda las selecciones en el estado local productSelections
	const handleChange = event => {
		const { name: property, value } = event.target
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
		})
	}

	//Guarda el carrito en localStorage
	const saveLocalStorage = () => {
		localStorage.setItem("cart", JSON.stringify(cartLocal))
	}

	//Agrega el artículo al carrito estado global
	const handleAddToCart = event => {
		event.preventDefault()
		if (isInCart) {
			setIsInCart(false)
			cartLocal.pop()
			saveLocalStorage()
		} else {
			setIsInCart(true)
			cartLocal.push(productSelections)
			saveLocalStorage()
		}
		dispatch(setPaymentLink(""))
	}

   // Función para finalizar la compra
   const handlePayment = async () => {
    try {
      const mercadoPagoItems = [{
        userId: user,
        articleId: productSelections.id,
        quantity: productSelections.quantity,
        size: productSelections.size || productSelections.shoeSize,
      }];
      console.log(mercadoPagoItems);
      dispatch(addToMercadoPago(mercadoPagoItems));
      const result = await dispatch(createPayment(aut.user));
      if (result === "success") {
        navigate("/");
        dispatch(updateProduct(count));
      }
    } catch (error) {
      setPaymentError(true);
    }
  };

  //Botón buyNow
  const handleSubmit = (event) => {
    event.preventDefault();
    {aut.user ? (paymentLink ? window.open(paymentLink) :handlePayment()): window.open(login)};
    //Usar función que genera link de MP que Agus está armando para el carrito
    backHome();
  };

	//boton agregar a favoritos
	const handleFavorites = event => {
		event.preventDefault()
		if (isFavorite) {
			setIsFavorite(false)
			removeFav({ userId: user.id, articleId: id }, dispatch)
		} else {
			setIsFavorite(true)
			addFav({ userId: user.id, articleId: id }, dispatch)
		}
	}

	//Muestra si el producto está en stock o no
	const stockComponentConfig = [
		{ bg: "#48BB78", content: "Product in stock", hidden: !inStock ? "hidden" : null },
		{ bg: "tomato", content: "Product out of stock", hidden: inStock ? "hidden" : null },
	]
	const StockDisplay = ({ content, ...config }) => {
		return <Box {...config} textAlign={'center'} fontWeight={'semibold'} p={'5px 0'}>{content}</Box>
	}

	return (
		<Flex align={"center"} w={'100vw'} direction="column" p={120}>
			<Button
				as={Link}
				to="/"
				colorScheme="gray"
				mt="10px"
				marginBottom={"20px"}
				border={"1px"}
				leftIcon={<ChevronLeftIcon boxSize={6} />}
			>
				Home
			</Button>
			<Flex id="2box container" flexDirection="row" gap="50px" bg={"gray.400"} borderRadius={"8px"} p={10}>
				<Box>
					<Image
						mt="20px"
						boxSize={"300px"}
						objectFit={"cover"}
						src={articleDetail.image}
						alt={articleDetail.name}
						borderRadius={"12px"}
					/>
				</Box>
				<Flex textAlign="left" direction={"column"} gap={2}>
					<Box fontSize="25px" fontWeight="semibold" width="100%">
						{articleDetail.name}
					</Box>
					<Box fontSize="25px">{articleDetail.brand}</Box>
					<Box>
						<Rating rating={articleDetail.rating} color={"yellow"} size={30} />
					</Box>
					<Box fontSize="30px" fontWeight="semibold">
						U$S {articleDetail.price}
					</Box>
					<Text>{upCase(articleDetail.gender)}</Text>
					{/* para las estrellas haría otro componente ReviewBriefing */}
					<HStack>
						<p>{upCase(articleDetail.color)}</p>
						<Box
							w="200px"
							h="30px"
							borderRadius={"10px"}
							display="inline-block"
							bgGradient={`linear(to-r,${articleDetail.color}, transparent)`}
						/>
					</HStack >
					<Box w="500px">
						<form onSubmit={handleSubmit} onChange={handleChange}>
							<Flex direction={'column'} gap={2}>
								{articleDetail.type !== "shoes" ? (
									<Select name="size" variant="filled" mt="20px" border={"1px"} borderColor={"black"}>
										<option value="">Choose size</option>
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
								{aut.user && (
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
								)}
              {paymentLink ? <Button
                isDisabled={!(productSelections.size || productSelections.shoeSize)}
                type="submit"
                flex="none"
                width="100%"
                colorScheme="blackAlpha"
                bgColor="black"
                mt="10px"
                
              >
                Buy
              </Button>
              :<Button
                isDisabled={!(productSelections.size || productSelections.shoeSize)}
                type="submit"
                flex="none"
                width="100%"
                colorScheme="blackAlpha"
                bgColor="black"
                mt="10px"
              >
                Buy Now
              </Button>}
							</Flex>
						</form>
					</Box>
				</Flex>
			</Flex>
			<Comments comments={articleDetail.comments} />
		</Flex>
	)
}

export default Detail
