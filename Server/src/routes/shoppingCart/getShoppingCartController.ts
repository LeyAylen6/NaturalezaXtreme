import { Request, Response } from "express";
// import getShoppingCartController from "../../controllers/shoppingCart/getShoppingCartArticles";

const getShoppingCart = async (req: Request, res: Response) => {
    try {
        
        // const articleToPost = await getShoppingCartController(userId, articleId);

        // res.status(200).json(articleToPost);
    
    } catch (error: any){
        if (error.message === `There is no article with that id`) {
            return res.status(404).send(error.message)  
        }
        res.status(500).send(error.message)
    }
}

export default getShoppingCart;
