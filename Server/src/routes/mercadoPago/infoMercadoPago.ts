import { Request, Response } from 'express';
import mercadopago from 'mercadopago';
import postMercadoPagoController from '../../controllers/mercadoPago/postMercadoPagoController';
import { preferenceMP } from '../../interfaces/preferernceMercadoPago';
import axios from 'axios';
import { AppDataSource } from '../../db';
import { Article } from '../../entities/articleEntity';
import { type } from 'os';
import { Shopping_Cart } from '../../entities/shoppingCartEntity';
import { Shopping_Cart_Article } from '../../entities/shoppingCart_ArticleEntity';
import infoMercadoPagoController from '../../controllers/mercadoPago/infoMPController';



// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: process.env.MERCADOPAGO_ACCESS! // deben agregar a sus .env esta variable MERCADOPAGO_ACCESS con el valor que ya se los pase anteriormente
});


export const infoMercadoPago = async (req: Request, res: Response)  => {
    try {
        console.log(req.body);
        
        const { query } = req
        const {userId} = query
        
        
        const topic = query.topic || query.type;

        if(topic === 'payment'){
            const paymentId = query.id || query['data.id']
            let payment = await mercadopago.payment.findById(+paymentId!)
           
            if(payment.response.status === 'approved'){                
                infoMercadoPagoController(String(userId))
            }
        }


            
        return res.status(200).json(query)
        
    } catch (error) {
        return res.status(400).json({error: 'Algo salio mal'})
        
    }
};