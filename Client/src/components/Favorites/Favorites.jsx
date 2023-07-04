import { useEffect } from "react";
import Tarjeta from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actions";
import { Box, Grid, Select } from "@chakra-ui/react";
const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <Box>
      <Select width={"300px"} marginLeft={"850px"} border={"1px"} marginTop={"20px"} marginBottom={"20px"}>
        <option value="allProducts">All Products</option>

        <option value="T-shirt">T-shirt</option>

        <option value="Sweater">Sweater</option>

        <option value="Pants">Pants</option>

        <option value="Accesories">Accesories</option>

        <option value="jacket">Jacket</option>
      </Select>

      <Box>
        <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"} marginTop={"35"}>
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
      </Box>
    </Box>
  );
};

export default Favorites;
