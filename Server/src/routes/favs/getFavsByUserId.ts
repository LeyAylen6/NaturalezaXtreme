import { Request, Response } from "express";
import getFavsByUserIdController from "../../controllers/favs/getFavsByUserIdController";

const getFavsByUserId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const favsByUser = await getFavsByUserIdController(Number(id));

        res.status(200).json(favsByUser);
    
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export default getFavsByUserId;