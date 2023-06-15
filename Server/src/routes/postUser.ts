import { Request, Response } from "express";
import postUserController from "../controllers/postUserController";

const postUser = async (req: Request, res: Response)=>{
    try {
        const { newUser } = req.body;

        const userCreated = await postUserController(newUser);
        
        return res.status(200).json(userCreated)
    }
    catch(error:any){
        res.status(400).json({error: error.message})
    }
}

export default postUser;