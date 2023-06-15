import { Request, Response } from "express";
import deleteArticleController from "../../controllers/articles/deleteArticleController";

const deleteArticles = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const articleToDelete = await deleteArticleController(Number(id));

        res.status(200).json(articleToDelete);
    
    } catch (error: any){
        if (error.message === `There is no article with that id`) {
            return res.status(404).send(error.message)  
        }
        res.status(500).send(error.message)
    }
}


export default deleteArticles;