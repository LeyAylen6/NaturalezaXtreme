import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/actions";
import Post from "./Post";

const Blog = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Box mx={"auto"} maxWidth={"1480px"} p={"0 20px"} m="5">
        {!posts?.length && <Text>No posts yet</Text>}
        <Flex flexWrap="wrap" justifyContent={"center"} gap={2}>
            {posts?.map((post) => {
                console.log(post)
              return (
                  <Post
                    key={post.id}
                    name={post.name}
                    image={post.image}
                    content={post.content}
                    role={post.role}
                  />
              );
            })}
        </Flex>
    </Box>
    )
}

export default Blog;