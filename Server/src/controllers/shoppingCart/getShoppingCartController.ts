import { AppDataSource } from "../../db";
import { Shopping_Cart } from "../../entities/shoppingCartEntity";
import { CategoryCart } from "../../interfaces/categoryCart";
import { queryShoppingCart } from "../../interfaces/queryShoppingCart";
import getCartByIdController from "./getCartByIdController";

const getShoppingCartController = async(userId?: number, status?: CategoryCart) => {

    const query: queryShoppingCart = {}

    if(status) query.status = status;
    if(userId) query.userId = userId;

    const shoppingCart = await AppDataSource.getRepository(Shopping_Cart).find({ where: query })

    
    if(!shoppingCart.length) throw new Error('There must be at least one cart')
    //if(query.status === 'pending' && shoppingCart.length > 1) throw new Error('There can only be one cart in pending status for each user')
    if(query.status === 'pending'){
        const fullShoppingCart = getCartByIdController(shoppingCart[0].id)
        return fullShoppingCart;
    }
    if(query.status === 'complete') return shoppingCart;
}

export default getShoppingCartController;