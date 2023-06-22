import Tarjeta from "../Card/Card";
import { Box, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Paginate from "../Paginate/Paginate";

const CardContainer = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <Box>
      <Paginate articles={articles} />
      {!articles.length && <Text>No results match your search request</Text>}
      <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"}>
        {articles.articlesFounded?.map((product, index) => {
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
    </Box>
  );
};
export default CardContainer;
