import { Request, Response } from "express";
import nodemailerController from "../controllers/nodemailer/nodemailerController";

const nodemailerPRUEBAS = async(req: Request, res: Response) => {
    try {
        const shoppingCart = await nodemailerController();

        res.status(200).json(shoppingCart);
        console.log('SALI BIEN')
    } catch (error: any) {
        console.log(error, 'NO ANDO')
    }
}

export default nodemailerPRUEBAS;