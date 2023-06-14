import React from "react";

import {
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Img,
  Stack,
  Heading,
  Divider,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
const Tarjeta = ({
  img,
  name,
  size,
  description,
  price,
  rating,
  color,
  stock,
  gender
}) => {
  return (
    <Card maxW={"300px"} mt={"10px"} borderRadius={"none"}>
      <CardBody>
        <Link href="/detail">
          <Img
            objectFit={"contain"}
            margin={"auto"}
            rounded={"lg"}
            src={img}
            alt="image"
            width="250px"
            height="150px"
            borderRadius="lg"
          />
        </Link>

        <Divider mt={"10px"} />

        <Stack alignItems={"flex-start"} pb={"8px"}>
          <Heading mt={"10px"} fontSize={"30px"}>
            {name}
          </Heading>
          <Text fontStyle={"oblique"}>{description}</Text>
          <Text fontStyle={"oblique"}>Color disponible: {color}</Text>

          <Text fontStyle={"oblique"}>{gender}</Text>
        </Stack>
        <HStack spacing={"8.2rem"}>
          <Text fontStyle={"oblique"}>{rating}</Text>
          <Text fontStyle={"oblique"}>{price}</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Tarjeta;
