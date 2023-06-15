import { Request, Response } from "express";
import getArticlesController from "../../controllers/articles/getArticlesController";
import getArticlesByNameController from "../../controllers/articles/getArticlesByNameController";

const getArticles = async (req:Request, res:Response) => {
    try{
        const { name } = req.query;

        if (name) {
            if (typeof name !== "string") {
                throw new Error("Search for a valid product, Example: Jacket");
            }

            const articleByName = await getArticlesByNameController(name);
            return res.status(200).json(articleByName)
        }
        
        const getArticlesRes = await getArticlesController();
        res.status(200).json(getArticlesRes)
    
    } catch (error: any){
        if (error.message === `no matches were found for your search`) {
            return res.status(404).send(error.message)  
        }
        res.status(400).send(error.message)
    }
}


export default getArticles;