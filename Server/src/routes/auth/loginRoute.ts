import { Request, Response } from "express";
import loginController from "../../controllers/authHelpers/loginController";

const loginRoute = async (req: Request, res: Response)=>{
    const {email, password} = req.body

    try{
        const loginRes = await loginController(email, password);
        res.status(200).send(loginRes);
    }
    catch(error:any){
        res.status(400).json({error: error.message})
    }
}

export default loginRoute;
