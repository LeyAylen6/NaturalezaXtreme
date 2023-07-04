import { Container, CardBody, Image, HStack, Progress, Divider, VStack, Avatar, Heading, TableContainer, TableCaption, Thead, Th, Card, Table, Tr, Td, Tbody, Tfoot, Box, Button, Grid, Flex, Stack, CardFooter } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasedCarts } from "../../redux/actions/actions";
import RateArticle from "../RateArticle/RateArticle";

const Shopping = () => {
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem("userId"));
  const purchasedArticles = useSelector((state) => state.purchasedArticles);
  const [toComment, setToComment] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  useEffect(() => {
    dispatch(getPurchasedCarts(userId));
  }, [dispatch]);

  const ratePurchase = (e, id) => {
    setSelectedArticleId(id);
    setToComment(true);
  };

  return (
    <Box margin={"10"}>
      {purchasedArticles?.map((article, index) => {
        return (
          <Flex key={index}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              key={`article-${index}`}
              padding={"15"}
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={article.image}
                alt={article.name}
                margin={"15"}
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>{article.name}</Heading>
                </CardBody>

                <CardFooter>
                  {article.commented ? (
                    <Container bg="green.200">Is commented</Container>
                  ) : (
                    <Button
                      variant='solid'
                      colorScheme='blue'
                      value={article.id}
                      onClick={(e) => ratePurchase(e, article.id)}
                    >
                      Rate your purchase
                    </Button>
                  )}
                </CardFooter>
              </Stack>
            </Card>
            <Box
              key={`box-${index}`}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              padding={"15"}
            >
              {toComment && selectedArticleId === article.id ? (
                <RateArticle id={article.id} userId={userId} />
              ) : null}
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Shopping;
