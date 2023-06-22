import { AppDataSource } from "../../db";
import { Shopping_Cart_Article } from "../../entities/shoppingCart_ArticleEntity";

const getCartByIdController = async(id: number) => {

    const detailCart = await AppDataSource.getRepository(Shopping_Cart_Article).find({
        relations: {
            article: true
        },
        where: { 
            shoppingCart: id as any,
        }
    }) 

    if(!detailCart.length) throw new Error('There are no products in the cart')

    return detailCart;
}

export default getCartByIdController;