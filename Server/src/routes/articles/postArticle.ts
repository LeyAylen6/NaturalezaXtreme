import { Request, Response } from "express";
import postArticleController from "../../controllers/articles/postArticleController";

const postArticle = async(req: Request, res: Response) => {
    try {
        const article = req.body
        const { articleID, name, price, gender, color, image, type, active } = article
        
        if (!articleID || !name || !price || !gender || !color || !image || !type || !active) {
            throw new Error('Missing data')
        }
    
        const post = await postArticleController(article)
        return res.status(200).json(post)

    } catch(error: any) {
        if (error.message === 'Missing data' || error.message === 'The article already exist') {
            return res.status(400).send(error.message)
        }
        return res.status(500).send(error.message)
    }
}

export default postArticle;