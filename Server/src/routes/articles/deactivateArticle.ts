import { Request, Response } from "express";
import desactivateArticleController from "../../controllers/articles/deactivateArticleController";

// Se debe enviar un id por params y un active: true/false por body
// Modifica true o false para activar o desactivar un producto.

const deactivateArticles = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const active = req.body.active as boolean

        const deactivatedArticle = await desactivateArticleController(Number(id), active);

        res.status(200).json(deactivatedArticle);
    
    } catch (error: any){
        if (error.message === `There is no article with that id`) {
            return res.status(404).send(error.message)  
        }
        res.status(500).send(error.message)
    }
}


export default deactivateArticles;