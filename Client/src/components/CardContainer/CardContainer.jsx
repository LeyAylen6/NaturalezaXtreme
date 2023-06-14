import Tarjeta from "../Card/Card";
import { Grid } from "@chakra-ui/react";

const arr = [
  {
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

const CardContainer = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"}>
      {arr?.map((product) => {
        return (
          <div>
            <Tarjeta
              img={product.img}
              name={product.name}
              size={product.size}
              description={product.description}
              price={product.price}
              rating={product.rating}
              color={product.color}
              stock={product.stock}
              gender={product.gender}
            />
          </div>
        );
      })}
    </Grid>
  );
};
export default CardContainer;
