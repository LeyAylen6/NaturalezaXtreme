 import React from "react";
 import { Link } from 'react-router-dom';

  const Card = ({name, size, description, price, rating, color, stock, gender}) => {
    return (
        <div>
          <h1>probando</h1>
         <p>{name}</p>
         <p>{size}</p>
         <p>{description}</p>
         <p>{rating}</p>
         <p>{color}</p>
         <p>{price}</p>
         <p>{stock}</p>
         <p>{gender}</p>
        </div>
    )
 }

 export default Card;