import { Request, Response } from "express";
import updateUserController from "../../controllers/users/updateUserController";

const updateUser = async(req: Request, res: Response) => {
    try {
        const user = req.body
        const userToUpdate = await updateUserController(user)
        
        return res.status(200).json(userToUpdate)

    } catch(error: any) {
        if (error.message === 'There are no matches with the searched item') {
            return res.status(404).send(error.message)
        } else if (error.message === 'Cannot modify the active property of the user') {
            return res.status(400).send(error.message)
        }
        return res.status(500).send(error.message)
    }
}

export default updateUser;