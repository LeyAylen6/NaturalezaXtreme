import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import axios from "axios";

const postMercadoPagoController = async (userId: string) =>{
    console.log({userId});
    
    const {data} = await axios(`http://localhost:3001/shoppingcart?userId=${userId}&status=pending`)
    console.log({MP:data});
    const product: [] = data.shoppingArticles;
    
    
    const items = product.map((valorActual: any)=>{
      return  {
            title: valorActual.article.name,
            unit_price: +valorActual.article.price,
            quantity: +valorActual.quantity,
        }
    })
    
    const payer = {
        email: data.user.email
    }
    const URLBK = 'https://c831-201-190-150-125.ngrok-free.app'
    const URL = 'https://7783-201-190-150-125.ngrok-free.app'
    // si no les funciona con esa url pongan http://localhost:3001/ 
        
    let preference: CreatePreferencePayload  = {
        items,
        payer,
        payment_methods:{
            installments: 6
        },
        back_urls: {
            "success": `${URL}`,
            "failure": `${URL}`,
            //"pending": `${URL}`
        },
        auto_return: "approved",
        notification_url: `${URLBK}/infoMercadoPago?userId=${userId}`
    };
    
    
    const response =  await mercadopago.preferences.create(preference);
    
    return { url: response.body.init_point }
}

export default postMercadoPagoController