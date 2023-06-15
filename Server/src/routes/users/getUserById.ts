import { Request, Response } from "express";
import getUserController from "../../controllers/users/getUserByIdController";

const getUserById = async (req: Request, res: Response) => {
    const {id} = req.params;

    try{
    const { id } = req.params;
    const requestedUser = await getUserController(Number(id));
    
    return res.status(200).json(requestedUser)
    }

    catch(error: any){
        res.status(400).send(error.message)
    }
}

export default getUserById;