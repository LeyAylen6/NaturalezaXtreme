import { Box, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions/actions";

const Paginate = ({ articles }) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    if (event.target.value === "next") {
      if (articles.next != null) {
        return dispatch(nextPage(articles));
      }
    } else {
      if (articles.prev != null) {
        return dispatch(prevPage(articles));
      }
    }
  };

  return (
    <HStack justifyContent={"center"}>
      <Button onClick={handleClick} value="prev">
        Prev
      </Button>
      <Button onClick={handleClick} value="next">
        Next
      </Button>
    </HStack>
  );
};

export default Paginate;
