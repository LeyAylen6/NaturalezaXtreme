import { Request, Response } from "express";
import getArticlesByIdController from "../controllers/getArticlesByIdController";

const getArticlesById = async (req: Request, res: Response)=>{
    try{
        const article = await getArticlesByIdController(req, res);
        if(!article) throw Error('El articulo con ese id no existe')
        return res.status(200).json(article)
    }
    catch(error:any){
        res.status(400).json({error: error.message})
    }
}

export default getArticlesById;