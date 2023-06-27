import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { preferenceMP } from "../../interfaces/preferernceMercadoPago";

const postMercadoPagoController = async (product: preferenceMP[]) =>{
    
    const item = product.map((valorActual: preferenceMP)=>{
      return  {
            title: valorActual.name,
            unit_price: +valorActual.price,
            quantity: +valorActual.quantity,
        }
    })
   
    //const URL = 'https://7783-201-190-150-125.ngrok-free.app'
    const URL = ' http://localhost:5173/'
        
    let preference: CreatePreferencePayload  = {
        items:  [
            ...item
        ],
        back_urls: {
            "success": `${URL}`,
            "failure": `${URL}`,
            "pending": `${URL}`
        },
        auto_return: "approved",
        notification_url: `${URL}`
    };
    
    
    const response =  await mercadopago.preferences.create(preference);
    
    return { url: response.body.init_point }
}

export default postMercadoPagoController