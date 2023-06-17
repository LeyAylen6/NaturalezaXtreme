import { Request, Response } from "express";
import getArticlesByIdController from "../../controllers/articles/getArticleByIdController";

const getArticleById = async (req: Request, res: Response)=>{
    try{
        const {id} = req.query
        const articleID = req.query.articleID as string
        const article = await getArticlesByIdController(Number(id), articleID);
        
        return res.status(200).json(article)
    }
    catch(error: any){
        res.status(400).send(error.message)
    }
}

export default getArticleById;