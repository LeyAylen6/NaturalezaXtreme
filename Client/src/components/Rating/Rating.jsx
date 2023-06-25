import { AiFillStar } from "react-icons/ai";

import { itemsRating } from "./itemsRating";
import { HStack } from "@chakra-ui/react";

const Rating = ({ rating, color }) => {
  return (
    <HStack>
      {itemsRating.map((number, index) => {
        if (number <= rating) return <AiFillStar key={index} color={color} />;
      })}
    </HStack>
  );
};

export default Rating;
