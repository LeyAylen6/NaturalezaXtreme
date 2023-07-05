import Tarjeta from "../Card/Card";
import { Box, Flex, Text } from "@chakra-ui/react";
import Paginate from "../Paginate/Paginate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentLink } from "../../redux/actions/actions";

const CardContainer = () => {
  
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  
  useEffect(()=>{
    dispatch(setPaymentLink(""))
  }, [dispatch])

  return (
    <Box mx={"auto"} maxWidth={"1480px"} p={"0 20px"}>
      <Flex flexWrap="wrap" justifyContent={"center"} gap={6}>
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
      <Paginate articles={articles} />
      {!articles.articlesFounded?.length && <Text>No results match your search request</Text>}
    </Box>
  );
};
export default CardContainer;
