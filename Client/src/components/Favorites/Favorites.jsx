import { useEffect } from "react";
import Tarjeta from "../Card/Card";
import { connect, useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { getAllProducts } from "../../redux/actions/actions";
import { Grid } from "@chakra-ui/react";
const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const productTest = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(productTest);
=======
import { Grid } from "@chakra-ui/react";
const Favorites = (props) => {
  const dispatch = useDispatch();

>>>>>>> 4473f01c85e6dc20f63e41723fc535e8908a2c7e
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
          {productTest?.map((product) => {
            return (
              <Tarjeta
                key={product.id}
                name={product.name}
                price={product.price}
                img={product.image}
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
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
