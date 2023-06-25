import Tarjeta from "../Card/Card";
import { Box, Flex, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";

import Paginate from "../Paginate/Paginate";

const CardContainer = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <Box>
      <Paginate articles={articles} />
      {!articles.articlesFounded?.length && (
        <Text>No results match your search request</Text>
      )}
      <Flex flexWrap="wrap" justifyContent={"center"} gap={3}>
        {articles.articlesFounded?.map((product, index) => {
          return (
            <Box key={index}>
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
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
export default CardContainer;
