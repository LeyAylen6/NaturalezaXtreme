import { Container, CardBody, Image, Heading, Box, Button, Flex, Stack, CardFooter, Card, Grid} from "@chakra-ui/react";
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
<Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(1, 1fr)" gap={4} pt={120}>
    {purchasedArticles.length === 0 ? (
      <Text>You haven't made purchases yet</Text>
    ) : (
      purchasedArticles.map((article, index) => {  
          <Flex key={index} margin={"20 px"}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              key={`article-${index}`}
              padding={"15"}
              width={"lg"}
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
        })
        )}
      </Grid>
  );
};

export default Shopping;
