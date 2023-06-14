import React, { useEffect, useState } from "react";

const hardCode = {
	name: "Zapatillas",
	sizes: ["37", "40", "42", "43", "44"],
	description: "Zapatillas adidas para correr",
	price: "$60.000",
	rating: "3 Estrellas",
	color: "Celestes",
	stock: 0,
	gender: "Masculino",
};

const Detail = () => {
	const [product, setProduct] = useState({});

	useEffect(() => {
		setProduct(hardCode);
	}, []);

	const handleSubmit = () => {
		alert("submited");
	};

	const handleFavorite = () => {
		alert("added to favorites");
	};

	return (
		<section id="container">
			<h1>{product.name}</h1>
			<h2>{product.gender}</h2>

			{/* para las estrellas haria otro componente ReviewBrief */}

			<p>{product.price}</p>
			<form onSubmit={handleSubmit}>
				<label for="sizeSelector">Size</label>
				<select name="sizeSelector" id="">
					{product.sizes?.map((size) => (
						<option>{size}</option>
					))}
				</select>
				{product.stock ? (
					<p>Articulo actualmente disponible</p>
				) : (
					<p>Articulo no disponible</p>
				)}

				<label for="quantity">Quantity</label>
				<input
					type="number"
					id="quantity"
					name="quantity"
					min="1"
					max={product.stock}
				></input>
				<button type="submit">Comprar</button>
				<button type="submit">Añadir al carrito</button>
				<button onClick={handleFavorite}>Añadir a favoritos</button>
			</form>
		</section>
	);
};

export default Detail;
