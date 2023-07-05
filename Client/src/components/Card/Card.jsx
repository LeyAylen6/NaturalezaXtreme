import { useNavigate } from "react-router-dom";

import {
  Text,
  Card,
  CardBody,
  Img,
  Heading,
  Divider,
  HStack,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
import Rating from "../Rating/Rating";
import { originalColors } from "../../theme/palette";

const Tarjeta = ({ id, image, name, description, price, rating }) => {
  const navigate = useNavigate();

  const ratingPromed = (rating) => {
    var suma = 0;
    var promedio = 0;
    for (var i = 0; i < rating.length; i++) {
      suma = suma + rating[i];
      promedio = suma / rating.length;
    }
    return promedio;
  }
  
  const ratingFormated = rating ? ratingPromed(rating) : null;
  
  const handlerClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <Card
      maxW={"300px"}
      mt={"10px"}
      borderRadius="xl" 
      height={"400px"}
      boxShadow={"md"}
      _hover={{ boxShadow: "dark-lg", cursor: "pointer" }}
      onClick={handlerClick}
    >
      <CardBody>
        <Img
          objectFit={"contain"}
          margin={"auto"}
          rounded={"lg"}
          src={image}
          alt="image"
          width="250px"
          height="150px"
          borderRadius="lg"
        />

        <Divider mt={"10px"} />

        <VStack alignItems="flex-start">
          <Heading mt="10px" fontSize="18px" noOfLines={2} textAlign="left">
            {name}
          </Heading>
          <Text noOfLines="2" textAlign="left">
            {description}
          </Text>

          <HStack pt={2}>
            <Text fontStyle="oblique" fontWeight="bold" fontSize="20px">
              US${price}
            </Text>
          </HStack>
        </VStack>
      </CardBody>
      <CardFooter>
        <Rating color={originalColors.blueRating} rating={ratingFormated} />
      </CardFooter>
    </Card>
  );
};

export default Tarjeta;
