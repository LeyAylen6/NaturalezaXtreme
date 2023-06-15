import { Request, Response } from "express";
import postUserController from "../../controllers/users/postUserController";

const postUser = async (req: Request, res: Response)=>{
    try {
        const { newUser } = req.body;
        const userCreated = await postUserController(newUser);
        
        return res.status(200).json(userCreated)
    }
    catch(error:any){
        res.status(400).send(error.message)
    }
}

export default postUser;