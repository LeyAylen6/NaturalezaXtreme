import { Request, Response } from "express";

const deleteFavorito = async (req: Request, res: Response)=>{
    try{
        
    }
    catch(error: any){
        res.status(400).send(error.message)
    }
}

export default deleteFavorito;