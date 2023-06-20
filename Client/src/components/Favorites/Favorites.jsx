import { useEffect } from "react";
import Tarjeta from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actions";
import { Grid } from "@chakra-ui/react";
const Favorites = () => {
	const myFavorites = useSelector((state) => state.myFavorites);

	return (
		<div>
			<select>
				<option value="allProducts">All Products</option>

				<option value="T-shirt">T-shirt</option>

				<option value="Sweater">Sweater</option>

				<option value="Pants">Pants</option>

				<option value="Accesories">Accesories</option>

				<option value="jacket">Jacket</option>
			</select>

			<div>
				<Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"}>
					{myFavorites?.map((product) => {
						return (
							<Tarjeta
								id={product.id}
								key={product.id}
								name={product.name}
								price={product.price}
								image={product.image}
								description={product.description}
								rating={product.rating}
								color={product.color}
								gender={product.gender}
							/>
						);
					})}
				</Grid>
			</div>
		</div>
	);
};

export default Favorites;
