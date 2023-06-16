<<<<<<< HEAD
import { useEffect } from "react";
import Tarjeta from "../Card/Card";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actions";
import { Grid } from "@chakra-ui/react";
const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const productTest = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
=======
import { useEffect } from "react"
import Tarjeta from "../Card/Card"
import {connect, useDispatch, useSelector } from 'react-redux'
import { Grid } from "@chakra-ui/react"
const Favorites = (props) => {
    const dispatch = useDispatch()
    
    return (
        <div>
            <select>
                <option value="allProducts">All Products</option>
>>>>>>> dev

  return (
    <div>
      <select>
        <option value="allProducts">All Products</option>

        <option value="T-shirt">T-shirt</option>

        <option value="Sweater">Sweater</option>

        <option value="Pants">Pants</option>

<<<<<<< HEAD
        <option value="Accesories">Accesories</option>
=======
                <option value='jacket'>Jacket</option>
            </select>
            
            <div>
            <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"}>
        {
            props.myFavorites.map((product)=> {
                return (
                    <Tarjeta
                    button = {false}
                    image = {product.image}
                    name={product.name}
                    description = {product.description}
                    price = {product.price}
                    rating ={product.rating}
                    color= {product.color}
                    gender= {product.gender}
                   
                    key={product.id}
                    />
                )
            })
        }
       </Grid>
        </div>
>>>>>>> dev

        <option value="jacket">Jacket</option>
      </select>

      <div>
        <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"}>
          {productTest?.map((product) => {
            return (
              <Tarjeta
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                rating={product.rating}
                color={product.color}
                gender={product.gender}
              />
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
