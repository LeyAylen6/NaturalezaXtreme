import { Request, Response } from "express";
import nodemailerController from "../../controllers/nodemailer/nodemailerController";

// RUTA SOLO DE PRUEBA PARA ENVIO DE EMAILS. 
// ! TIENE LIMITE DIARIO DE MAILS !

const nodemailerPRUEBAS = async(req: Request, res: Response) => {
    try {
        const data = req.body
        const { isSignUp, status, email } = data
        
        const shoppingCart = await nodemailerController(isSignUp, email, status);

        res.status(200).json(shoppingCart);

    } catch (error: any) {
        console.log(error)
    }
}

export default nodemailerPRUEBAS;