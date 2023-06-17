import React from "react";
import { Link } from "react-router-dom";
import {
  Text,
  Card,
  CardBody,
  Img,
  Stack,
  Heading,
  Divider,
  HStack,
} from "@chakra-ui/react";

const Tarjeta = ({
  id,
  image,
  name,
  description,
  price,
  rating,
  color,
  gender,
}) => {

console.log(image)

  if (name && name.length > 34) name = name.slice(0, 42) + "...";
  return (
    <Card maxW={"300px"} mt={"10px"} borderRadius={"none"} height={"400px"}>
      <CardBody>
        <Link to={`/detail/${id}`}>
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
        </Link>

        <Divider mt={"10px"} />

        <Stack alignItems={"flex-start"} pb={"8px"}>
          <Heading mt={"10px"} fontSize={"18px"} objectFit={"contain"}>
            {name}
          </Heading>

          <Text fontStyle={"oblique"}>{description}</Text>
          <Text fontStyle={"oblique"}>Color disponible: {color}</Text>

          <Text fontStyle={"oblique"}>{gender}</Text>
          <HStack spacing={"8.2rem"}>
            <Text fontStyle={"oblique"}>{rating}</Text>
            <Text fontStyle={"oblique"}>{price}</Text>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Tarjeta;
