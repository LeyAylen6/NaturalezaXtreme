import { Request, Response } from "express";
import getArticlesByNameController from "../controllers/getArticlesController";

interface RequestQuery {
    name: string;
}

const getArticlesByName = async( req: Request, res: Response) => {
    
    try{
        const name = req.query

        if (typeof name !== "string") {
            throw new Error("Query param 'name' has to be of type string");
        }

        const articleByName = await getArticlesByNameController(name);
        res.status(200).json(articleByName)
        
    }
    catch(error: any){
        res.status(400).send(error.message)
    }
}

export default getArticlesByName;