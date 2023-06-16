import { Request, Response } from "express";
import deleteUserController from "../../controllers/users/desactivateUserController";

const deleteUser = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;
        const active = req.body.active as boolean

        const userToDelete = await deleteUserController(Number(id), active);
        
        return res.status(200).json(userToDelete)
    }
    catch(error: any){
        if(error.message === 'There is a user with that email') {
            return res.status(400).send(error.message)
        }
        res.status(500).send(error.message)
    }
}

export default deleteUser;