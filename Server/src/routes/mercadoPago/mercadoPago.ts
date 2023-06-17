import { Request, Response } from 'express';
import mercadopago from 'mercadopago';
import { articleStructure } from '../../interfaces/articleStructure';
import postMercadoPagoController from '../../controllers/mercadoPago/postMercadoPagoController';



// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: process.env.MERCADOPAGO_ACCESS! || 'TEST-695361669423091-032219-2948e84b943fcd0abe8ebcb5cd23cd8c-263988706'// esto debe ir en un .env se lo dejo asi no necesitan crear una nueva cuenta en MP
});



export const postMercadoPago = async (req: Request, res: Response)  => {
    try {
        const product: articleStructure = req.body

        
        return res.status(200).json(postMercadoPagoController(product))
        
    } catch (error) {
        console.log(error);
        
    }
};

