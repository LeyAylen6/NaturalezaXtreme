import { AppDataSource } from "../../db";
import { Shopping_Cart } from "../../entities/shoppingCartEntity";
import { CategoryCart } from "../../interfaces/categoryCart";
import { queryShoppingCart } from "../../interfaces/queryShoppingCart";

const getShoppingCartController = async(userId?: number, status?: CategoryCart) => {

    const query: queryShoppingCart = {}

    if(userId) query.userId = userId;
    if(status) query.status = status;

    const shopping = await AppDataSource.getRepository(Shopping_Cart).find({ where: query })

    if(!shopping.length) throw new Error('There must be at least one cart')
    if(query.status === 'pending' && shopping.length > 1) throw new Error('There can only be one cart in pending status for each user')

    return shopping;
}

export default getShoppingCartController;