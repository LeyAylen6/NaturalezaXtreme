import { AppDataSource } from "../../db";
import { Shopping_Cart } from "../../entities/shoppingCartEntity";

const findOrCreateShoppingCartController = async(userId: number) => {

    const cart = await AppDataSource.getRepository(Shopping_Cart).findOneBy({ 
        userId: userId,
        status: 'pending'
    })

    if(cart) return cart


        const cartCreated = await AppDataSource.getRepository(Shopping_Cart).create({ userId})
        const newCart = await AppDataSource.getRepository(Shopping_Cart).save(cartCreated)

        return newCart;
}

export default findOrCreateShoppingCartController;