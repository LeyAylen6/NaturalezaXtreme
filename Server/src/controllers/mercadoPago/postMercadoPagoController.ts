import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import axios from "axios";

const postMercadoPagoController = async (userId: string) =>{

    const {data} = await axios(`http://localhost:3001/shoppingcart?userId=${userId}&status=pending`)
    
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
    const URLBK = 'https://7298-200-91-35-227.ngrok-free.app'
    //Url de redireccionamiento al back //Acá cada uno pone su propia URL de la página de ngrok
    const URL = 'http://localhost:5173'
        
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