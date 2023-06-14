import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
const Tarjeta = ({
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
    <Card>
      <CardHeader>
        <p>{name}</p>
      </CardHeader>
      <CardBody>
        <p>{size}</p>
        <p>{description}</p>
        <p>{rating}</p>
        <p>{color}</p>
        <p>{price}</p>
        <p>{stock}</p>
      </CardBody>
      <CardFooter>
        <p>{gender}</p>
      </CardFooter>
    </Card>
  );
};

export default Tarjeta;
