import { Request, Response } from "express";
import addFavsController from "../../controllers/favs/addFavsController";

const addFavs = async (req: Request, res: Response) => {
    try {

        const data = req.body
        const { userId, articleId } = data;
        const favsToAdd = await addFavsController(userId, articleId);

        res.status(200).json(favsToAdd);
    
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export default addFavs;