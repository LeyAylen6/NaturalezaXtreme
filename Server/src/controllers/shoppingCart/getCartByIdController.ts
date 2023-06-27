import { AppDataSource } from "../../db";
import { Shopping_Cart } from "../../entities/shoppingCartEntity";

const getCartByIdController = async(id: number) => {

    const detailCart = await AppDataSource.getRepository(Shopping_Cart).find({
        relations: {
            user: true,
            shoppingArticles: { article: true },
        },
        where: { 
            id: id,
        }
    }) 

    if(!detailCart.length) throw new Error('There are no products in the cart')

    return detailCart[0];
}

export default getCartByIdController;

