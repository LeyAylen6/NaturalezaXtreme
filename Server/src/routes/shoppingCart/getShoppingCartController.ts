import { Request, Response } from "express";
import getShoppingCartController from "../../controllers/shoppingCart/getShoppingCartArticles";
import { CategoryCart } from "../../interfaces/categoryCart";

const getShoppingCart = async (req: Request, res: Response) => {
    try {
        const status = req.query.status as CategoryCart;
        const userId = req.query.userId;
        
        const shoppingCart = await getShoppingCartController(Number(userId), status);

        res.status(200).json(shoppingCart);
    
    } catch (error: any) {
        if (error.message === 'There must be at least one cart') {
            res.status(400).send(error.message)  
        
        } else if (error.message === 'There can only be one cart in pending status for each user') {
            res.status(400).send(error.message)
        }
        res.status(500).send(error.message)
    }
}

export default getShoppingCart;
