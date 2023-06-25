import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import { addFav, removeFav, resState } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, createPayment } from "../../redux/actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import {
	Box,
	Image,
	Flex,
	Button,
	Text,
	Select,
	Stack,
} from "@chakra-ui/react";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

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

	let myFavorites = useSelector((state) => state.myFavorites);
	const articleDetail = useSelector((state) => state.detail);
	const cartArticles = useSelector((state) => state.cartArticles);
	const paymentLink = useSelector((state) => state.paymentLink);

	const [isFavorite, setIsFavorite] = useState(false);
	const [isInCart, setIsInCart] = useState(false);
	const [productSelections, setProductSelections] = useState(
		initProductSelections
	);

	console.log("article detail", articleDetail);
	// console.log("cart articles", cartArticles);
	// console.log("product selections", productSelections);

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

	//handler de los campos
	const handleChange = (event) => {
		const { name: property, value } = event.target;
		// console.log('handling change')
		// console.log(property, value);
		setProductSelections({
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

	//boton agregar a favoritos
	const handleFavorites = (event) => {
		event.preventDefault();
		console.log(isFavorite);
		if (isFavorite) {
			setIsFavorite(false);
			dispatch(removeFav(id));
		} else {
			setIsFavorite(true);
			dispatch(addFav(articleDetail));
		}
	};

	const stockHandler = () => {
		let stock = false;

		if (articleDetail.type === "shoe") {
			for (const size in articleDetail.shoeSize) {
				if (articleDetail.shoeSize.hasOwnProperty(size)) {
					if (articleDetail.shoeSize[size] !== 0) {
						stock = true;
						break;
					}
				}
			}
		} else {
			for (const size in articleDetail.size) {
				if (articleDetail.size.hasOwnProperty(size)) {
					if (articleDetail.size[size] !== 0) {
						stock = true;
						break;
					}
				}
			}
		}

		if (stock) {
			return (
				<Box bg="#48BB78" p="5px" textAlign="center">
					Product in stock
				</Box>
			);
		} else {
			return (
				<Box bg="tomato" p="5px" textAlign="center">
					Product out of stock
				</Box>
			);
		}
	};

	//mapea a string los objetos de talle de ropa
	let clotheSizeOptions = [];
	if (articleDetail.size && typeof articleDetail.size === "object") {
		clotheSizeOptions = Object.entries(articleDetail.size).map(
			([key, value]) => (
				<option key={key} value={key} disabled={!!!value}>
					"{key}"
				</option>
			)
		);
	}

	//mapea a string los objetos de talle de zapatillas
	let shoeSizeOptions = [];
	if (articleDetail.shoeSize && typeof articleDetail.shoeSize === "object") {
		shoeSizeOptions = Object.entries(articleDetail.shoeSize).map(
			([key, value]) => (
				<option key={key} value={key} disabled={!!!value}>
					N°{key}
				</option>
			)
		);
	}

	const enableButtonHandler = () => {
		if (
			productSelections.size === "" ||
			productSelections.shoeSize === ""
		) {
			return true;
		} else {
			return false;
		}
	};
	// console.log("disable?", enableButtonHandler());

	return (
		<Flex align={"center"} mt="50px" direction="column">
			<Flex id="2box container" flexDirection="row" gap="20px">
				<Box>
					<Image
						mt="20px"
						boxSize={"300px"}
						objectFit={"cover"}
						src={articleDetail.image}
						alt={articleDetail.name}
					/>
				</Box>
				<Box textAlign="left">
					<Box fontSize="40px" fontWeight="semibold" width="100%">
						{articleDetail.name}
					</Box>
					<Box fontSize="25px" fontWeight="semibold">
						{articleDetail.brand}
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
									<option value="">Choose size</option>
									{clotheSizeOptions}
								</Select>
							) : (
								<Select name="shoeSize" variant="filled">
									<option value="">Choose size</option>
									{shoeSizeOptions}
								</Select>
							)}
							{stockHandler()}
							{/* <label>Quantity</label>
						<input
							type="number"
							id="quantity"
							name="quantity"
							min="1"
							max={articleDetail.stock}
						></input> */}
							<Flex
								id="buttons"
								direction="row"
								alignItems="stretch"
								gap="10px"
							>
								{!isFavorite ? (
									<Button
										onClick={handleFavorites}
										flex="1"
										m="10px"
									>
										Add to favorites
									</Button>
								) : (
									<Button
										onClick={handleFavorites}
										flex="1"
										m="10px"
									>
										Remove from favorites
									</Button>
								)}

								{!isInCart ? (
									<Button
										onClick={handleAddToCart}
										isDisabled={enableButtonHandler()}
										flex="1"
										m="10px"
									>
										Add to cart
									</Button>
								) : (
									<Button
										onClick={handleAddToCart}
										isDisabled={enableButtonHandler()}
										flex="1"
										m="10px"
									>
										Remove from Cart
									</Button>
								)}
							</Flex>
							<Button
								isDisabled={enableButtonHandler()}
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
