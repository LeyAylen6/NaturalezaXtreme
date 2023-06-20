import { Request, Response } from "express";
import updateArticleController from "../../controllers/articles/updateArticleController";

const updateArticle = async(req: Request, res: Response) => {
    try {
        const article = req.body
        const articleToUpdate = await updateArticleController(article)
        
        return res.status(200).json(articleToUpdate)

    } catch(error: any) {
        if (error.message === 'There are no matches with the searched item') {
            return res.status(404).send(error.message)
        } else if (error.message === 'Cannot modify the active property of the article') {
            return res.status(400).send(error.message)
        }
        return res.status(500).send(error.message)
    }
}

export default updateArticle;