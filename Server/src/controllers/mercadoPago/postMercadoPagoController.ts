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
        
    let preference: CreatePreferencePayload  = {
        items,
        payer,
        payment_methods:{
            installments: 6
        },
        back_urls: {
            "success": `${process.env.URLFRONT}`,
            "failure": `${process.env.URLFRONT}`,
            //"pending": `${URL}`
        },
        auto_return: "approved",
        notification_url: `${process.env.ULR}/infoMercadoPago?userId=${userId}`
    };
    
    
    const response =  await mercadopago.preferences.create(preference);
    
    return { url: response.body.init_point }
}

export default postMercadoPagoController
