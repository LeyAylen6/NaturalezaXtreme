import { Request, Response } from "express";
import getArticlesController from "../controllers/getArticlesController";

const getArticles = async (req:Request, res:Response) => {
    try{
        const getArticlesRes = await getArticlesController();
        res.status(200).json(getArticlesRes)
    }
    catch(error: any){
        res.status(400).json({error: error.message})
    }
}

export default getArticles;