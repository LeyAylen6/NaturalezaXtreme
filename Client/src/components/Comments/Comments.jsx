import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Comments = ({ comments }) => {
  return (
    <Box>
      <Text fontSize={"36px"} marginTop={"20px"}>
        Comments
      </Text>
      <Box textAlign={"left"} bg={"gray.50"}>
        {comments?.map((comment, index) => (
          <Text key={index} boxShadow="md" p="6" rounded="md" bg="white" mb="10px">
            {comment.comment}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Comments;
