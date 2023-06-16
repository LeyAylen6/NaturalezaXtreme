import React, { useEffect, useState } from "react";
import { addFav, removeFav, resState } from "../../redux/actions/actions";
import { connect, useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions/actions";
import {useParams} from 'react-router-dom'; 
const Detail = (props) => {

	const {id} = useParams()

	const [isFavorite, setIsFavorite] = useState(false);
	let myFavorites = useSelector((state) => state.myFavorites)      
	const articlesdetail = useSelector((state) => state.detail) 
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDetail(id));
		dispatch(resState(resState))
	},[dispatch, id])


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
			dispatch(removeFav(id))
			alert("remove favorite");
		} else {
			setIsFavorite(true);
			dispatch(addFav(articlesdetail));
			alert("add favorite");
		}
	};
	
	useEffect(() => {
		console.log(myFavorites)
		myFavorites.forEach((fav) => {
		   
		   if (fav.id == id) {
			setIsFavorite(true);
		   }
		});
	 }, [myFavorites]);


	let sizeOptions = null;

 if (articlesdetail.size && typeof articlesdetail.size === "object") {
  sizeOptions = Object.entries(articlesdetail.size).map(([key, value]) => (
    <option key={key} value={key}>{key} ({value})</option>
  ));
}
	return (
		<section id="container">
			 <div>
                            <img src={articlesdetail.image} alt=''/>
                        </div>
			<h1>{articlesdetail.name}</h1>
			<h2>{articlesdetail.gender}</h2>
			<h2>{articlesdetail.brand}</h2>

			{/* para las estrellas haría otro componente ReviewBriefing */}

			<p>${articlesdetail.price}</p>
			<p>{articlesdetail.color}</p>
			<p>{articlesdetail.type}</p>
			<form onSubmit={handleSubmit}>
				<label>Size</label>
				<select>
                     {sizeOptions}
              </select>
				{articlesdetail.stock ? (
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
					max={articlesdetail.stock}
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
	
