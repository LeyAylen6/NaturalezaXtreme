import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Comments = ({ comments }) => {
	return (<Box>
    <h1>Comments</h1>
    <Box textAlign={'left'}>
    {comments?.map((comment) => (<Text boxShadow='md' p='6' rounded='md' bg='white' mb='10px'>{comment}</Text>))}
    </Box>
  </Box>)
};

export default Comments;
