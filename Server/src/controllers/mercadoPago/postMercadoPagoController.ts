import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { articleStructure } from "../../interfaces/articleStructure";

const postMercadoPagoController = async (product: articleStructure) =>{

    const URL = 'https://localhost:5173/'
        
    let preference: CreatePreferencePayload  = {
        items:  [
            {
                title: product.name,
                unit_price: +product.price,
                quantity: 1,
            }
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