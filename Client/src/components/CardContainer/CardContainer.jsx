import Tarjeta from "../Card/Card";
import { Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const products = useSelector((state) => state.allProducts);

  return (
    <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"}>
      {products?.map((product, index) => {
        return (
          <div key={index}>
            <Tarjeta
              id={product.id}
              image={product.image}
              name={product.name}
              size={product.size}
              description={product.description}
              price={product.price}
              rating={product.rating}
              color={product.color}
              stock={product.stock}
              gender={product.gender}
            />
          </div>
        );
      })}
    </Grid>
  );
};
export default CardContainer;
