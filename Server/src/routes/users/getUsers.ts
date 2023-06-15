import { Request, Response } from "express";
import getUsersController from "../../controllers/users/getUsersController";
import { isBoolean } from "util";

const getUsers = async (req: Request, res: Response)=>{
    try {
        // const { email } = req.query
        // if (email) {} 

        let activeBolean = false

        const rol = req.query.rol as string;
        const active = req.query.active as string;
        
        if (active == 'true') activeBolean = true;
        if (active == 'false') activeBolean = false;
        
        const users = await getUsersController(rol, activeBolean);
        
        return res.status(200).json(users)
    
    } catch(error: any){
        if(error.message === 'There is a user with that email') {
            res.status(400).send(error.message)
        }
        res.status(500).send(error.message)
    }
}

export default getUsers;