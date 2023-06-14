import React, { useEffect, useState } from "react";

const hardCode = {
	name: "Zapatillas",
	sizes: ["37", "40", "42", "43", "44"],
	description: "Zapatillas adidas para correr",
	price: 60000,
	rating: "3 Estrellas",
	color: "Celestes",
	stock: 0,
	gender: "Masculino",
};

const Detail = () => {
	const [product, setProduct] = useState({});
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		// pedir el detalle del producto al backend
		// setear el estado local product con la respuesta del backend
		setProduct(hardCode);
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

	const handleAddToFavorites = (event) => {
		event.preventDefault();
		// enviar el objeto del estado local product a user.favorites
		// modificar el estado local isFavorite para re renderizar en caso que sea producto favorito, para pintar el corazon, por ejemplo
		alert("add favorite");
	};

	return (
		<section id="container">
			<h1>{product.name}</h1>
			<h2>{product.gender}</h2>

			{/* para las estrellas haría otro componente ReviewBriefing */}

			<p>${product.price}</p>
			<form onSubmit={handleSubmit}>
				<label>Size</label>
				<select name="sizeSelector" id="">
					{product.sizes?.map((size) => (
						<option key={size}>{size}</option>
					))}
				</select>
				{product.stock ? (
					<p>Artículo actualmente disponible</p>
				) : (
					<p>Artículo no disponible</p>
				)}

				<label>Quantity</label>
				<input
					type="number"
					id="quantity"
					name="quantity"
					min="1"
					max={product.stock}
				></input>
				<button type="submit">Comprar</button>
				<button onClick={handleAddToCart}>Añadir al carrito</button>
				<button onClick={handleAddToFavorites}>
					Añadir a favoritos
				</button>
			</form>
		</section>
	);
};

export default Detail;
