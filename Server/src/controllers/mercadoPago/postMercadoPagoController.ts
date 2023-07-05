import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import axios from "axios";

const postMercadoPagoController = async (userId: string) =>{

    const {data} = await axios(`https://servidor-naturextreme.onrender.com/shoppingcart?userId=${userId}&status=pending`)
    
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
    const URLBK = 'https://servidor-naturextreme.onrender.com'
    //Url de redireccionamiento al back //Acá cada uno pone su propia URL de la página de ngrok
    const URL = 'https://naturaleza-xtreme.vercel.app'
        
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
