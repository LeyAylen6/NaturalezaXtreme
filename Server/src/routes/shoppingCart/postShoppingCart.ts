import { Request, Response } from "express";
import postShoppingCartController from "../../controllers/shoppingCart/postShoppingCartController";

const postShoppingCart = async (req: Request, res: Response) => {
    try {
        const { data } = req.body
        const articleToPost = await postShoppingCartController(data);

        res.status(200).json(articleToPost);
    
    } catch (error: any){
        // if (error.message === `There is no article with that id`) {
        //     return res.status(404).send(error.message)  
        // }
        res.status(500).send(error.message)
    }
}

export default postShoppingCart;