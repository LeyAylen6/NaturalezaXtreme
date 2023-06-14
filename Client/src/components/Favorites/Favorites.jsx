import Tarjeta from "../Card/Card"

const Favorites = ({myFavorites}) => {
    return (
        <div>
            <select>
                <option value="allProducts">All Products</option>

                <option value='T-shirt'>T-shirt</option>

                <option value='Sweater'>Sweater</option>

                <option value="Pants">Pants</option>

                <option value='Accesories'>Accesories</option> 

                <option value='jacket'>Jacket</option>
            </select>
            
            <div>
        {
            myFavorites?.map(product=> {
                return (
                    <Tarjeta
                    name={fav.name}
                    price={product.price}
                    />
                )
            })
        }
        </div>

        </div>
    )
            }



export default Favorites;