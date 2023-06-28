import { Request, Response } from "express";
import deleteFavsController from "../../controllers/favs/deleteFavoritosController";

const deleteFavs = async (req: Request, res: Response) => {
    try {

        const data = req.body
        const { userId, articleId } = data;
        const favsToDelete = await deleteFavsController(userId, articleId);

        res.status(200).send(favsToDelete);
    
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export default deleteFavs;