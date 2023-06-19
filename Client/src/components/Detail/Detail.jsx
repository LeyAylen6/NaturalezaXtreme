import React, { useEffect, useState } from "react";
import { addFav, removeFav, resState } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Image, Flex, Button } from "@chakra-ui/react";

const hardCode = {
	articleID: "TS2525",
	name: "Man Hennia Tshirt UV",
	price: 25,
	rating: [5],
	brand: "Montagne",
	description:
		"100% Polyester. Stay protected from harmful UV rays with UPF 50+ Factor & UV PROTECTION. Our sun shirts block 99% more UV rays, keeping your sensitive skin safe in the summer.",
	gender: "Male",
	size: { XS: 1, S: 5, M: 6, L: 10, XL: 10, U: 0 },
	color: "Black",
	image: "https://d368r8jqz0fwvm.cloudfront.net/34883-product_lg/remera-de-hombre-hanoi-uv.jpg",
	type: "Tshirt",
	active: true,
};

const Detail = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	let myFavorites = useSelector((state) => state.myFavorites);
	// const articleDetail = useSelector((state) => state.detail);
	const articleDetail = hardCode;

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
			dispatch(resState());
		};
	}, []);

	useEffect(() => {
		console.log("check is favorite");
		// myFavorites.forEach((fav) => {
		// 	if (fav.id == id) {
		// 		setIsFavorite(true);
		// 	}
		// });
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		// verificar datos completados
		// agregar producto al carrito
		// navegar al carrito
		navigate("/cart");
		console.log("go to cart");
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

	const stockHandler = () => {
		let stock = true;
		for (const size in articleDetail.size) {
			if (size.hasOwnProperty(size)) {
				if (size[size] !== 0) {
					stock = false;
					break;
				}
			}
		}
		if (stock) {
			return <Box bg="#48BB78">Product in stock</Box>;
		} else {
			return <Box bg="tomato">Product out of stock</Box>;
		}
	};

	let sizeOptions = null;

	if (articleDetail.size && typeof articleDetail.size === "object") {
		sizeOptions = Object.entries(articleDetail.size).map(([key, value]) => (
			<option key={key} value={key}>
				{key} ({value})
			</option>
		));
	}

	return (
		<Flex justify="center" mt="20px">
			<Flex
				id="2box container"
				flexDirection="row"
				alignItems="start"
				gap="20px"
			>
				<Box>
					<Image
						mt="20px"
						boxSize={"300px"}
						objectFit={"cover"}
						src={articleDetail.image}
						alt={articleDetail.name}
					/>
				</Box>
				<Box textAlign="left" ml="40px">
					<Box
						fontSize="40px"
						fontWeight="semibold"
						bg="black"
						color="white"
						width="100%"
					>
						{articleDetail.name}
					</Box>
					<Box fontSize="40px" fontWeight="semibold">
						${articleDetail.price}
					</Box>
					<h2>{articleDetail.gender}</h2>
					<Box fontSize="25px" fontWeight="semibold">
						{articleDetail.brand}
					</Box>

					{/* para las estrellas haría otro componente ReviewBriefing */}

					<p>{articleDetail.color}</p>
					<p>{articleDetail.type}</p>
					<form onSubmit={handleSubmit}>
						<label>Size</label>
						<select>{sizeOptions}</select>
						{stockHandler()}
						<label>Quantity</label>
						<input
							type="number"
							id="quantity"
							name="quantity"
							min="1"
							max={articleDetail.stock}
						></input>
						<Flex
							id="buttons"
							direction="row"
							alignItems="stretch"
							gap="10px"
						>
							{!isFavorite ? (
								<Button onClick={handleFavorites} flex="1">
									Add to favorites
								</Button>
							) : (
								<Button onClick={handleFavorites} flex="1">
									Remove from favorites
								</Button>
							)}
							<Button onClick={handleAddToCart} flex="1">
								Add to cart
							</Button>
						</Flex>
						<Button
							type="submit"
							flex="none"
							width="100%"
							colorScheme="blackAlpha"
							bgColor="black"
							mt="10px"
						>
							Comprar
						</Button>
					</form>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Detail;
