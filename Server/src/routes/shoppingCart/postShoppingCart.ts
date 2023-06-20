import { Request, Response } from "express";
import putShoppingCartController from "../../controllers/shoppingCart/postShoppingCartController";

const putShoppingCart = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const method = req.query.method as string;

        const articleToPost = await putShoppingCartController(data, method);

        res.status(200).json(articleToPost);
    
    } catch (error: any){
        if (error.message === `There is no article with that id`) {
            return res.status(404).send(error.message)  
        }
        res.status(500).send(error.message)
    }
}

export default putShoppingCart;