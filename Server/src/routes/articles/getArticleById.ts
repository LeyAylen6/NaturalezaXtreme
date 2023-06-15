import { Request, Response } from "express";
import getArticlesByIdController from "../../controllers/articles/getArticleByIdController";

const getArticleById = async (req: Request, res: Response)=>{
    try{
        const { id } = req.params;
        const article = await getArticlesByIdController(Number(id));
        
        return res.status(200).json(article)
    }
    catch(error: any){
        res.status(400).send(error.message)
    }
}

export default getArticleById;