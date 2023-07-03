import { Request, Response } from "express";
import getCategorysController from "../../controllers/Blog/getCategortys";

const getCategorys = (req: Request, res: Response)=>{
    try {
        const categorys = getCategorysController();
        
        return res.status(200).json(categorys)
    
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export default getCategorys;
