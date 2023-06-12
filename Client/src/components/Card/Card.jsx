 import React from "react";
 import { Link } from 'react-router-dom';
 
  const Card = ({name, size, description, price, rating, color, stock}) => {
    return (
        <div>
         <p>{name}</p>
         <p>{size}</p>
         <p>{description}</p>
         <p>{rating}</p>
         <p>{color}</p>
         <p>{price}</p>
         <p>{stock}</p>
        </div>
    )
 }

 export default Card;