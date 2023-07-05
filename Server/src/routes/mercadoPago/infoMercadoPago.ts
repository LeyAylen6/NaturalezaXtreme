import { Request, Response } from 'express';
import mercadopago from 'mercadopago';
import infoMercadoPagoController from '../../controllers/mercadoPago/infoMPController';
import axios from 'axios';
import nodemailerController from '../../controllers/nodemailer/nodemailerController';



// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: process.env.MERCADOPAGO_ACCESS! // deben agregar a sus .env esta variable MERCADOPAGO_ACCESS con el valor que ya se los pase anteriormente
});


export const infoMercadoPago = async (req: Request, res: Response)  => {
    try {
        
        const { query } = req
        const {userId} = query
        
        const { data } = await axios(`https://servidor-naturextreme.onrender.comshoppingcart?userId=${userId}&status=pending`)
        const topic = query.topic || query.type;

        if(topic === 'payment'){
            const paymentId = query.id || query['data.id']
            let payment = await mercadopago.payment.findById(+paymentId!)
           
            if(payment.response.status === 'approved'){                
                await infoMercadoPagoController(String(userId), data);
               await nodemailerController(false,data.user.email,payment.response.status)
            }else{await nodemailerController(false,data.user.email,payment.response.status)}
        }


            
        return res.status(200).send( `Se actualizo la base de datos`)
        
    } catch (error) {
        return res.status(400).json({error: 'Algo salio mal'})
        
    }
};