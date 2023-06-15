import { Article } from "../entities/articleEntity"
import { Request, Response } from "express";

const getArticlesByIdController = async(req: Request, res: Response) => {

    const article = await Article.findOneBy({id: +req.params.id})

    
    return article;
}

export default getArticlesByIdController;