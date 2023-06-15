import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import Filters from "../Filters/Filters";
import { Box } from "@chakra-ui/react";
import { getAllProducts } from "../../redux/actions/actions";

const products = [
  {
    id: 1,
    img: "https://img.asmedia.epimg.net/resizer/cg8zh-LNTNjPJIjS_I4faokPGkc=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/2SQD3RVXQJHORPOBF7ICQXD7O4.jpg",
    name: "Adidas Run Away",
    size: "40",
    description: "Zapatillas adidas para correr",
    price: "$60.000",
    rating: "3 Estrellas",
    color: "Gris",
    stock: "5",
    gender: "Masculino",
  },
  {
    id: 2,
    img: "https://elzocco.com/wp-content/uploads/2019/05/nuevas-chanclas-de-Gucci-1.jpg",
    name: "Chanclas",
    size: "40",
    description: "Chanclas gucci para correr",
    price: "$10.000",
    rating: "3 Estrellas",
    color: "Marrón",
    stock: "1",
    gender: "Femenino",
  },
  {
    id: 3,
    img: "https://soytuti.com.ar/wp-content/uploads/2023/05/remera-termica-blanca-mod-ocean5-web-2023-1-scaled.jpg",
    name: "Remera termica",
    size: "s",
    description: "Remera termica contra el frio ",
    price: "$30.000",
    rating: "3 Estrellas",
    color: "blanca",
    stock: "20",
    gender: "Femenino",
  },
  {
    id: 4,
    img: "https://soytuti.com.ar/wp-content/uploads/2023/05/remera-termica-blanca-mod-ocean5-web-2023-1-scaled.jpg",
    name: "Remera termica",
    size: "s",
    description: "Remera termica contra el frio ",
    price: "$30.000",
    rating: "3 Estrellas",
    color: "blanca",
    stock: "20",
    gender: "Femenino",
  },
  {
    id: 5,
    img: "https://soytuti.com.ar/wp-content/uploads/2023/05/remera-termica-blanca-mod-ocean5-web-2023-1-scaled.jpg",
    name: "Remera termica",
    size: "s",
    description: "Remera termica contra el frio ",
    price: "$30.000",
    rating: "3 Estrellas",
    color: "blanca",
    stock: "20",
    gender: "Femenino",
  },
  {
    id: 6,
    img: "https://soytuti.com.ar/wp-content/uploads/2023/05/remera-termica-blanca-mod-ocean5-web-2023-1-scaled.jpg",
    name: "Remera termica",
    size: "s",
    description: "Remera termica contra el frio ",
    price: "$30.000",
    rating: "3 Estrellas",
    color: "blanca",
    stock: "20",
    gender: "Maculino",
  },
  {
    id: 7,
    img: "https://img.asmedia.epimg.net/resizer/cg8zh-LNTNjPJIjS_I4faokPGkc=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/2SQD3RVXQJHORPOBF7ICQXD7O4.jpg",
    name: "Adidas Run Away",
    size: "40",
    description: "Zapatillas adidas para correr",
    price: "$60.000",
    rating: "3 Estrellas",
    color: "Gris",
    stock: "5",
    gender: "Masculino",
  },
  {
    id: 8,
    img: "https://elzocco.com/wp-content/uploads/2019/05/nuevas-chanclas-de-Gucci-1.jpg",
    name: "Chanclas",
    size: "40",
    description: "Chanclas gucci para correr",
    price: "$10.000",
    rating: "3 Estrellas",
    color: "Marrón",
    stock: "1",
    gender: "Femenino",
  },
];
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <Box>
      <Filters />
      <CardContainer />
    </Box>
  );
};

export default Home;
