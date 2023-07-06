import Tarjeta from "../Card/Card"
import { useSelector } from "react-redux"
import { Box, Grid, Select } from "@chakra-ui/react"
const Favorites = () => {
	const myFavorites = useSelector(state => state.myFavorites)

	return (
		<Box pt={90} height={"container.xl"}>
			<Box>
				<Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"} marginTop={"35"}>
					{myFavorites?.map(product => {
						return (
							<Tarjeta
								id={product.id}
								key={`article${product.id}`}
								name={product.name}
								price={product.price}
								image={product.image}
								description={product.description}
								rating={product.rating}
								color={product.color}
								gender={product.gender}
							/>
						)
					})}
				</Grid>
			</Box>
		</Box>
	)
}

export default Favorites
