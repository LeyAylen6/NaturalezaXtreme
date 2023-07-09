import { Flex, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getPosts } from "../../redux/actions/actions";
import Post from "./Post";

const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getCategories());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(getPosts(e.target.textContent));
  };

  return (
    <Grid templateColumns="20% 100%" gap={4} pt={120}>
      <GridItem borderRadius="xl" bgColor="rgba(46, 48, 58, 0.8)" m="25" padding="30" height={470}>
        {categories?.map((category) => {
          return (
            <Button
              key={category}
              value="category"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              margin="10px"
              borderColor="green.500"
              textTransform="uppercase"
              onClick={handleClick}
            >
              {category}
            </Button>
          );
        })}
      </GridItem>
      <GridItem
        borderRadius="xl"
        bgColor="rgba(46, 48, 58, 0.8)"
        mx={"auto"}
        maxWidth={"75%"}
        m="5"
        padding={"30"}
        align="center"
        justifyContent="center"
      >
        {!posts?.length && <Text>No posts yet</Text>}
        <Flex flexWrap="wrap" justifyContent={"center"} gap={5}>
          {posts?.map((post) => {
            return <Post key={post.id} name={post.name} image={post.image} content={post.content} role={post.role} />;
          })}
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Blog;

