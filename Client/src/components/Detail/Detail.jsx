import React, { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect, useSelector, useDispatch } from "react-redux";
const hardCode = {
	name: "Zapatillas",
	sizes: ["37", "40", "42", "43", "44"],
	description: "Zapatillas adidas para correr",
	price: 60000,
	rating: "3 Estrellas",
	color: "Celestes",
	stock: 0,
	gender: "Masculino",
	id: "1",
};

const Detail = () => {
	const [article, setArticle] = useState({});
	const [isFavorite, setIsFavorite] = useState(true);
	const myFavorites = useSelector((state) => state.myFavorites);

	const dispatch = useDispatch();

	useEffect(() => {
		// pedir el detalle del producto al backend
		// setear el estado local product con la respuesta del backend
		setArticle(hardCode);
	}, []);

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === article.id) {
				setIsFavorite(true);
			}
		});
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		// verificar datos completados
		// agregar producto al carrito
		// navegar al carrito
		alert("submited");
	};

	const handleAddToCart = (event) => {
		event.preventDefault();
		alert("add to cart");
	};

	const handleFavorites = (event) => {
		event.preventDefault();
		if (isFavorite) {
			setIsFavorite(false);
			dispatch(removeFav(article.id));
			alert("remove favorite");
		} else {
			setIsFavorite(true);
			dispatch(addFav(article));
			alert("add favorite");
		}
	};

	return (
		<section id="container">
			<h1>{article.name}</h1>
			<h2>{article.gender}</h2>

			{/* para las estrellas haría otro componente ReviewBriefing */}

			<p>${article.price}</p>
			<form onSubmit={handleSubmit}>
				<label>Size</label>
				<select name="sizeSelector" id="">
					{article.sizes?.map((size) => (
						<option key={size}>{size}</option>
					))}
				</select>
				{article.stock ? (
					<p>Product in stock</p>
				) : (
					<p>Product out of stock</p>
				)}

				<label>Quantity</label>
				<input
					type="number"
					id="quantity"
					name="quantity"
					min="1"
					max={article.stock}
				></input>
				<button type="submit">Comprar</button>
				<button onClick={handleAddToCart}>Add to cart</button>
				{!isFavorite ? (
					<button onClick={handleFavorites}> Add to favorites</button>
				) : (
					<button onClick={handleFavorites}>
						{" "}
						Delete from favorites
					</button>
				)}
			</form>
		</section>
	);
};

export default Detail;
