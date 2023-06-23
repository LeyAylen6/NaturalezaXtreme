import {  HStack, Button } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions/actions";

const Paginate = ({ articles }) => {

  const dispatch = useDispatch();
const buttonNext = document.getElementById("next")
const buttonPrev = document.getElementById("prev")

  const handleClick = (event) => {
    if (event.target.value === "next") {
      if (articles.next != null) {
        return dispatch(nextPage(articles));
      }else{
        buttonNext.disabled = true;
      }
    } else {
      if (articles.prev != null) {
        return dispatch(prevPage(articles));
      }else{
        
        buttonPrev.disabled = true;
        
      }
    }
  };

  return (
    <HStack justifyContent={"center"}>
      <Button onClick={handleClick} value="prev" id="prev" >
        Prev
      </Button>
      <Button onClick={handleClick} value="next" id="next">
        Next
      </Button>
    </HStack>
  );
};

export default Paginate;
