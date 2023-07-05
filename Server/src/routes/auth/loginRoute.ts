import { Request, Response } from "express";
import loginController from "../../controllers/authHelpers/loginController";

const loginRoute = async (req: Request, res: Response)=>{
    const user = req.body

    try{
        const loginRes = await loginController(user);
        res.status(200).json(loginRes);
    }
    catch(error:any){
        res.status(400).json({error: error.message})
    }
}

export default loginRoute;
