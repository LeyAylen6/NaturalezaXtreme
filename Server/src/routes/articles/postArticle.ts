import { Request, Response } from "express";
import { postArticleController } from "../../controllers/articles/postArticleController";

const postArticle = async(req: Request, res: Response) => {
    try {
        const article = req.body
        const { name, price, brand, gender, size, color, stock, image, type, active } = article

        if (!name || !price || !brand || !gender || !size || !color || !stock || !image || !type || !active) {
            throw new Error('Faltan Datos')
        }
    
        // rating: number[], 
        // comments: string[], 
   
        const post = await postArticleController(article)
        return res.status(200).json(post)

    } catch(error: any) {
        if (error.message === 'Faltan datos' || error.message === 'El articulo ya existe') {
            return res.status(400).send(error.message)
        }
        return res.status(500).send(error.message)
    }
}

export default postArticle;