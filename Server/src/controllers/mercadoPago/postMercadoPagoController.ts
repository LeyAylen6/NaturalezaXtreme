import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import axios from "axios";

const postMercadoPagoController = async (userId: string) =>{
    const {data} = await axios(`http://localhost:3001/shoppingcart?userId=${userId}`)
    console.log({MP:data.shoppingArticles[0].article});
    const product: [] = data.shoppingArticles;
    
    
    const items = product.map((valorActual: any)=>{
      return  {
            title: valorActual.article.name,
            unit_price: +valorActual.article.price,
            quantity: +valorActual.quantity,
        }
    })
    
    const URLBK = 'https://2129-201-190-150-125.ngrok-free.app'
    const URL = 'https://7783-201-190-150-125.ngrok-free.app'
    // si no les funciona con esa url pongan http://localhost:3001/ 
        
    let preference: CreatePreferencePayload  = {
        items,
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