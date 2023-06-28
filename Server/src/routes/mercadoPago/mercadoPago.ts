import { Request, Response } from 'express';
import mercadopago from 'mercadopago';
import postMercadoPagoController from '../../controllers/mercadoPago/postMercadoPagoController';
import { preferenceMP } from '../../interfaces/preferernceMercadoPago';



// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: process.env.MERCADOPAGO_ACCESS! // deben agregar a sus .env esta variable MERCADOPAGO_ACCESS con el valor que ya se los pase anteriormente
});

/* TARJETAS DE PRUEBA PARA PROBAR MP  */



export const postMercadoPago = async (req: Request, res: Response)  => {
    try {

        const mercadoPago = await postMercadoPagoController(req.body.userId.id)
        return res.status(200).json(mercadoPago)
        
    } catch (error) {
        console.log(error);
        
    }
};

