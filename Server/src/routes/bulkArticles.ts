import { Request, Response } from "express";
import bulkArticlesController from "../controllers/bulkArticlesController";

const bulkArticles = async (req: Request, res: Response)=>{
    try{
        const bulkResponse = await bulkArticlesController();
        res.status(200).send(bulkResponse);
    }
    catch(error:any){
        res.status(400).json({error: error.message})
    }
}

export default bulkArticles;
