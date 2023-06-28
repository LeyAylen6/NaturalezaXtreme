import axios from "axios";
import { AppDataSource } from "../../db";
import { Article } from "../../entities/articleEntity";



const infoMercadoPagoController = async (userId: string) => {

    /*const article = await AppDataSource.getRepository(Article).findOneBy({id:+data[0].article.id!}) */


    const { data } = await axios(`http://localhost:3001/shoppingcart?userId=${userId}`)
    const product: [] = data.shoppingArticles;


    const items = product.map(async (valorActual: any) => {
        if (valorActual.article.type === 'shoes') {
            //@ts-ignore
            valorActual.article!.shoeSize[large] = valorActual.article!.shoeSize[large] - +valorActual.quantity;
        } else {
            //@ts-ignore
            valorActual.article!.size[large] = valorActual.article!.size[large] - +valorActual.quantity;
     }
        await valorActual.article!.save()
    })

    console.log(items);




}

export default infoMercadoPagoController;