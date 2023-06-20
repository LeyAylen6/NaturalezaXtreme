import { Request, Response } from "express";
import getUserByIdController from "../../controllers/users/getUserByIdController";

const getUserById = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const requestedUser = await getUserByIdController(Number(id));
        
        return res.status(200).json(requestedUser)
    }

    catch(error: any){
        res.status(400).send(error.message)
    }
}

export default getUserById;