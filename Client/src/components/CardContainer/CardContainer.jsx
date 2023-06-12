import Card from "../Card/Card"

const arr = [{
    name: 'Zapatillas',
    size: '40', 
    description: 'Zapatillas adidas para correr',
    price:'$60.000', 
    rating: '3 Estrellas', 
    color: 'Celestes',
    stock: '5', 
    gender: 'Masculino'
 }, 
 {
    name: 'Chanclas',
    size: '40', 
    description: 'Chanclas gucci para correr',
    price:'$10.000', 
    rating: '3 Estrellas', 
    color: 'negras',
    stock: '1', 
    gender: 'Femenino'
 }, 
 {  name: 'Remera termica',
 size: 's', 
 description: 'Remera termica contra el frio ',
 price:'$30.000', 
 rating: '3 Estrellas', 
 color: 'blanca',
 stock: '20',
 gender: 'Femenino'}]

 const CardContainer = () =>{
    return(
        <div>
            {
                arr?.map(product => 
                    {
                        return(
                            <Card 
                            name = {product.name}
                            size = {product.size}
                            description = {product.description}
                            price = {product.price}
                            rating = {product.rating}
                            color = {product.color}
                            stock ={product.stock}
                            />
                        )
                    })
            }
        </div>
    )
 }
 export default  CardContainer; 