import { Request, Response } from "express";
import getCartByIdController from "../../controllers/shoppingCart/getCartByIdController";

const getCartById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const cartById = await getCartByIdController(Number(id));

        res.status(200).json(cartById);
    
    } catch (error: any) {
        if (error.message === 'There are no products in the cart') {
            return res.status(400).send(error.message)
        }
        res.status(500).send(error.message)
    }
}

export default getCartById;